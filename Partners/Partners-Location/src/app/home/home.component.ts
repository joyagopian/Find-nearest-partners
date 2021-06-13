import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service'
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  partners: any;
  distance : number;

  constructor(private _http : HttpService) { }
  ngOnInit(): void {
    this.getpartnersData()
  }
  getpartnersData(){
    console.log(this.distance);
    return  this._http.getPartners(this.distance).subscribe(data => { this.partners = data;console.log(data)});
  }

}
