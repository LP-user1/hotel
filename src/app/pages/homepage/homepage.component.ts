import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { RoomsService } from 'src/app/services/rooms.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  popUp: boolean = true;
  showCaseRooms!: any[];
  facilities!: any[];

  constructor(private _roomService: RoomsService, private route: Router) {}

  ngOnInit(): void {
    this.showCaseRooms = this._roomService.getShowCaseRooms().slice(1);
    this.getFacilities();
  }
  popupToggle() {
    this.popUp = false;
  }
  getFacilities() {
    return (this.facilities = [
      'Spa',
      'Poolside Bar',
      'Car Parking',
      'Swimming pool',
      '24 hours security',
      'Water purification system',
    ]);
  }
  navigateBooking() {
    this.route.navigate(['/booking-room']);
  }
}
