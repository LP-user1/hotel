import { Injectable, OnInit } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService implements OnInit {
  userId!: any;
  isLoading: boolean = false;
  isUserLoggedIn: boolean = false;
  message!: string;
  isalert: boolean = false;
  alertTitlee!: string;

  constructor(private _auth: Auth) {}
  ngOnInit(): void {
    this.isLoggedIn();
  }
  createNewUser(val: any) {
    return createUserWithEmailAndPassword(this._auth, val.email, val.password);
  }
  loginUser(val: any) {
    return signInWithEmailAndPassword(this._auth, val.email, val.password);
  }
  isLoggedIn() {
    if (localStorage.getItem('Token')) {
      return true;
    } else {
      return false;
    }
  }
  logoutUser() {
    return signOut(this._auth);
  }
}
