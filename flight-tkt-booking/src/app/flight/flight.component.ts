import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AuthServiceService } from '../service/auth-service.service';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.css']
})
export class FlightComponent implements OnInit, OnDestroy {

  flightList: any;
  constructor(private service: AuthServiceService){
    
  }

  ngOnInit(): void {
    
    this.getFlightList();
  }

  ngOnDestroy() {
    
  }

  getFlightList(){
    this.service.GetAllFlight().subscribe((data:any)=>{
      this.flightList = data;
      this.dataSource.data = data;
      this.dataSource.paginator = this.paginator;
    });
  }

  displayedColumns: string[] = ['flightNo','from','to','etd','eta','economyTktPrice','businessTktPrice','flightCompany'];
  dataSource = new MatTableDataSource<any>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  
}
