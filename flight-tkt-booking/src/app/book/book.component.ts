import { AfterViewChecked, ChangeDetectorRef, Component, ElementRef, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthServiceService } from '../service/auth-service.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit, AfterViewChecked {

  flightNo: any;
  result: any;
  bArr: any;
  eArr: any;

  totalSize: any;
  econSeatsBooked: any;
  busSeatsBooked: any;
  ePrice: any;
  eAvail: any;
  bAvail: any;
  bPrice: any;
  flightCompany: any = 'logo';
  from: any;
  to: any;
  eta: any;
  etd: any;
  totalBooked: any;
  totalAvail: any;
  selectedTkts = 0;

  totalPrice = 0;
  seatsSelected: any = [];

  econRow = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'];
  busRow = ['Z', 'Y', 'X', 'W', 'V', 'U'];

  totalSeatArr: any = [];

  Seats(result: any) {
    this.econSeatsBooked = result?.economySeatsBooked;
    this.totalSize = result?.totalSeats;
    this.busSeatsBooked = result?.businessSeatsBooked;
    this.ePrice = result?.economyTktPrice;
    this.bPrice = result?.businessTktPrice;
    this.eAvail = result?.economyTktsAvail;
    this.bAvail = result?.businessTktsAvail;
    this.flightCompany = result?.flightCompany;
    this.from = result?.from;
    this.to = result?.to;
    this.eta = result?.eta;
    this.etd = result?.etd;
    this.totalBooked = result?.totalTktsBooked;
    this.totalAvail = result?.totalTktsAvail;


    if (this.totalSize == 150) {
      let econSeatRows = "ABCDEF";
      let busSeatRows = "WXYZ";
      this.bArr = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      ];
      this.eArr = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      ];
      for (let seatNo of this.econSeatsBooked) {
        let rowNo = econSeatRows.indexOf(seatNo[0]);
        let colNo = +seatNo.slice(1);
        this.eArr[rowNo][colNo - 1] = 1;
      }
      for (let seatNo of this.busSeatsBooked) {
        let rowNo = busSeatRows.indexOf(seatNo[0]);
        let colNo = +seatNo.slice(1);
        this.bArr[rowNo][colNo - 1] = 1;
      }
    } else {
      let econSeatRows = "ABCDEFGHIJKL";
      let busSeatRows = "UVWXYZ";
      this.bArr = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      ];
      this.eArr = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      ];

      for (let seatNo of this.econSeatsBooked) {

        let rowNo = econSeatRows.indexOf(seatNo[0]);
        let colNo = +seatNo.slice(1);
        this.eArr[rowNo][colNo - 1] = 1;
      }
      for (let seatNo of this.busSeatsBooked) {
        let rowNo = busSeatRows.indexOf(seatNo[0]);
        let colNo = +seatNo.slice(1);
        this.bArr[rowNo][colNo - 1] = 1;
      }
    }
    this.totalSeatArr.push(this.eArr);
    this.totalSeatArr.push(this.bArr);
  }

  constructor(private service: AuthServiceService, private activatedRoute: ActivatedRoute, private el: ElementRef, private toastr: ToastrService, private cdr: ChangeDetectorRef, private router: Router) {
    this.flightNo = this.activatedRoute.snapshot.paramMap.get('flightNo');
  }

  back() {
    this.service.back();
  }

  ngAfterViewChecked(): void {
    this.cdr.detectChanges();
  }

  ngOnInit(): void {
    this.service.setnavTitle('BOOK');
    this.showSeats(this.flightNo);
  }

  showSeats(flightNo: any) {
    this.service.GetbyFlightNo(flightNo).subscribe(data => {
      this.service.flight = data;
      this.Seats(data);
    })
  }

  selectSeat(div: HTMLElement) {
    if (this.seatsSelected.length < 6) {
      const el = new ElementRef(div);
      let tier = el.nativeElement.id.split('.');
      let row = +tier[1] - 1;
      if (el.nativeElement.classList.contains('bg-white') && this.seatsSelected.length<5) {
        this.selectedTkts += 1;
        if (tier[0] == '1') {
          this.totalPrice += Number(this.ePrice);
          this.seatsSelected.push(this.econRow[row] + tier[2]);
        }
        else {
          this.totalPrice += Number(this.bPrice);
          this.seatsSelected.push(this.busRow[row] + tier[2]);
        }
        el.nativeElement.classList.remove('bg-white');
        el.nativeElement.classList.add('bg-[#FFB43A]');
      } else if (el.nativeElement.classList.contains('bg-[#FFB43A]')) {
        this.selectedTkts -= 1;
        if (tier[0] == '1') {
          this.totalPrice -= Number(this.ePrice);
          this.seatsSelected.splice(this.seatsSelected.indexOf(this.econRow[row] + tier[2]), 1);
        }
        else {
          this.totalPrice -= Number(this.bPrice);
          this.seatsSelected.splice(this.seatsSelected.indexOf(this.busRow[row] + tier[2]), 1);
        }
        el.nativeElement.classList.remove('bg-[#FFB43A]');
        el.nativeElement.classList.add('bg-white');
      }
      this.service.selectedSeatArr = this.seatsSelected;
    }
    if(this.seatsSelected.length>4){
      this.toastr.warning('You can only select 5 Seats at max!!!');
    }
  }

  bookTkts(){
    if(this.seatsSelected.length<1){
      this.toastr.warning('Select atleast 1 seat!!!');
    }
    else{
      this.router.navigateByUrl('/h/book/confirm/'+this.flightNo);
    }
  }



}
