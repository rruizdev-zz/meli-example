import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/services/item.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.sass']
})
export class ResultsComponent implements OnInit {
  results = [];
  categories = [];

  constructor(private router: Router, private itemService: ItemService) { }

  ngOnInit() {
    this.itemService.results$.subscribe(results => this.results = results);
    this.itemService.categories$.subscribe(categories => this.categories = categories);
  }

  showDetail(result: any) {
    this.itemService.getDetail(result.id);
    this.router.navigate(['/items/' + result.id]);
  }
}
