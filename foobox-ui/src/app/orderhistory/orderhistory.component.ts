import { Component } from '@angular/core';
import { Bookings } from 'src/models/Bookings';
import { BookingService } from 'src/services/booking.service';

@Component({
  selector: 'app-orderhistory',
  templateUrl: './orderhistory.component.html',
  styleUrls: ['./orderhistory.component.css']
})
export class OrderhistoryComponent {
bookings:Bookings[];
constructor(private bookingservice:BookingService){}
ngOnInit(){
  this.bookingservice.getAllBookings().subscribe(x=>this.bookings=x);
}
}
