import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { ItemService } from 'app/page/item-page/item.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from 'app/service/authentication-service.service';
import { InventoryItem } from 'app/model/item';

@Component({
  selector: 'app-new-update-item',
  templateUrl: './new-update-item.component.html',
  styleUrls: ['./new-update-item.component.css']
})
export class NewUpdateItemComponent implements OnInit {

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

    this.loadData();

   this.forEdit = {
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
    this.route.params
    .subscribe(
      (params) => {
        this.isDataAvailable = false;
        this.id = +params['id'];
        console.log('ID', this.id);
      }
    )
    this.itemService.getItem(this.id)
    .subscribe(
      (data) => {
        console.log('DATA', data);
        this.item = data;
        this.isDataAvailable = true;
      }
    );
  };


  save(item: InventoryItem) {
    this.itemService.saveItem(item)
    .subscribe(
      (data) => {
          this.loadData();
        }
      )
  }

  edit(items: InventoryItem) {
    //kopija objekta comp
    this.forEdit = items;
    this.change = true;
  }


}
