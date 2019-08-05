import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.sass']
})
export class ResultsComponent implements OnInit {
  results = [];

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.itemService.results$.subscribe(results => {
      this.results = results;
    });
  }
}
