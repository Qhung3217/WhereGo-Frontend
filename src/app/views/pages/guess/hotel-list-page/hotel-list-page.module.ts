import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotelListPageComponent } from './hotel-list-page.component';
import { BreadcrumbModule } from 'src/app/shared/components/breadcrumb/breadcrumb.module';
import { SidebarNavModule } from 'src/app/views/base/sidebar-nav/sidebar-nav.module';
import { FilterBoxModule } from 'src/app/shared/components/filter-box/filter-box.module';
import { XIconModule } from 'src/app/shared/icons/x-icon/x-icon.module';
import { HotelCardComponent } from './hotel-card/hotel-card.component';
import { RatingDecimarModule } from 'src/app/shared/components/rating-decimar/rating-decimar.module';
import { PaginationModule } from 'src/app/shared/components/pagination/pagination.module';
import { SlidersIconModule } from 'src/app/shared/icons/sliders-icon/sliders-icon.module';
import { DropdownDirectiveModule } from 'src/app/shared/directives/dropdown-directive/dropdown-directive.module';
import { ListItemModule } from 'src/app/shared/components/list-item/list-item.module';
@NgModule({
  declarations: [HotelListPageComponent, HotelCardComponent],
  imports: [
    CommonModule,

    BreadcrumbModule,
    SidebarNavModule,
    FilterBoxModule,
    RatingDecimarModule,
    PaginationModule,
    ListItemModule,

    DropdownDirectiveModule,

    XIconModule,
    SlidersIconModule,
  ],
  exports: [HotelListPageComponent],
})
export class HotelListPageModule {}
