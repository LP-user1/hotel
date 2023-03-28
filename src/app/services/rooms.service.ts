import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RoomsService implements OnInit {
  allRooms!: any[];
  showCaseRooms!: any[];
  dateToday: any = new Date(Date.now()).toISOString().split('T')[0];

  constructor() {}
  ngOnInit(): void {}
  getAllRoomsData(): any[] {
    
    this.allRooms = [
      {
        id: 0,
        roomName: 'Standard Single Room',
        roomType: 'single',
        bed: 1,
        guest: 2,
        normalRent: 2000,
        offRent: 1800,
        roomStatus: 'available',
        imgUrl: './assets/single_bed.jpg',
        complementary: 'Water bottle 1 litre, Tooth Brush, and Bathing Soap.',
      },
      {
        id: 1,
        roomName: 'Simple Room',
        roomType: 'single',
        bed: 1,
        guest: 2,
        normalRent: 1800,
        offRent: 1500,
        roomStatus: 'available',
        imgUrl: './assets/single_bed1.jpg',
        complementary: 'Water bottle 1 litre, and Bathing Soap.',
      },
      {
        id: 2,
        roomName: 'Normal Room',
        roomType: 'single',
        bed: 1,
        guest: 2,
        normalRent: 1800,
        offRent: 1599,
        roomStatus: 'na',
        imgUrl: './assets/single_bed2.jpg',
        complementary: 'Water bottle 1 litre, Tooth Brush, and Bathing Soap.',
      },
      {
        id: 3,
        roomName: 'One Person Room',
        roomType: 'single',
        bed: 1,
        guest: 2,
        normalRent: 2200,
        offRent: 1890,
        roomStatus: 'available',
        imgUrl: './assets/single_bed.jpg',
        complementary: 'Water bottle 1 litre, Tooth Brush, and Bathing Soap.',
      },
      {
        id: 4,
        roomName: 'Standard Single Room',
        roomType: 'single',
        bed: 1,
        guest: 2,
        normalRent: 1700,
        offRent: 1480,
        roomStatus: 'available',
        imgUrl: './assets/single_bed1.jpg',
        complementary: 'Water bottle 1 litre.',
      },
      {
        id: 5,
        roomName: 'Single Room',
        roomType: 'single',
        bed: 1,
        guest: 2,
        normalRent: 2000,
        offRent: 1900,
        roomStatus: 'available',
        imgUrl: './assets/single_bed2.jpg',
        complementary: 'Water bottle 1 litre, Tooth Brush, and Bathing Soap.',
      },
      {
        id: 6,
        roomName: 'Standard Single Room',
        roomType: 'single',
        bed: 1,
        guest: 2,
        normalRent: 1400,
        offRent: 1290,
        roomStatus: 'na',
        imgUrl: './assets/single_bed.jpg',
        complementary: 'Water bottle 1 litre.',
      },
      {
        id: 7,
        roomName: 'Single Room',
        roomType: 'single',
        bed: 1,
        guest: 2,
        normalRent: 2000,
        offRent: 1900,
        roomStatus: 'available',
        imgUrl: './assets/single_bed1.jpg',
        complementary: 'Water bottle 1 litre, Tooth Brush, and Bathing Soap.',
      },
      {
        id: 8,
        roomName: 'Standard Single Room',
        roomType: 'single',
        bed: 1,
        guest: 2,
        normalRent: 1400,
        offRent: 1290,
        roomStatus: 'available',
        imgUrl: './assets/single_bed2.jpg',
        complementary: 'Water bottle 1 litre.',
      },
      {
        id: 9,
        roomName: 'Standard Double Bedroom',
        roomType: 'double',
        bed: 1,
        guest: 4,
        normalRent: 2500,
        offRent: 2399,
        roomStatus: 'available',
        imgUrl: './assets/double_bed.jpg',
        complementary: 'Water bottle 1 litre, Tooth Brush, and Bathing Soap.',
      },
      {
        id: 10,
        roomName: 'Simple Double Bedroom',
        roomType: 'double',
        bed: 1,
        guest: 4,
        normalRent: 1800,
        offRent: 1500,
        roomStatus: 'available',
        imgUrl: './assets/double_bed1.jpg',
        complementary: 'Water bottle 1 litre, and Bathing Soap.',
      },
      {
        id: 11,
        roomName: 'Normal Double Bedroom',
        roomType: 'double',
        bed: 1,
        guest: 4,
        normalRent: 1800,
        offRent: 1599,
        roomStatus: 'available',
        imgUrl: './assets/double_bed2.jpg',
        complementary: 'Water bottle 1 litre, Tooth Brush, and Bathing Soap.',
      },
      {
        id: 12,
        roomName: 'Two Person Room',
        roomType: 'double',
        bed: 1,
        guest: 4,
        normalRent: 2200,
        offRent: 1890,
        roomStatus: 'available',
        imgUrl: './assets/double_bed.jpg',
        complementary: 'Water bottle 1 litre, Tooth Brush, and Bathing Soap.',
      },
      {
        id: 13,
        roomName: 'Standard Double Bedroom',
        roomType: 'double',
        bed: 1,
        guest: 4,
        normalRent: 1700,
        offRent: 1480,
        roomStatus: 'na',
        imgUrl: './assets/double_bed1.jpg',
        complementary: 'Water bottle 1 litre.',
      },
      {
        id: 14,
        roomName: 'Double Bedroom',
        roomType: 'double',
        bed: 1,
        guest: 4,
        normalRent: 2500,
        offRent: 1900,
        roomStatus: 'available',
        imgUrl: './assets/double_bed2.jpg',
        complementary: 'Water bottle 1 litre, Tooth Brush, and Bathing Soap.',
      },
      {
        id: 15,
        roomName: 'Standard Double Bedroom',
        roomType: 'double',
        bed: 1,
        guest: 4,
        normalRent: 1400,
        offRent: 1290,
        roomStatus: 'available',
        imgUrl: './assets/double_bed.jpg',
        complementary: 'Water bottle 1 litre.',
      },
      {
        id: 16,
        roomName: 'Double Bedroom',
        roomType: 'double',
        bed: 1,
        guest: 4,
        normalRent: 2500,
        offRent: 1900,
        roomStatus: 'available',
        imgUrl: './assets/double_bed1.jpg',
        complementary: 'Water bottle 1 litre, Tooth Brush, and Bathing Soap.',
      },
      {
        id: 17,
        roomName: 'Standard Double Bedroom',
        roomType: 'double',
        bed: 1,
        guest: 4,
        normalRent: 1400,
        offRent: 1290,
        roomStatus: 'available',
        imgUrl: './assets/double_bed2.jpg',
        complementary: 'Water bottle 1 litre.',
      },
      {
        id: 18,
        roomName: 'Standard Luxury Room',
        roomType: 'luxury',
        bed: 1,
        guest: 4,
        normalRent: 12500,
        offRent: 12399,
        roomStatus: 'available',
        imgUrl: './assets/luxury_bed.jpg',
        complementary:
          'Water bottle 1 litre, Tooth Brush, and Bathing Soap. Foods & Snacks with drinks.',
      },
      {
        id: 19,
        roomName: 'Luxury Bedroom',
        roomType: 'luxury',
        bed: 1,
        guest: 4,
        normalRent: 11800,
        offRent: 11500,
        roomStatus: 'available',
        imgUrl: './assets/luxury_bed1.jpg',
        complementary:
          'Water bottle 1 litre, Tooth Brush, and Bathing Soap. Foods & Snacks with drinks.',
      },
      {
        id: 20,
        roomName: 'Classic Luxury',
        roomType: 'luxury',
        bed: 1,
        guest: 4,
        normalRent: 11800,
        offRent: 11599,
        roomStatus: 'available',
        imgUrl: './assets/luxury_bed2.jpg',
        complementary:
          'Water bottle 1 litre, Tooth Brush, and Bathing Soap. Foods & Snacks with drinks.',
      },
      {
        id: 21,
        roomName: 'Elite People Room',
        roomType: 'luxury',
        bed: 1,
        guest: 4,
        normalRent: 12200,
        offRent: 11890,
        roomStatus: 'available',
        imgUrl: './assets/luxury_bed.jpg',
        complementary:
          'Water bottle 1 litre, Tooth Brush, and Bathing Soap. Foods & Snacks with drinks.',
      },
      {
        id: 22,
        roomName: 'Standard Luxury Room',
        roomType: 'luxury',
        bed: 1,
        guest: 4,
        normalRent: 11700,
        offRent: 11480,
        roomStatus: 'available',
        imgUrl: './assets/luxury_bed1.jpg',
        complementary:
          'Water bottle 1 litre, Tooth Brush, and Bathing Soap. Foods & Snacks with drinks.',
      },
      {
        id: 23,
        roomName: 'Luxury Bedroom',
        roomType: 'luxury',
        bed: 1,
        guest: 4,
        normalRent: 12500,
        offRent: 11900,
        roomStatus: 'na',
        imgUrl: './assets/luxury_bed2.jpg',
        complementary:
          'Water bottle 1 litre, Tooth Brush, and Bathing Soap. Foods & Snacks with drinks.',
      },
      {
        id: 24,
        roomName: 'Standard Luxury Room',
        roomType: 'luxury',
        bed: 1,
        guest: 4,
        normalRent: 11400,
        offRent: 11290,
        roomStatus: 'available',
        imgUrl: './assets/luxury_bed.jpg',
        complementary:
          'Water bottle 1 litre, Tooth Brush, and Bathing Soap. Foods & Snacks with drinks.',
      },
      {
        id: 25,
        roomName: 'Luxury Bedroom',
        roomType: 'luxury',
        bed: 1,
        guest: 4,
        normalRent: 12500,
        offRent: 11900,
        roomStatus: 'available',
        imgUrl: './assets/luxury_bed1.jpg',
        complementary:
          'Water bottle 1 litre, Tooth Brush, and Bathing Soap. Foods & Snacks with drinks.',
      },
      {
        id: 26,
        roomName: 'Standard Luxury Room',
        roomType: 'luxury',
        bed: 1,
        guest: 4,
        normalRent: 11400,
        offRent: 11290,
        roomStatus: 'available',
        imgUrl: './assets/luxury_bed2.jpg',
        complementary:
          'Water bottle 1 litre, Tooth Brush, and Bathing Soap. Foods & Snacks with drinks.',
      },
      {
        id: 27,
        roomName: 'Standard Deluxe Room',
        roomType: 'deluxe',
        bed: 1,
        guest: 6,
        normalRent: 22500,
        offRent: 22399,
        roomStatus: 'na',
        imgUrl: './assets/deluxe_bed.jpg',
        complementary:
          'Water bottle 1 litre, Tooth Brush, and Bathing Soap. Foods & Snacks with drinks. Also Swimming pool bath available.',
      },
      {
        id: 28,
        roomName: 'Deluxe Bedroom',
        roomType: 'deluxe',
        bed: 1,
        guest: 6,
        normalRent: 21800,
        offRent: 21500,
        roomStatus: 'available',
        imgUrl: './assets/deluxe_bed1.jpg',
        complementary:
          'Water bottle 1 litre, Tooth Brush, and Bathing Soap. Foods & Snacks with drinks. Also Swimming pool bath available.',
      },
      {
        id: 29,
        roomName: 'Classic Deluxe',
        roomType: 'deluxe',
        bed: 1,
        guest: 6,
        normalRent: 21800,
        offRent: 21599,
        roomStatus: 'available',
        imgUrl: './assets/deluxe_bed2.jpg',
        complementary:
          'Water bottle 1 litre, Tooth Brush, and Bathing Soap. Foods & Snacks with drinks. Also Swimming pool bath available.',
      },
      {
        id: 30,
        roomName: 'Elite People Room',
        roomType: 'deluxe',
        bed: 1,
        guest: 6,
        normalRent: 22200,
        offRent: 21890,
        roomStatus: 'available',
        imgUrl: './assets/deluxe_bed.jpg',
        complementary:
          'Water bottle 1 litre, Tooth Brush, and Bathing Soap. Foods & Snacks with drinks. Also Swimming pool bath available.',
      },
      {
        id: 31,
        roomName: 'Standard Deluxe Room',
        roomType: 'deluxe',
        bed: 1,
        guest: 6,
        normalRent: 21700,
        offRent: 21480,
        roomStatus: 'available',
        imgUrl: './assets/deluxe_bed1.jpg',
        complementary:
          'Water bottle 1 litre, Tooth Brush, and Bathing Soap. Foods & Snacks with drinks. Also Swimming pool bath available.',
      },
      {
        id: 32,
        roomName: 'Deluxe Bedroom',
        roomType: 'deluxe',
        bed: 1,
        guest: 6,
        normalRent: 22500,
        offRent: 21900,
        roomStatus: 'available',
        imgUrl: './assets/deluxe_bed2.jpg',
        complementary:
          'Water bottle 1 litre, Tooth Brush, and Bathing Soap. Foods & Snacks with drinks. Also Swimming pool bath available.',
      },
      {
        id: 33,
        roomName: 'Standard Deluxe Room',
        roomType: 'deluxe',
        bed: 1,
        guest: 6,
        normalRent: 21400,
        offRent: 21290,
        roomStatus: 'available',
        imgUrl: './assets/deluxe_bed.jpg',
        complementary:
          'Water bottle 1 litre, Tooth Brush, and Bathing Soap. Foods & Snacks with drinks. Also Swimming pool bath available.',
      },
      {
        id: 34,
        roomName: 'Deluxe Bedroom',
        roomType: 'deluxe',
        bed: 1,
        guest: 6,
        normalRent: 22500,
        offRent: 21900,
        roomStatus: 'available',
        imgUrl: './assets/deluxe_bed1.jpg',
        complementary:
          'Water bottle 1 litre, Tooth Brush, and Bathing Soap. Foods & Snacks with drinks. Also Swimming pool bath available.',
      },
      {
        id: 35,
        roomName: 'Standard Deluxe Room',
        roomType: 'deluxe',
        bed: 1,
        guest: 6,
        normalRent: 21400,
        offRent: 21290,
        roomStatus: 'available',
        imgUrl: './assets/deluxe_bed2.jpg',
        complementary:
          'Water bottle 1 litre, Tooth Brush, and Bathing Soap. Foods & Snacks with drinks. Also Swimming pool bath available.',
      },
    ];
    return this.allRooms;
  }
  getShowCaseRooms(): any[] {
    this.showCaseRooms = [
      {
        id: 1,
        roomName: 'Simple Room',
        roomType: 'single',
        bed: 1,
        guest: 2,
        normalRent: 1800,
        offRent: 1500,
        roomStatus: 'available',
        imgUrl: './assets/single_bed1.jpg',
        complementary: 'Water bottle 1 litre, and Bathing Soap.',
      },
      {
        id: 10,
        roomName: 'Simple Double Bedroom',
        roomType: 'double',
        bed: 1,
        guest: 4,
        normalRent: 1800,
        offRent: 1500,
        roomStatus: 'available',
        imgUrl: './assets/double_bed1.jpg',
        complementary: 'Water bottle 1 litre, and Bathing Soap.',
      },
      {
        id: 11,
        roomName: 'Normal Double Bedroom',
        roomType: 'double',
        bed: 1,
        guest: 4,
        normalRent: 1800,
        offRent: 1599,
        roomStatus: 'available',
        imgUrl: './assets/double_bed2.jpg',
        complementary: 'Water bottle 1 litre, Tooth Brush, and Bathing Soap.',
      },
      {
        id: 20,
        roomName: 'Classic Luxury',
        roomType: 'luxury',
        bed: 1,
        guest: 4,
        normalRent: 11800,
        offRent: 11599,
        roomStatus: 'available',
        imgUrl: './assets/luxury_bed2.jpg',
        complementary:
          'Water bottle 1 litre, Tooth Brush, and Bathing Soap. Foods & Snacks with drinks.',
      },
      {
        id: 21,
        roomName: 'Elite People Room',
        roomType: 'luxury',
        bed: 1,
        guest: 4,
        normalRent: 12200,
        offRent: 11890,
        roomStatus: 'available',
        imgUrl: './assets/luxury_bed.jpg',
        complementary:
          'Water bottle 1 litre, Tooth Brush, and Bathing Soap. Foods & Snacks with drinks.',
      },
      {
        id: 31,
        roomName: 'Standard Deluxe Room',
        roomType: 'deluxe',
        bed: 1,
        guest: 6,
        normalRent: 21700,
        offRent: 21480,
        roomStatus: 'available',
        imgUrl: './assets/deluxe_bed1.jpg',
        complementary:
          'Water bottle 1 litre, Tooth Brush, and Bathing Soap. Foods & Snacks with drinks. Also Swimming pool bath available.',
      },
      {
        id: 32,
        roomName: 'Deluxe Bedroom',
        roomType: 'deluxe',
        bed: 1,
        guest: 6,
        normalRent: 22500,
        offRent: 21900,
        roomStatus: 'available',
        imgUrl: './assets/deluxe_bed2.jpg',
        complementary:
          'Water bottle 1 litre, Tooth Brush, and Bathing Soap. Foods & Snacks with drinks. Also Swimming pool bath available.',
      },
    ];
    return this.showCaseRooms;
  }
}
