import { Component, ElementRef, Input, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthServiceService } from 'src/app/service/auth-service.service';
import { FormGroup, FormControl, FormArray, FormBuilder, Validators } from '@angular/forms';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

  modalRef?: BsModalRef;

  flightNo:any;
  selectedNos:any[] = this.service.selectedSeatArr;
  econSeatNoArr:any=[];
  busSeatNoArr:any=[];
  ePrice = this.service.flight?.economyTktPrice;
  bPrice = this.service.flight?.businessTktPrice;
  flightCompany = this.service.flight?.flightCompany;
  totalCost:number=0;
  

  constructor(private service: AuthServiceService, private activatedRoute: ActivatedRoute, private route: Router, private el: ElementRef, private fb: FormBuilder, private modalService:BsModalService, private toastr: ToastrService) {
    this.flightNo = this.activatedRoute.snapshot.paramMap.get('flightNo');
  }

  openModal(template: TemplateRef<any>){
    if(this.userForm.valid){
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});}
    else{
      this.toastr.warning('Enter valid details');
    }
  }

  confirm(){
    this.proSave(this.userForm.value, this.userForm.valid, this.flightNo);
    this.service.selectedSeatArr = [];
    this.modalRef?.hide();
    this.toastr.success('Ticket Booked successfully');
    this.route.navigateByUrl('/h/tickets/showbooked');
  }

  decline(){
    this.modalRef?.hide();
    this.toastr.info('Declined');
  }

  alphabets:String = 'ABCDEFGHIJKL';
  ngOnInit(): void {
    this.service.setnavTitle('DETAILS');
    for(let seat of this.selectedNos){
      let price:number = +this.bPrice;
      let tier = 'Business';
      if(this.alphabets.includes(seat[0])){
        price = +this.ePrice;
        tier = 'Economy';
      }
      this.AddForms(tier,seat);
      this.totalCost += price;
    }
  }
  items!:FormArray;
  userForm = new FormGroup({
    passengers: new FormArray([])
  });
  AddForms(tier:any, seat:any){
    this.items = this.userForm.get("passengers") as FormArray;
    this.items.push(this.form(tier,seat));
  }
  get passengers(){
    return this.userForm.get("passengers") as FormArray;
  }
  form(tier:any, seat:any):FormGroup {
    return new FormGroup({
      name: new FormControl('', Validators.required),
      age: new FormControl('', Validators.required),
      personalId: new FormControl('', Validators.required),
      seatNo: new FormControl(seat, Validators.required),
      tier: new FormControl(tier, Validators.required)
    });
  }
  proSave(formdata:any, validity:boolean, flightNo: any){
    if(validity){
    console.log(formdata);
    this.service.ticketDetails = formdata;
    this.service.BookTickets(flightNo ,this.service.ticketDetails).subscribe(details =>{
      details
    });
    
    }
  }

}
