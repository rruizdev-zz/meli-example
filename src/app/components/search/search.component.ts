import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Location } from '@angular/common';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit {
  public request: String;

  constructor(private location: Location, private itemService: ItemService) { }

  ngOnInit() {
  }

  backToHome() {
    this.location.go("/");
  }

  search(event: MouseEvent) {
    event.preventDefault();

    if (this.request && this.request.length) {
      this.itemService.search(this.request);
    }
  }
}
