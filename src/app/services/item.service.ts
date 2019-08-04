import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private results = new BehaviorSubject<any[]>([]);   

  public results$ = this.results.asObservable();

  constructor() { }

  search(request: String) {
    console.log(request);    
    this.results.next([]);
  }
}
