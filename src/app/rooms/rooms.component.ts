import { Component, OnInit } from '@angular/core';
import { Room, RoomList } from './rooms'

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {

  hotelName: string = 'Hilton Hotel';

  numberOfRooms: number = 10;

  hideRooms: boolean = false;

  toggle() {
    this.hideRooms = !this.hideRooms;
  }

  rooms: Room = {
    availableRooms: 10,
    bookedRooms: 5,
    totalRooms: 20
  }

  roomList: RoomList[] = [ ];


  constructor() { }

  ngOnInit(): void {
    this.roomList = [
      {
        roomNumber: 1,
        roomType: 'Standard',
        amenities: 'WiFi, TV, Air Conditioning',
        price: 100,
        photos: 'standard_room.jpg',
        checkinTime: new Date('2024-02-25T15:00:00Z'),
        rating : 3.523423
      },
      {
        roomNumber: 2,
        roomType: 'Deluxe',
        amenities: 'WiFi, TV, Air Conditioning, Mini Bar, Jacuzzi',
        price: 200,
        photos: 'deluxe_room.jpg',
        checkinTime: new Date('2024-02-25T14:00:00Z'),
        rating : 2.5234234
      },
      {
        roomNumber: 3,
        roomType: 'Suite',
        amenities: 'WiFi, TV, Air Conditioning, Mini Bar, Jacuzzi, Private Terrace',
        price: 300,
        photos: 'suite_room.jpg',
        checkinTime: new Date('2024-02-25T13:00:00Z'),
        rating : 4
      },
    ]
  }

}
