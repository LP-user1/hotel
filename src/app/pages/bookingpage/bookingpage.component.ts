import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { DataApiService } from 'src/app/services/data-api.service';
import { RoomsService } from 'src/app/services/rooms.service';

@Component({
  selector: 'app-bookingpage',
  templateUrl: './bookingpage.component.html',
  styleUrls: ['./bookingpage.component.scss'],
})
export class BookingpageComponent implements OnInit {
  isLoading: boolean = false;
  roomsArr!: any[];
  showcase: boolean = true;
  showcaseData!: any[];
  filteredData!: any[];
  roomtype: any = 'single';
  adultsCount: number = 1;
  childrensCount: number = 0;
  roomCount: number = 1;
  userBooking: any;
  checkIn: any;
  checkOut: any;
  modalShow: boolean = false;
  errorMsg!: string;
  isError: boolean = false;
  price: number = 2000;
  priceRad: any = 'under';
  filterPriceList!: any[];
  lowestPrice!: any;
  isAlert: boolean = false;
  alertMsg!: string;
  alertTitle!: string;
  userBooked: any[] = [];
  isEnableDate: boolean = false;
  todayDate: any;
  totalCost!: number;

  constructor(
    public _roomService: RoomsService,
    public _dataApi: DataApiService,
    public _authService: AuthService
  ) {}
  ngOnInit(): void {
    this.getDataFromService();
    this.todayDate = this._roomService.dateToday;
    // this._dataApi.getData().then((res) => {
    //   let data = res.docs.map((item) => {
    //     return { ...item.data(), id: item.id };
    //   });
    //   console.log(data);
    // });
  }
  getDataFromService() {
    this.isLoading = true;
    this.roomsArr = this._roomService.getAllRoomsData();
    this.isLoading = false;
    this.showcaseData = this._roomService.getShowCaseRooms().filter((room) => {
      return room.roomStatus === 'available';
    });
  }
  // --------- Count Incre && Decre && Clear ----------
  roomCountIncre() {
    if (this.roomCount < 2) {
      this.roomCount++;
    }
  }
  roomCountDecre() {
    if (this.roomCount > 1) {
      this.roomCount--;
    }
  }
  adultIncre() {
    if (this.adultsCount <= 5) {
      this.adultsCount++;
    }
  }
  adultDecre() {
    if (this.adultsCount > 1) {
      this.adultsCount--;
    }
  }
  childrenIncre() {
    if (this.childrensCount <= 5) {
      this.childrensCount++;
    }
  }
  childrenDecre() {
    if (this.childrensCount > 0) {
      this.childrensCount--;
    }
  }
  clearAll() {
    this.adultsCount = 1;
    this.childrensCount = 0;
  }
  // -------  Radio Btn onChange --------
  onRadioChange(e: any) {
    this.roomtype = e.target.value;
  }
  priceRadioChange(e: any) {
    this.priceRad = e.target.value;
  }
  // --------- Get Room Details ----------
  getRoomDetails(id: number) {
    this.modalShow = true;
    this.userBooking = this.roomsArr.find(
      (room) => room.id === id && room.roomStatus === 'available'
    );
    this.totalCost = this.roomCount * this.userBooking.offRent;
    if (!this.userBooking) {
      this.isAlert = true;
      this.alertMsg = 'Currently this room not Available';
      this.alertTitle = 'NA';
    }
  }

