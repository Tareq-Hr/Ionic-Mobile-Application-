import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pharmacie',
  templateUrl: './pharmacie.page.html',
  styleUrls: ['./pharmacie.page.scss'],
})
export class PharmaciePage implements OnInit {

  public info={
    nom:"Pharmacie Taza",
    adresse:"266,lotiss.koucha 35000",
    image:"assets/pharmacie.jpeg",
    icon:"assets/path.png"
  }
  constructor() { }

  ngOnInit() {
  }

}
