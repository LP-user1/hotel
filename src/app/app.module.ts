import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { AboutpageComponent } from './pages/aboutpage/aboutpage.component';
import { BookingpageComponent } from './pages/bookingpage/bookingpage.component';
import { ContactpageComponent } from './pages/contactpage/contactpage.component';
import { RequestquoteComponent } from './pages/requestquote/requestquote.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SingleRoomComponent } from './rooms/single-room/single-room.component';
import { DoubleRoomComponent } from './rooms/double-room/double-room.component';
import { LuxuryRoomComponent } from './rooms/luxury-room/luxury-room.component';
import { DeluxeRoomComponent } from './rooms/deluxe-room/deluxe-room.component';
import { HttpClientModule } from '@angular/common/http';
import { RoomsService } from './services/rooms.service';
import { DataApiService } from './services/data-api.service';
import { AuthService } from './services/auth.service';
import { NgOptimizedImage } from '@angular/common';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomepageComponent,
    AboutpageComponent,
    BookingpageComponent,
    ContactpageComponent,
    RequestquoteComponent,
    NotfoundComponent,
    SingleRoomComponent,
    DoubleRoomComponent,
    LuxuryRoomComponent,
    DeluxeRoomComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgOptimizedImage,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
  ],
  providers: [RoomsService, DataApiService, AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