  placeBooking() {
    if (this._authService.isLoggedIn()) {
      if (this.checkIn && this.checkOut) {
        this.userBooked = [];
        this.userBooked = {
          ...this.userBooking,
          ...{
            checkin: this.checkIn,
            checkout: this.checkOut,
            roomcount: this.roomCount,
            totalPrice: this.roomCount * this.userBooking.offRent,
            guest: {
              adult: this.adultsCount,
              children: this.childrensCount,
            },
            userId: this._authService.userId,
          },
        };
        this._dataApi
          .postData(this.userBooked)
          .then((res: any) => {
            console.log(res);
            if (res) {
              this.isAlert = true;
              this.alertTitle = 'Success';
              this.alertMsg = 'Your booking has been confirmed.';
            }
          })
          .catch((err) => {
            this.isAlert = true;
            this.alertTitle = 'Error';
            this.alertMsg = err.message;
          });
      } else {
        document.getElementById('closeModal')?.click();
        this.isAlert = true;
        this.alertTitle = 'INFO';
        this.alertMsg = 'Check In and Checkout dates are required !!.';
      }
    } else {
      document.getElementById('closeModal')?.click();
      this.isAlert = true;
      this.alertTitle = 'INFO';
      this.alertMsg = 'Please login to continue.';
    }
  }
  checkinDatePicker(val: any) {
    this.checkIn = val.target.value;
    this.isEnableDate = true;
  }
  checkoutDatePicker(val: any) {
    this.checkOut = val.target.value;
  }
  checkoutAlert() {
    if (!this.isEnableDate) {
      this.isAlert = true;
      this.alertTitle = 'INFO';
      this.alertMsg = 'Select CheckIn Date to enable this field.';
    }
  }
  // --------- Filtering --------
  getFilter() {
    if (this.checkIn !== 0 && this.checkOut !== 0) {
      // ********** Single **************
      if (this.roomtype === 'single') {
        if (this.adultsCount + this.childrensCount <= 2) {
          this.processFilter();
        } else if (
          this.adultsCount + this.childrensCount < 5 &&
          this.roomCount > 1 &&
          this.roomCount <= 2
        ) {
          this.processFilter();
        } else {
          this.isError = true;
          this.errorMsg = `In Single Bedroom only 2 guest are allowed per room Plesae increase room count to continue.`;
        }
      }
      // ********* Double ***********
      else if (this.roomtype === 'double') {
        if (this.adultsCount + this.childrensCount <= 2) {
          this.processFilter();
        } else if (
          this.adultsCount + this.childrensCount < 5 &&
          this.roomCount > 1 &&
          this.roomCount <= 2
        ) {
          this.processFilter();
        } else {
          this.isError = true;
          this.errorMsg = `In Double Bedroom only 2 guest are allowed per room. Plesae increase room count to continue.`;
        }
      }
      // ********* Luxury **********
      else if (this.roomtype === 'luxury') {
        if (this.adultsCount + this.childrensCount <= 4) {
          this.processFilter();
        } else if (
          this.adultsCount + this.childrensCount < 9 &&
          this.roomCount > 1 &&
          this.roomCount <= 2
        ) {
          this.processFilter();
        } else {
          this.isError = true;
          this.errorMsg = `In Luxury Bedroom only 4 guest are allowed per room. Plesae increase room count to continue.`;
        }
      }
      // ********* Deluxe *********
      else if (this.roomtype === 'deluxe') {
        if (this.adultsCount + this.childrensCount <= 6) {
          this.processFilter();
        } else if (
          this.adultsCount + this.childrensCount < 13 &&
          this.roomCount > 1 &&
          this.roomCount <= 2
        ) {
          this.processFilter();
        } else {
          this.isError = true;
          this.errorMsg = `In Deluxe Bedroom only 6 guest are allowed per room. Plesae increase room count to continue.`;
        }
      }
    } else {
      this.isAlert = true;
      this.alertTitle = 'INFO';
      this.alertMsg = 'Check In and Checkout dates are required !!.';
    }
  }
  processFilter() {
    // _________  Empty the array before filtering __________
    this.filterPriceList = [];
    this.lowestPrice = '';
    this.filterPriceList = this.roomsArr.filter((room) => {
      return room.roomType === this.roomtype;
    });

    if (this.priceRad === 'under') {
      // _________  Getting minimum price in array ____________
      this.lowestPrice = Math.min(
        ...this.filterPriceList.map((res) => res.offRent)
      );
      if (this.price >= this.lowestPrice) {
        this.filteredData = this.roomsArr.filter((room) => {
          return (
            room.roomType === this.roomtype &&
            room.roomStatus === 'available' &&
            room.offRent <= this.price
          );
        });
      } else {
        this.isAlert = true;
        this.alertTitle = 'INFO';
        this.alertMsg = `Price starts from ${this.lowestPrice} for ${this.roomtype} bedroom.`;
      }
    } else if (this.priceRad === 'above') {
      // _________  Getting maximum price in array ____________
      this.lowestPrice = Math.max(
        ...this.filterPriceList.map((res) => res.offRent)
      );
      if (this.price <= this.lowestPrice) {
        this.filteredData = this.roomsArr.filter((room) => {
          return (
            room.roomType === this.roomtype &&
            room.roomStatus === 'available' &&
            room.offRent >= this.price
          );
        });
      } else {
        this.isAlert = true;
        this.alertTitle = 'INFO';
        this.alertMsg = `The highest price for ${this.roomtype} bedroom is ${this.lowestPrice}.`;
      }
    }
    if (this.filteredData) {
      this.showcase = false;
      this.isError = false;
      this.errorMsg = '';
    } else {
      this.isError = true;
      this.errorMsg = 'Rooms not Available !!';
    }
  }
  alertDismiss() {
    this.isAlert = false;
  }
}
