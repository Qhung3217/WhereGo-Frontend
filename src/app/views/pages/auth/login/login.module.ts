import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoadingSpinnerModule } from 'src/app/shared/components/loading-spinner/loading-spinner.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, FormsModule, RouterModule, LoadingSpinnerModule],
  exports: [LoginComponent],
})
export class LoginModule {}
