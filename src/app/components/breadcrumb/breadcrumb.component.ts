import { Component, OnInit, Input } from '@angular/core';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.sass']
})
export class BreadcrumbComponent implements OnInit {
  @Input() categories: String[];

  constructor(private itemService: ItemService) {
    this.itemService.categories$.subscribe(categories => this.categories = categories);
  }

  ngOnInit() {
  }
}
