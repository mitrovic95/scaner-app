import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { InventoryItem } from 'app/model/item';

@Injectable()
export class ItemService {

  private path = 'api/item';
  private header = new HttpHeaders({ 'Content-Type': 'application/json' });


  constructor(private http: HttpClient) { }

  getItems(): Observable<InventoryItem[]> {
    return this.http.get(this.path) as Observable<InventoryItem[]>;
  }

  getItem(id: number): Observable<InventoryItem> {
    // console.log('JEDAN USER ID', id);
    return this.http.get(`${this.path}/${id}`) as Observable<InventoryItem>;
  }

  deleteItem(item: InventoryItem) {
    return this.http.delete(this.path + '/' + item.id);
  }

  saveItem(item: InventoryItem): Observable<InventoryItem> {
    if (item.id === undefined) {
      return this.http.post(this.path, item, {headers: this.header}) as Observable<InventoryItem>;
    }
    else {
      return this.http.put(`${this.path}/${item.id}`, item, {headers: this.header}) as Observable<InventoryItem>;
    }
  }
  getItemByName(name: string): Observable<InventoryItem[]>  {
    return this.http.get(this.path + '?name=' + name) as Observable<InventoryItem[]>;
   }
}

