// import { kategorijaService } from './kategorija.service';
// import { meniItemService } from './meniItem.service';
// import { meniItem } from './../model/meniItem';
// import { Kategorija } from 'app/model/kategorija';
import { Component, OnInit } from '@angular/core';
import { Page } from 'app/model/page';
import { AuthenticationService } from 'app/service/authentication-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-meni-component',
  templateUrl: './meni-component.component.html',
  styleUrls: ['./meni-component.component.css']
})
export class MeniComponentComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

constructor(private authenticationService:AuthenticationService, private router: Router) {}


logout(): void {
  this.authenticationService.logout();
  this.router.navigate(['/login']);
}

isLoggedIn(): boolean {
  return this.authenticationService.isLoggedIn();
}
}


//       kategorija:Kategorija[];
    
//       page:Page<meniItem>;
    
//       currentPageNumber:number;

//       meniItem:meniItem;
    
//       forEdit:meniItem;

//       forSearch:meniItem;

//       nameItem: string;
    
//       constructor(private meniItemService:meniItemService,
//       private kategorijaService:kategorijaService,
//       private authenticationService:AuthenticationService
//       ) {}
    
//       ngOnInit() {
//         this.currentPageNumber = 0;
//         this.loadData();
//         //load shopping cart
//         this.meniItemService.get().subscribe(
//           (meniItem) => {
//             this.meniItem = meniItem;
//           }
//         );
//         this.kategorijaService.get().subscribe(
//           (kategorija) => {
//             this.kategorija = kategorija;
//           }
//         );
//         this.forEdit = {
//           name:'',
//           kategorija:null,
//           price:0
//         };        
//       }
    
//       loadData() {   
//         this.meniItemService.getmeniItemComponents(this.currentPageNumber).subscribe(data => {
//           this.page = data;
//           console.log(data);      
//         })
//       }


//     ngOnChanges() {  
//     }
     
//       findByName(nameItem: string){ 
//        this.meniItemService.filterByName(this.nameItem).subscribe(
//        (data) => {
//         this.page = data;
//         console.log(data);
//         console.log(this.meniItem);
//         }
//        )
//       }
    
//       changePage(i:number){
//         this.currentPageNumber+=i;
//         this.loadData();
//       }
    
      // isAdmin():boolean{
      //   return this.authenticationService.isAdmin();
      // }
     
//       addComponent(meniItem:meniItem){
//         this.meniItemService.savemeniItemComponent(meniItem).subscribe(
//           (savedComp) => {
//             this.loadData();
//           }
//         )
//       }

      
    
//       delete(meniItem:meniItem){
//         this.meniItemService.deletemeniItemComponent(meniItem).subscribe(
//           (response) => {
//             this.loadData();
//           },
//           (error) => {
//             console.log('This is not good!', 'Oops!');
//           }
//         );    
//       }
    
//       edit(meniItem:meniItem){
//         //kopija objekta comp
//         this.forEdit = meniItem;
//       }

// }
