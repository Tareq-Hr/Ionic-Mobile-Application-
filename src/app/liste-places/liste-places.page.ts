import { Component, OnInit } from '@angular/core';

import { AngularFireStorage} from '@angular/fire/storage';
import { AngularFireDatabase } from '@angular/fire/database';
import { element } from 'protractor';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-liste-places',
  templateUrl: './liste-places.page.html',
  styleUrls: ['./liste-places.page.scss'],
})

export class ListePlacesPage implements OnInit {

  images = [];
  public searchTerm: string = "";
  constructor(
    public afSG: AngularFireStorage,
    public afDB: AngularFireDatabase,
    public route:ActivatedRoute
    
  ) {
    
  }
getImagesDatabase() {
  this.afDB.list('PlacesLocals/').snapshotChanges(['child_added']).subscribe(images => {
    images.forEach(image => {
      this.getImagesStorage(image);
    });
  });
}

getImagesStorage(image: any) {
  this.images = [];
  const imgRef = image.payload.exportVal().images;
  this.afSG.ref(imgRef).getDownloadURL().subscribe(imgUrl => {
    console.log(imgUrl);
      if(this.searchTerm == ""){
    this.images.push({
      name: image.payload.exportVal().titre,
      url: imgUrl
    });
  }else if(image.payload.exportVal().titre.toLowerCase().includes(this.searchTerm.toLowerCase())){
      this.images = [];
      const imgRef = image.payload.exportVal().images;
      this.afSG.ref(imgRef).getDownloadURL().subscribe(imgUrl => {
    console.log(imgUrl);
    this.images.push({
      name: image.payload.exportVal().titre,
      url: imgUrl
    });
  });
  }
});
 }

  ngOnInit() {
    this.getImagesDatabase();
  }

}
