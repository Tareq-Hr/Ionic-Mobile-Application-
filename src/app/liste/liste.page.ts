import { Component, OnInit } from '@angular/core';
import { AngularFireStorage} from '@angular/fire/storage';
import { AngularFireDatabase } from '@angular/fire/database';
import { element } from 'protractor';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-liste',
  templateUrl: './liste.page.html',
  styleUrls: ['./liste.page.scss'],
})
export class ListePage implements OnInit {
  images = [];
  constructor(
    public afSG: AngularFireStorage,
    public afDB: AngularFireDatabase,
    public route:ActivatedRoute
    
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
    let param=this.route.snapshot.paramMap.get('id');
     if(image.payload.exportVal().categorie ==param){
    this.images.push({
      name: image.payload.exportVal().titre,
      url: imgUrl,
    });
  }
  });
}
  ngOnInit() {
  }

}
