// import { Vest } from './../../model/vest';
// import { KategorijaService } from './../../services/kategorija.service';
// import { Kategorija } from './../../model/kategorija';
import { Component, OnInit , Input, Output} from '@angular/core';





@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Input()
  // vest: Vest;

  @Input()
  izmena: boolean;

  // @Output()
  // saveVest: EventEmitter<Vest> = new EventEmitter();

  // public kategorije: Kategorija[];
  

 
  constructor() { }

  ngOnInit() {

  //  this.load();

  //   this.kategorijaService.getKategorije()
  //   .subscribe(
  //     (data) => { this.kategorije = data} );
  }

  load(){
    // this.vest = {
    //   naslov: null,
    //   tekst: null,
    //   sadrzaj: null,
    //   kategorija:{
    //     name: null
    //   }
    // }
  }

  // reset(){
  //   this.load();
  //   this.izmena =false;
  // }

  // send(){
  //   this.saveVest.next(this.vest);
   
  // }

}
