import { Component, OnInit } from '@angular/core';
import { AngularFireStorage} from '@angular/fire/storage';
import { AngularFireDatabase } from '@angular/fire/database';
@Component({
  selector: 'app-transports',
  templateUrl: './transports.page.html',
  styleUrls: ['./transports.page.scss'],
})
export class TransportsPage implements OnInit {
  images = [];
  constructor(
    public afSG: AngularFireStorage,
    public afDB: AngularFireDatabase
    
  ) {
    this.getImagesDatabase();
  }



getImagesDatabase() {
  this.afDB.list('Places/').snapshotChanges(['child_added']).subscribe(images => {
    images.forEach(image => {
      this.getImagesStorage(image);
    });
  });
}

getImagesStorage(image: any) {
  const imgRef = image.payload.exportVal().images;
  this.afSG.ref(imgRef).getDownloadURL().subscribe(imgUrl => {
    console.log(imgUrl);
     if(image.payload.exportVal().categorie == 'transport'){
    this.images.push({
      name: image.payload.exportVal().titre,
      url: imgUrl,
      adresse: image.payload.exportVal().adresse
    });
  }
  });
}

  ngOnInit() {
  }
}
