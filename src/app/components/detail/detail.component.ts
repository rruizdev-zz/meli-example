import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.sass']
})
export class DetailComponent implements OnInit {
  detail: any;

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.itemService.detail$.subscribe((detail: any) => this.detail = detail);
  }

}
