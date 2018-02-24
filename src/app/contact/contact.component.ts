import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  title: string = 'Google Maps Addeed Successfully';
  
   lat: number = 12.849532;
  
   lng: number = 80.226026;

   lat1:number = 12.833227;
   lng1:number = 80.048879;
  constructor() { }

  ngOnInit() {
  }
  
}
