import { Component, Input, OnInit } from '@angular/core';
import { ImageService } from 'src/app/core/services/image.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() item?: any;
  @Input() category: 'hotel' | 'restaurant' = 'hotel';
  isHeartActive = false;

  constructor(public imageService: ImageService) {}
  handleHeartClick(event: MouseEvent) {
    this.isHeartActive = !this.isHeartActive;
    event.stopPropagation();
  }
}
