import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireStorage } from '@angular/fire/storage';
import { NavController } from '@ionic/angular';
import { IonSlides } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
	ImageArray: any=[];
	ImageArray2: any=[];
	ImageArray3: any=[];
	constructor(public navCtrl:NavController){
		this.ImageArray=[{'image':'assets/slides/friouato1.jpg'},
		{'image':'assets/slides/friouato8.jpg'},
		{'image':'assets/slides/chaara.jfif'}];
  
		this.ImageArray2=[{'image2':'assets/slides/babboudir.jpg'},
	  {'image2':'assets/slides/babboudir1.jpg'},
	  {'image2':'assets/slides/img1.JPG'},
	  {'image2':'assets/slides/bouiblane.jpg'}];
	  
	  this.ImageArray3=[{'image3':'assets/slides/m3.jpg'},{'image3':'assets/slides/m5.jpg'},{'image3':'assets/slides/m9.jpg'}];
	}
	slideOptions = {
	  speed: 400,
	};
  
  
	slidesDidLoad(slides: IonSlides) {
	  slides.startAutoplay();
	}


}
