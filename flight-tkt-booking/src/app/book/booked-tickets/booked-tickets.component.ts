import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AuthServiceService } from 'src/app/service/auth-service.service';
import { Router } from '@angular/router';
import * as html2pdf from 'html2pdf.js';

@Component({
  selector: 'app-booked-tickets',
  templateUrl: './booked-tickets.component.html',
  styleUrls: ['./booked-tickets.component.css']
})
export class BookedTicketsComponent implements OnInit, AfterViewInit{
  
  constructor(private service: AuthServiceService, private route: Router) {
    
  }
  ngAfterViewInit(): void {
    setTimeout(() => {
    this.exportToPdf()},1000);
  }

  @ViewChild('abc', {static: false}) el! : ElementRef;
  ngOnInit(): void {
    this.date = new Date().toLocaleString('en-IN',  { timeZone: 'Asia/Kolkata', day: '2-digit', month: '2-digit', year: '2-digit' });
    this.passengers = this.service.ticketDetails;
    this.flight = this.service.flight;
    this.route.navigateByUrl('/h/home'); 
  }

  passengers :any;
  flight :any;
  date:any;
  
  exportToPdf() {
    const options = {
      margin: [10, 10],
      filename: 'ticket.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: { unit: 'mm', format: 'legal', orientation: 'portrait' }
    };
    
    html2pdf().from(this.el.nativeElement).set(options).save();
  }
  

}


