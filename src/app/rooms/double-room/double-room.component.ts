import { Component, OnInit } from '@angular/core';
import { RoomsService } from 'src/app/services/rooms.service';

@Component({
  selector: 'app-double-room',
  templateUrl: './double-room.component.html',
  styleUrls: ['./double-room.component.scss'],
})
export class DoubleRoomComponent implements OnInit {
  doubleRooms!: any[];
  dataPending: boolean = true;
  constructor(private _roomService: RoomsService) {}
  ngOnInit(): void {
    this.getAllRooms();
  }
  getAllRooms(): any {
    // Manually trigger from component
    this._roomService.getAllRoomsData();
    this.doubleRooms = this._roomService.allRooms.filter(
      (room) => room.roomType === 'double'
    );
    this.dataPending = false;
  }
}
