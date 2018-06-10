import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { InventoryItem } from 'app/model/item';
import { ItemService } from 'app/page/item-page/item.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from 'app/service/authentication-service.service';

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.css']
})
export class NewItemComponent implements OnInit {

  @Input()
  change: boolean;

  @Output()
  postItem: EventEmitter<InventoryItem> = new EventEmitter();

  public forEdit: InventoryItem;
  public item: InventoryItem;
  public id: number;
  public isDataAvailable: boolean;

 constructor(private itemService: ItemService,  private router: Router,
   private route: ActivatedRoute,  private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.load();
    this.loadData();

   this.forEdit = {
      id: null,
      name: null,
      description: null,
      orderNumber: null,
      value: null,
      barcode: null,
      category: {
          id: null,
          name: null
      }
    };
  }

  load() {
    this.item = {
      name: null,
      description: null,
      orderNumber: null,
      value: null,
      barcode: null,
      category: {
          id: null,
          name: null
      }
  }
  }
  reset() {
    this.load();
    this.change = false;
  }

  send() {
    this.postItem.next(this.item);
  }

  logout(): void {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return this.authenticationService.isLoggedIn();
  }
  loadData() {
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
