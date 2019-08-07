import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private results = new BehaviorSubject<any[]>([]);  
  private categories = new BehaviorSubject<String[]>([]);   

  public results$ = this.results.asObservable();
  public categories$ = this.categories.asObservable();

  constructor(private http: HttpClient) { }

  search(request: String) { 
    this.results.next([]);
    this.categories.next([]); 

    this.http.get("http://localhost:1811/api/Items?q=" + request)
      .subscribe((response: any) => {
        this.results.next(response.items);
        this.categories.next(response.categories);
      });
  }
}
