import { Component, OnInit } from '@angular/core';

import { AngularFireStorage} from '@angular/fire/storage';
import { AngularFireDatabase } from '@angular/fire/database';
import { element } from 'protractor';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-liste-places',
  templateUrl: './liste-places.page.html',
  styleUrls: ['./liste-places.page.scss'],
})

export class ListePlacesPage implements OnInit {

  images = [];
  constructor(
    public afSG: AngularFireStorage,
    public afDB: AngularFireDatabase,
    public route:ActivatedRoute
    
  ) {
    this.getImagesDatabase();
  }
getImagesDatabase() {
  this.afDB.list('PlacesLocals/').snapshotChanges(['child_added']).subscribe(images => {
    images.forEach(image => {
      this.getImagesStorage(image);
    });
  });
}

getImagesStorage(image: any) {
  const imgRef = image.payload.exportVal().images;
  this.afSG.ref(imgRef).getDownloadURL().subscribe(imgUrl => {
    console.log(imgUrl);
    this.images.push({
      name: image.payload.exportVal().titre,
      url: imgUrl
    });
  });
}

  ngOnInit() {
  }

}
