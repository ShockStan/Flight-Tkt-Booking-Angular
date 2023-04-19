import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  private count = 0;
  private loader$ = new BehaviorSubject<boolean>(false);

  constructor() { }

  getLoaderObserver(): Observable<boolean> {
    return this.loader$.asObservable();
  }

  show(){
    if(++this.count === 1){
      this.loader$.next(true);
    }
  }

  hide(){
    if(this.count === 0  || --this.count === 0 ){
      this.loader$.next(false);
    }
  }

  reset(){
    this.count = 0;
    this.loader$.next(false);
  }

}
