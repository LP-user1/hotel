import { Component, HostListener, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { DataApiService } from 'src/app/services/data-api.service';
import {customValidator} from './customvalidator';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  navSticky: boolean = false;
  allRooms: any[] = [];
  loginFormActive: boolean = true;
  loginForm!: FormGroup;
  signUpForm!: FormGroup;
  isLoggedin: boolean = false;
  isLoading: boolean = false;
  isAlert: boolean = false;
  alertTitle!: string;
  alertMsg!: string;
  modalMsg!: string;
  modalMsgType!: string;

  constructor(
    public route: Router,
    private _authService: AuthService,
    private _DataApi: DataApiService
  ) {}
  ngOnInit() {
    this.allRooms = [
      {
        roomsType: 'Single Bedroom',
        url: '/rooms/single-bedrooms',
      },
      {
        roomsType: 'Double Bedroom',
        url: '/rooms/double-bedrooms',
      },
      {
        roomsType: 'Luxury Bedroom',
        url: '/rooms/luxury-rooms',
      },
      {
        roomsType: 'Deluxe Bedroom',
        url: '/rooms/deluxe-rooms',
      },
    ];
    if (this._authService.isLoggedIn()) {
      this.isLoggedin = true;
    }
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(8),
      ]),
    });
    this.signUpForm = new FormGroup({
      // name: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(8),
      ]),
      confpassword: new FormControl(null, [
        Validators.required,
        Validators.minLength(8),
      ]),
    },[customValidator.MatchValidator('password','confpassword')]);
  }
  // ,{
  //   validators: [Validation.match('password', 'confirmPassword')]
  // }
  @HostListener('window:scroll', ['$event']) onscroll() {
    if (window.scrollY > 220) {
      this.navSticky = true;
    } else {
      this.navSticky = false;
    }
  }
  loginToggle() {
    this.loginFormActive = !this.loginFormActive;
  }
  loginFormSubmit() {
    if (!this.isLoggedin) {
      this.isLoading = true;
      this._authService
        .loginUser(this.loginForm.value)
        .then((res: any) => {
          // this.userId = res.user.uid;
          const token = res.user.accessToken;
          this._authService.userId = res.user.uid;
          localStorage.setItem('Uid',this._authService.userId);
          localStorage.setItem('Token', token);
          this.isLoading = false;
          this.isLoggedin = true;
          document.getElementById('modalClose')?.click();
          this.isAlert = true;
          this.alertTitle = 'Success';
          this.alertMsg = 'Successfully logged in.';
          this.modalMsg = '';
        })
        .catch((err) => {
          this.isLoading = false;
          this.isLoggedin = false;
          this.modalMsgType = 'text-danger';
          this.modalMsg = ' Invalid ! User not found.';
        });
      this.loginForm.reset();
    } else {
      this.route.navigate(['/']);
      this.isAlert = true;
      this.alertTitle = 'INFO';
      this.alertMsg = 'You are already logged in.';
    }
  }
  signUpFormSubmit() {
    if (!this.isLoggedin) {
      this.isLoading = true;
      this._authService
        .createNewUser(this.signUpForm.value)
        .then((res: any) => {
          const userData = {
            userID: res.user.uid,
            email: res.user.email,
            name: 'noName',
          };
          this._DataApi
            .storeUser(userData)
            .then((res) => {
              if (res) {
                this.modalMsgType = 'text-success';
                this.modalMsg =
                  'Successfully registered. Please login to continue.';
                this.loginFormActive = !this.loginFormActive;
              }
            })
            .catch((err) => {
              this.isAlert = true;
              this.alertTitle = 'Error';
              this.alertMsg = 'Something went wrong!. Please try again';
            });

          this.isLoading = false;
        })
        .catch((err) => {
          this.isLoading = false;
          this.modalMsgType = 'text-danger';
          this.modalMsg = err.message;
        });

      this.signUpForm.reset();
    } else {
      this.route.navigate(['/']);
      this.isAlert = true;
      this.alertTitle = 'INFO';
      this.alertMsg = 'You are already logged in.';
    }
  }
  // Login Form
  get email() {
    return this.loginForm.get('email');
  }
  get password() {
    return this.loginForm.get('password');
  }
  // Signup Form
  // get name() {
  //   return this.signUpForm.get('name');
  // }
  get semail() {
    return this.signUpForm.get('email');
  }
  get spassword() {
    return this.signUpForm.get('password');
  }
  get confpassword() {
    return this.signUpForm.get('confpassword');
  }
  get PassMatchError(){
    return (this.signUpForm.getError('mismatch') && this.signUpForm.get('confpassword')?.touched);
  }
  alertDismiss() {
    this.isAlert = false;
  }
  logoutUser() {
    this._authService
      .logoutUser()
      .then(() => {
        this.route.navigate(['/']);
        localStorage.removeItem('Token');
        localStorage.removeItem('Uid');
        this.isLoggedin = false;
        this.isAlert = true;
        this.alertTitle = 'Success';
        this.alertMsg = 'Successfully Logged out.';
      })
      .catch((err) => {
        this.isAlert = true;
        this.alertTitle = 'Error';
        this.alertMsg = err.message;
      });
  }
}
