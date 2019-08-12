import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/services/item.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit {
  public request: string;

  constructor(private router: Router, private route: ActivatedRoute, private itemService: ItemService) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.request = decodeURI(params['search']);
    });
  }

  backToHome() {
    this.router.navigate(['/']);
  }

  search(event: MouseEvent) {
    event.preventDefault();

    if (this.request && this.request.length) {
      this.itemService.search(this.request);
      this.router.navigate(['/items'], { queryParams: { search: encodeURI(this.request) } });
    }
  }
}
