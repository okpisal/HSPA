import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.scss']
})
export class PropertyCardComponent implements OnInit {

  property:any={
    "Id":1,
    "Name":"Birla House",
    "Type":"House",
    "Price":1200
  }
  constructor() { }

  ngOnInit(): void {
  }

}
