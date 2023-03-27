import { Component, OnInit } from '@angular/core';
import { RoomsService } from 'src/app/services/rooms.service';

@Component({
  selector: 'app-deluxe-room',
  templateUrl: './deluxe-room.component.html',
  styleUrls: ['./deluxe-room.component.scss'],
})
export class DeluxeRoomComponent implements OnInit {
  deluxeRooms!: any[];
  dataPending: boolean = true;

  constructor(private _roomService: RoomsService) {}
  ngOnInit(): void {
    this.getAllRooms();
  }
  getAllRooms(): any {
    // Manually trigger from component
    this._roomService.getAllRoomsData();
    this.deluxeRooms = this._roomService.allRooms.filter(
      (room) => room.roomType === 'deluxe'
    );
    this.dataPending = false;
  }
}
