import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleDetailPageComponent } from './article-detail-page.component';
import { BreadcrumbModule } from 'src/app/shared/components/breadcrumb/breadcrumb.module';
import { LoadingSpinnerModule } from 'src/app/shared/components/loading-spinner/loading-spinner.module';
import { CircleExclamationIconModule } from 'src/app/shared/icons/circle-exclamation-icon/circle-exclamation-icon.module';
import { NgxSummernoteModule } from 'ngx-summernote';

@NgModule({
  declarations: [ArticleDetailPageComponent],
  imports: [
    CommonModule,
    NgxSummernoteModule,
    BreadcrumbModule,
    LoadingSpinnerModule,
    CircleExclamationIconModule,
  ],
  exports: [ArticleDetailPageComponent],
})
export class ArticleDetailPageModule {}
