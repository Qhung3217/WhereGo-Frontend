import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saved-page',
  templateUrl: './saved-page.component.html',
  styleUrls: ['./saved-page.component.scss'],
})
export class SavedPageComponent {
  tabSelected: string = 'Hotels';
  constructor() {}
}