import { Component, OnInit } from '@angular/core';
import { AngularFireStorage} from '@angular/fire/storage';
import { AngularFireDatabase } from '@angular/fire/database';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-place-detaille',
  templateUrl: './place-detaille.page.html',
  styleUrls: ['./place-detaille.page.scss'],
})
export class PlaceDetaillePage implements OnInit {

  images = [];
  constructor(
    public afSG: AngularFireStorage,
    public afDB: AngularFireDatabase,
    public route:ActivatedRoute
    
  ) {
    this.getImagesDatabase();
    this.getImagesLocalDatabase();
  }



getImagesDatabase() {
  this.afDB.list('Places/').snapshotChanges(['child_added']).subscribe(images => {
    images.forEach(image => {this.getImagesStorage(image);
    });
  });
}

getImagesLocalDatabase() {
  this.afDB.list('PlacesLocals/').snapshotChanges(['child_added']).subscribe(images => {
    images.forEach(image => {this.getImagesStorage(image);
    });
  });
}

getImagesStorage(image: any) {
  const imgRef = image.payload.exportVal().images;
  this.afSG.ref(imgRef).getDownloadURL().subscribe(imgUrl => {
    console.log(imgUrl);
    let param=this.route.snapshot.paramMap.get('id');
     if(image.payload.exportVal().titre == param){
    this.images.push({
      name: image.payload.exportVal().titre,
      url: imgUrl,
      adresse: image.payload.exportVal().adresse,
      ville: image.payload.exportVal().ville,
      pays: image.payload.exportVal().pays,
      long: image.payload.exportVal().longitude,
      lat: image.payload.exportVal().latitude,
      desc: image.payload.exportVal().mots_cles
    });
  }
  });
}

  ngOnInit() {
  }

}
