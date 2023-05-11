import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bookings } from 'src/models/Bookings';
import { status } from 'src/models/status';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  baseUrl:string='http://localhost:8080/api/bookings';
  constructor(private http:HttpClient) { }

  getAllBookings():Observable<Bookings[]> {
    return this.http.get<Bookings[]>(this.baseUrl+"/all");
  }
  saveBooking(bk:Bookings):Observable<status>{
    return this.http.post<status>(this.baseUrl+"/saveBooking",bk);
  }
}
