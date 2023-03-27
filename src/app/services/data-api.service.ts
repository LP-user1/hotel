import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  Firestore,
  addDoc,
  getDocs,
  collection,
} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class DataApiService {
  constructor(private _fireStore: Firestore) {}

  postData(val: any) {
    const dbInstance = collection(this._fireStore, 'Bookings');
    return addDoc(dbInstance, val);
  }
  storeUser(val: any) {
    const dbInstance = collection(this._fireStore, 'users');
    return addDoc(dbInstance, val);
  }
  storeContactMails(val: any) {
    const dbInstance = collection(this._fireStore, 'Contact-Mails');
    return addDoc(dbInstance, val);
  }
  getData() {
    const dbInstance = collection(this._fireStore, 'Bookings');
    return getDocs(dbInstance);
  }
}
