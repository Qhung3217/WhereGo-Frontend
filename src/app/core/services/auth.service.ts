import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginResponse } from '../interfaces/login-response.interface';
import { TravelerService } from './traveler.service';
import { WriterService } from './writer.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  travelerCredential = new BehaviorSubject<string | null>(null);
  writerCredential = new BehaviorSubject<string | null>(null);
  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
    private cookie: CookieService,
    private travelerService: TravelerService,
    private writerService: WriterService
  ) {}
  register(
    email: string,
    password: string,
    username: string,
    name: string,
    tel: string,
    dob: string,
    avatar: null | File = null
  ) {
    const payload = new FormData();
    payload.append('email', email);
    payload.append('password', password);
    payload.append('username', username);
    payload.append('name', name);
    payload.append('tel', tel);
    payload.append('dob', dob);
    if (avatar == null) payload.append('avatar', '');
    else payload.append('avatar', avatar);

    return this.http.post<{ statusCode: string; message: string }>(
      environment.apiURL + 'signup',
      payload
    );
  }
  travelerLogin(email: string, password: string) {
    return this.http
      .post<LoginResponse>(
        environment.apiURL + 'login',
        {
          email,
          password,
        },
        {
          params: {
            type: 'traveler',
          },
        }
      )
      .pipe(
        tap((res) => {
          if (this.cookie.check('writer')) this.travelerLogout();
          this.handleAuthentication(res.username, res.token);
          this.setCookie(res.token, 1, false);
          this.travelerCredential.next(res.token);
        })
      );
  }
  writerLogin(email: string, password: string) {
    return this.http
      .post<LoginResponse>(
        environment.apiURL + 'login',
        {
          email,
          password,
        },
        {
          params: {
            type: 'writer',
          },
        }
      )
      .pipe(
        tap((res) => {
          if (this.cookie.check('traveler')) this.writerLogout();
          this.handleAuthentication(res.username, res.token, true);
          this.setCookie(res.token, 1, true);
          this.writerCredential.next(res.token);
        })
      );
  }
  writerLogout() {
    this.cookie.deleteAll();
    this.writerService.remove();
    console.log('Writer logout');
  }
  travelerLogout() {
    this.cookie.deleteAll();
    this.travelerService.remove();
    console.log('traveler logout');
  }
  private handleAuthentication(
    username: string,
    token: string,
    isWritter = false
  ) {
    if (isWritter) {
      if (this.cookie.check('writer')) this.writerLogout();
      this.writerService.getDetail(username, token);
      this.redirect(username);
    } else {
      if (this.cookie.check('traveler')) this.travelerLogout();
      this.travelerService.getDetail(username, token);
      this.redirect(username, false);
    }
  }
  private redirect(username: string, isWriter = true) {
    let nextUrl = null;
    let scroll = null;
    this.route.queryParamMap.subscribe((params) => {
      nextUrl = params.get('redirectUrl');
      scroll = params.get('scroll');
    });

    if (nextUrl) {
      this.router.navigateByUrl(decodeURIComponent(nextUrl));
    } else if (isWriter)
      this.router.navigate(['/writer'], {
        queryParamsHandling: 'merge',
      });
    else
      this.router.navigate(['/traveler'], {
        queryParamsHandling: 'merge',
      });
  }
  private setCookie(token: string, hour: number = 1, isWriter: boolean) {
    if (isWriter) {
      if (this.cookie.check('writer')) this.cookie.delete('writer');
      this.cookie.set('writer', token, {
        expires: this.addHoursToCurrentDate(hour),
      });
    } else {
      if (this.cookie.check('traveler')) this.cookie.delete('traveler');
      this.cookie.set('traveler', token, {
        expires: this.addHoursToCurrentDate(hour),
      });
    }
  }
  private addHoursToCurrentDate(hour: number) {
    const currentDate = new Date();
    const MINUTE_IN_HOUR = 60;
    const SECOND_IN_HOUR = 60;
    const MILISECOND_IN_SECOND = 1000;
    return new Date(
      currentDate.getTime() +
        hour * MINUTE_IN_HOUR * SECOND_IN_HOUR * MILISECOND_IN_SECOND
    );
  }
}
