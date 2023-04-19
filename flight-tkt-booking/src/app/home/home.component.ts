import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthServiceService } from '../service/auth-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  carouselConfig = {
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
  };

  constructor(private service: AuthServiceService, private router: Router, private toastr: ToastrService) {
    
  }

  ngOnInit(): void {
    this.service.setnavTitle('HOME');
    this.Display();
  }
  today = true;
  result: any;
  flights: any;
  searchedQuery: any;

  city = [{ id: 'CHN', name: 'Chennai' }, { id: 'BNG', name: 'Bangalore' }, { id: 'HYD', name: 'Hyderabad' }, { id: 'MUM', name: 'Mumbai' },
  { id: 'DEL', name: 'Delhi' }, { id: 'KOL', name: 'Kolkata' }, { id: 'GUW', name: 'Guwahati' }, { id: 'AHM', name: 'Ahmedabad' },
  { id: 'VZG', name: 'Vizag' }, { id: 'KOC', name: 'Kochi' }];

  from: any;
  to: any;

  showCar = false;

  findCity(CITY: any) {
    return this.city.find(x => x.id === CITY)?.name;
  }

  Display() {
    const now = new Date();
    const time = new Date();
    time.setHours(23, 40, 0, 0);
    if (now.getTime() > time.getTime()) {
      this.result = 'No more Flights Today. Maybe Tomorrow!!!';
    }
    else {
      this.service.Getnow().subscribe(data => {
        this.result = data;
        this.flights = this.result;
        this.showCar = true;
      })
    }
  }
  tomorrow() {
    this.service.GetAllFlight().subscribe(data => {
      this.flights = data;
    });
    this.today = false;
  }
  swap() {
    let temp = this.from;
    this.from = this.to;
    this.to = temp;
  }
  bookTkts(flightNo: any) {
    this.router.navigateByUrl(`/h/book/${flightNo}`);
  }
  search(from: any, to: any) {
    if (from == to) {
      this.showCar = true;
      return;
    }
    this.showCar = false;
    this.searchedQuery = null;

    if (this.checkNullUndef(from) && this.checkNullUndef(to)) {
      this.searchedQuery = this.result.filter(flight => flight.from === from && flight.to === to);
    }
    else if (this.checkNullUndef(from)) {
      this.searchedQuery = this.result.filter(flight => flight.from === from);
    }
    else if (this.checkNullUndef(to)) {
      this.searchedQuery = this.result.filter(flight => flight.to === to);
    }
  }

  checkNullUndef(arg: any) {    
    if(typeof arg === 'string'){
      return true;
    }
    return false;
  }
}