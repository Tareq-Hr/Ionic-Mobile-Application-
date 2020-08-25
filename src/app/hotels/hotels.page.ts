import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.page.html',
  styleUrls: ['./hotels.page.scss'],
})
export class HotelsPage implements OnInit {
  public info={
    nom:"Hotels Taza",
    adresse:"Quartier La Gare RN 1",
    image:"assets/hotels.png",
  }
  constructor() { }

  ngOnInit() {
  }

}
