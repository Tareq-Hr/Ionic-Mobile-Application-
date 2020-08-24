import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resaturants',
  templateUrl: './resaturants.page.html',
  styleUrls: ['./resaturants.page.scss'],
})
export class ResaturantsPage implements OnInit {
  public info={
    nom:"Yocool Taza",
    adresse:"Rue d’Oujda",
    image:"assets/restaurants.png",
  }
  constructor() { }

  ngOnInit() {
  }

}
