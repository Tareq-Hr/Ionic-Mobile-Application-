import { Component, OnInit } from '@angular/core';

import { AngularFireStorage} from '@angular/fire/storage';
import { AngularFireDatabase} from '@angular/fire/database';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.page.html',
  styleUrls: ['./liste.page.scss'],
})
export class ListePage implements OnInit {

  images = [];
  constructor(
    public afSG: AngularFireStorage,
    public afDB: AngularFireDatabase
    
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
      url: imgUrl,
    });
  });
}
  ngOnInit() {
  }

}
