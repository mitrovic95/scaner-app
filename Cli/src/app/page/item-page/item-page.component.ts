import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'app/service/authentication-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { InventoryItem, ITEMS } from 'app/model/item';
import { ItemService } from 'app/page/item-page/item.service';
import { ExcelService } from 'app/page/item-page/excel.service';

@Component({
  selector: 'app-item-page',
  templateUrl: './item-page.component.html',
  styleUrls: ['./item-page.component.css']
})
export class ItemPageComponent implements OnInit {

  public items: InventoryItem[];
  public id?: number;
  public item: InventoryItem;
  public isDataAvailable: boolean;
  public itemForChange: InventoryItem;
  public change: boolean;
  public ukljuciPretrazivac: boolean;
  public name: string;

    constructor(private itemService: ItemService, private excelService: ExcelService,
      private authenticationService: AuthenticationService, private router: Router, private route: ActivatedRoute) {
        this.excelService = excelService;
        this.items = ITEMS;
      }

  logout(): void {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return this.authenticationService.isLoggedIn();
  }

  ngOnInit() {
    this.name = '';
    this.change = false;
    this.ukljuciPretrazivac = false;
    this.loadData();

    this.itemForChange = {
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
    this.loadData();
    this.change = false;
  }

  edit(item) {
    this.itemForChange = item;
    this.change = true;
    console.log(this.itemForChange);
  }

  delete(items: InventoryItem) {
    this.itemService.deleteItem(items)
    .subscribe(
      (data) => {
         this.loadData();
        }
      )
      this.loadData();
  }

  loadData() {
    this.itemService.getItems()
    .subscribe(
      (data) => {
        this.items = data;
      }
    )
      this.route.params
      .subscribe(
        (params) => {
          this.isDataAvailable = false;
          this.id = +params['id'];
        }
      )
      this.itemService.getItem(this.id)
      .subscribe(
        (data) => {
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
  findByName(name: string) {
    this.itemService.getItemByName(this.name).subscribe(
      (data) => {
        this.items = data;
        this.ukljuciPretrazivac = true;
      }
    )
}

  resetFilter() {
    this.itemService.getItemByName('').subscribe(
      (data) => {
        this.items = data;
        this.ukljuciPretrazivac = true;
      }
    )
  }

  exportToExcel(event) {
    this.excelService.exportAsExcelFile(ITEMS, 'items');
  }
}
