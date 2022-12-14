import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantListPageComponent } from './restaurant-list-page.component';
import { RestaurantCardComponent } from './restaurant-card/restaurant-card.component';

import { BreadcrumbModule } from 'src/app/shared/components/breadcrumb/breadcrumb.module';
import { FilterBoxModule } from 'src/app/shared/components/filter-box/filter-box.module';
import { RatingDecimarModule } from 'src/app/shared/components/rating-decimar/rating-decimar.module';
import { DropdownDirectiveModule } from 'src/app/shared/directives/dropdown-directive/dropdown-directive.module';

import { SlidersIconModule } from 'src/app/shared/icons/sliders-icon/sliders-icon.module';
import { XIconModule } from 'src/app/shared/icons/x-icon/x-icon.module';
import { SidebarNavModule } from 'src/app/views/base/sidebar-nav/sidebar-nav.module';
import { SavedActionDirectiveModule } from 'src/app/shared/directives/saved-action/saved-action-directive.module';
import { HeartIconModule } from 'src/app/shared/icons/heart-icon/heart-icon.module';
import { HeartSolidIconModule } from 'src/app/shared/icons/heart-solid-icon/heart-solid-icon.module';
import { RouterModule } from '@angular/router';
import { LoadingSpinnerModule } from 'src/app/shared/components/loading-spinner/loading-spinner.module';
import { NgxPaginationModule } from 'ngx-pagination';
import {
  LazyLoadImageModule,
  LAZYLOAD_IMAGE_HOOKS,
  ScrollHooks,
} from 'ng-lazyload-image';

@NgModule({
  declarations: [RestaurantListPageComponent, RestaurantCardComponent],
  imports: [
    CommonModule,
    RouterModule,

    NgxPaginationModule,
    LazyLoadImageModule,

    BreadcrumbModule,
    SidebarNavModule,
    FilterBoxModule,
    RatingDecimarModule,
    LoadingSpinnerModule,

    DropdownDirectiveModule,
    SavedActionDirectiveModule,

    HeartIconModule,
    HeartSolidIconModule,
    XIconModule,
    SlidersIconModule,
  ],
  exports: [RestaurantListPageComponent, RestaurantCardComponent],
  providers: [{ provide: LAZYLOAD_IMAGE_HOOKS, useClass: ScrollHooks }],
})
export class RestaurantListPageModule {}
