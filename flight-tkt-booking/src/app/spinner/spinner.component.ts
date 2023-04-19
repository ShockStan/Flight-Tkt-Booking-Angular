import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { LoaderService } from '../service/loader.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit{

  isLoading = false;

  constructor(private loader: LoaderService, private cdRef:ChangeDetectorRef) {

  }

  ngOnInit(): void {
    this.spinner();
  }

  spinner(){
    this.loader.getLoaderObserver().subscribe((status)=>{
      this.isLoading = status===true;
      this.cdRef.detectChanges();
    });
  }




}
