import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private results = new BehaviorSubject<any[]>([]);  
  private categories = new BehaviorSubject<String[]>([]);   
  private detail = new BehaviorSubject<any>(undefined);

  public results$ = this.results.asObservable();
  public categories$ = this.categories.asObservable();
  public detail$ = this.detail.asObservable();

  constructor(private http: HttpClient) { }

  search(request: String) { 
    this.results.next([]);
    this.categories.next([]); 

    this.http.get('http://localhost:1811/api/Items?q=' + request)
      .subscribe((response: any) => {
        this.results.next(response.items);
        this.categories.next(response.categories);
      });
  }

  getDetail(id: String) {
    this.detail.next(undefined);

    this.http.get('http://localhost:1811/api/Items/' + id)
      .subscribe((response: any) => this.detail.next(response));
  }
}
