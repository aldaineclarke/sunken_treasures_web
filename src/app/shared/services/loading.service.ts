import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  constructor() { }
  private displayLoader = new BehaviorSubject(false);
  showLoader$ = this.displayLoader.asObservable();

  showLoader(shouldShow:boolean){
    this.displayLoader.next(shouldShow);
  }
}
