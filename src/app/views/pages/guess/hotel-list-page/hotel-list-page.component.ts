import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { Hotel } from 'src/app/core/models/hotel.model';
import { HotelService } from 'src/app/core/services/hotel.service';
import { ImageService } from 'src/app/core/services/image.service';
import { SearchService } from 'src/app/core/services/search.service';

@Component({
  selector: 'app-hotel-list-page',
  templateUrl: './hotel-list-page.component.html',
  styleUrls: ['./hotel-list-page.component.scss'],
})
export class HotelListPageComponent implements OnInit, OnDestroy {
  filterSelected = ['Free parking', 'Pool', 'Breakfast included', 'Free wifi'];
  hotels!: Hotel[];
  hotelSub?: Subscription;
  isFetching = false;
  constructor(
    private searchService: SearchService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.hotelSub = this.route.queryParams.subscribe((params: Params) => {
      const keyword = params['keyword'];
      console.log('list: ', keyword);
      if (keyword) {
        this.isFetching = true;
        this.fetchData(keyword);
      }
    });
  }
  ngOnDestroy(): void {
    if (this.hotelSub) this.hotelSub.unsubscribe();
  }
  private fetchData(keyword: string) {
    this.searchService.hotelSearch(keyword).subscribe({
      next: (res) => {
        this.hotels = [...(res as Hotel[])];
        this.isFetching = false;
      },
      error: () => (this.isFetching = false),
    });
  }
}
