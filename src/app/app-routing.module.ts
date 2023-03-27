import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { AboutpageComponent } from './pages/aboutpage/aboutpage.component';
import { BookingpageComponent } from './pages/bookingpage/bookingpage.component';
import { ContactpageComponent } from './pages/contactpage/contactpage.component';
import { RequestquoteComponent } from './pages/requestquote/requestquote.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { SingleRoomComponent } from './rooms/single-room/single-room.component';
import { DoubleRoomComponent } from './rooms/double-room/double-room.component';
import { LuxuryRoomComponent } from './rooms/luxury-room/luxury-room.component';
import { DeluxeRoomComponent } from './rooms/deluxe-room/deluxe-room.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'about', component: AboutpageComponent },
  { path: 'booking-room', component: BookingpageComponent },
  { path: 'contact', component: ContactpageComponent },
  { path: 'request-quote', component: RequestquoteComponent },
  { path: 'rooms/single-bedrooms', component: SingleRoomComponent },
  { path: 'rooms/double-bedrooms', component: DoubleRoomComponent },
  { path: 'rooms/luxury-rooms', component: LuxuryRoomComponent },
  { path: 'rooms/deluxe-rooms', component: DeluxeRoomComponent },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
