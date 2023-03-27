import { Component, OnInit } from '@angular/core';
import { RoomsService } from 'src/app/services/rooms.service';

@Component({
  selector: 'app-single-room',
  templateUrl: './single-room.component.html',
  styleUrls: ['./single-room.component.scss'],
})
export class SingleRoomComponent implements OnInit {
  singleRooms!: any[];
  dataPending: boolean = true;
  userBooking: any;
  userBooked: any[] = [];

  constructor(private _roomService: RoomsService) {}
  ngOnInit(): void {
    this.getAllRooms();
  }
  getAllRooms(): any {
    this._roomService.getAllRoomsData();
    this.singleRooms = this._roomService.allRooms.filter((room) => {
      return room.roomType === 'single';
    });
    this.dataPending = false;
  }
}
