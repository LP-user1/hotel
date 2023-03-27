import { Component, OnInit } from '@angular/core';
import { RoomsService } from 'src/app/services/rooms.service';

@Component({
  selector: 'app-luxury-room',
  templateUrl: './luxury-room.component.html',
  styleUrls: ['./luxury-room.component.scss'],
})
export class LuxuryRoomComponent implements OnInit {
  luxuryRooms!: any[];
  dataPending: boolean = true;
  constructor(private _roomService: RoomsService) {}
  ngOnInit(): void {
    this.getAllRooms();
  }
  getAllRooms(): any {
    // Manually trigger from component
    this._roomService.getAllRoomsData();
    this.luxuryRooms = this._roomService.allRooms.filter(
      (room) => room.roomType === 'luxury'
    );
    this.dataPending = false;
  }
}
