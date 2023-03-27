import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataApiService } from 'src/app/services/data-api.service';

@Component({
  selector: 'app-contactpage',
  templateUrl: './contactpage.component.html',
  styleUrls: ['./contactpage.component.scss'],
})
export class ContactpageComponent implements OnInit {
  userForm!: FormGroup;
  isAlert: boolean = false;
  alertTitle!: string;
  alertMsg!: string;
  constructor(private _DataApi: DataApiService) {}
  ngOnInit(): void {
    this.userForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      subject: new FormControl(null, [
        Validators.required,
        Validators.maxLength(50),
      ]),
      message: new FormControl(null, [
        Validators.required,
        Validators.minLength(5),
      ]),
    });
  }
  userSubmit() {
    this._DataApi
      .storeContactMails(this.userForm.value)
      .then((res) => {
        this.isAlert = true;
        this.alertTitle = 'Success';
        this.alertMsg =
          'Message has been sent successfully. We will respond back as soon as possible.';
      })
      .catch((err) => {
        this.isAlert = true;
        this.alertTitle = 'Error';
        this.alertMsg = 'Failed to send. Try again!';
      });
    this.userForm.reset();
  }
  alertDismiss() {
    this.isAlert = false;
  }
  get name() {
    return this.userForm.get('name');
  }
  get email() {
    return this.userForm.get('email');
  }
  get subject() {
    return this.userForm.get('subject');
  }
  get message() {
    return this.userForm.get('message');
  }
}
