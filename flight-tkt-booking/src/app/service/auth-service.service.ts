import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environment/environment';
import { Location } from '@angular/common';
import { BehaviorSubject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  selectedSeatArr:any=[];
  ticketDetails: any;

  private navTitle = new BehaviorSubject<string>('TRIPSTER');
  navTitle$ = this.navTitle.asObservable();

  setnavTitle(value: string) {
    this.navTitle.next(value);
  }

  flight:any;

  constructor(private http: HttpClient, private location: Location) {  }
  
  back(){
    this.location.back();
  }
  sendMsg(msg: any){
    const options = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        'Access-Control-Allow-Origin': '*' 
      })
    };
    return this.http.post(`${ environment.apiUrl }/contact`, msg, options); 
  }

  RegisterUser(inputData:any){    
    return this.http.post(`${ environment.apiUrl }/config/signup`, inputData);
  }
  GetUserbyEmail(email:any){
    return this.http.get(`${ environment.apiUrl }/config/login/${ email }`);
  }
  Getall(){
    return this.http.get(`${ environment.apiUrl }/config`);
  }
  isloggedin(){
    return sessionStorage.getItem('email')!=null;
  }
  GetAllFlight(){
    return this.http.get(`${ environment.apiUrl }/flights`);
  }
  GetbyFlightNo(flightNo: any){
    return this.http.get(`${ environment.apiUrl }/flights/flight/${ flightNo }`);
  }
  Getnow(){
    return this.http.get(`${ environment.apiUrl }/flights/now`);
  }
  BookTickets(flightNo: any, passenger: any){
    const options = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        'Access-Control-Allow-Origin': '*' 
      })
    };
    return this.http.patch(`${ environment.apiUrl }/flights/bookTkts/${flightNo}`, passenger, options);
  }  
}
