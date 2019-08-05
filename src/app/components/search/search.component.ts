import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/services/item.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit {
  public request: String;

  constructor(private router: Router, private itemService: ItemService) { }

  ngOnInit() {
  }

  backToHome() {
    this.router.navigate(['/']);
  }

  search(event: MouseEvent) {
    event.preventDefault();

    if (this.request && this.request.length) {
      this.itemService.search(this.request);
      this.router.navigate(['/items'], { queryParams: { search: this.request } });
    }
  }
}
