import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-bookings',
  templateUrl: './profile-bookings.component.html',
  styleUrls: ['./profile-bookings.component.scss'],
})
export class ProfileBookingsComponent {
  tableHeaders = ['Hotel', 'Book date', 'People'];
  bookingsData: {
    hotelName: string;
    bookDate: string;
    people: number;
  }[] = [
    {
      hotelName: 'Bình Thủy',
      bookDate: '2020-12-2',
      people: 2,
    },
    {
      hotelName: 'Ninh Kieu',
      bookDate: '2020-12-2',
      people: 2,
    },
  ];
  constructor() {}
}
