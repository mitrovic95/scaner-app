import { Component, OnInit } from '@angular/core';
import { ItemService } from 'app/page/item-page/item.service';
import { AuthenticationService } from 'app/service/authentication-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { InventoryItem } from './../../../model/item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  public item: InventoryItem;
  public id?: number;
  public isDataAvailable: boolean;
  public change: boolean;

    constructor(private itemService: ItemService, private authenticationService: AuthenticationService,
     private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.change = false;
    this.loadData();
  }

  loadData() {
  }

  isLogin() {
    return this.authenticationService.getCurrentUser();
  }

  edit(item) {
    this.change = true;
  }

  delete(item: InventoryItem) {
    this.itemService.deleteItem(item)
    .subscribe(() => { this.loadData(); });
   this.loadData();
  }

  save(item: InventoryItem) {
    this.itemService.saveItem(item)
    .subscribe(
      (data) => {
          this.loadData();
        }
      )
  }
}
