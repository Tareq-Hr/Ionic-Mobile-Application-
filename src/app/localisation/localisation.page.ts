import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';


import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsMapTypeId,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker,
  Environment
} from '@ionic-native/google-maps';

import { ActionSheetController, Platform, AlertController} from '@ionic/angular';

@Component({
  selector: 'app-localisation',
  templateUrl: './localisation.page.html',
  styleUrls: ['./localisation.page.scss'],
})
export class LocalisationPage implements OnInit {

  map: GoogleMap;

  constructor(public alertController: AlertController,
    public actionCtrl: ActionSheetController,
    public route: ActivatedRoute,
    private platform: Platform) { 
		if (this.platform.is('cordova')) {
      	this.loadMap();
    }
    }

/*API Places : https://maps.googleapis.com/maps/api/place/textsearch/json?query=taza&key=AIzaSyATk2szK7uvBWigwm7OcfS2vXO9jZHYN7Y*/

  loadMap() {
	Environment.setEnv({
		API_KEY_FOR_BROWSER_RELEASE: 'AIzaSyAeSk6OFtwx7z_BcLpB0x0NQdupp1rLdRE',
		API_KEY_FOR_BROWSER_DEBUG: 'AIzaSyAeSk6OFtwx7z_BcLpB0x0NQdupp1rLdRE'
	});
  let latitude = Number(this.route.snapshot.paramMap.get('latitude'));
  let longitude = Number(this.route.snapshot.paramMap.get('longitude'));
    if((latitude != null) && (longitude != null)){
  this.map = GoogleMaps.create('map', {
    camera: {
      target: {
        lat: latitude,
        lng: longitude
      },
      zoom: 16,
      tilt: 30
    }
  });
}else if((latitude == null) && (longitude == null)){
	this.map = GoogleMaps.create('map', {
		camera: {
			target: {
				lat: 34.2199201,
				lng: -3.99871
			},
			zoom: 13,
			tilt: 30
		}
	});
}
}


placeMarker(markerTitle: string) {
   const marker: Marker = this.map.addMarkerSync({
      title: markerTitle,
      icon: 'red',
      animation: 'DROP',
      position: this.map.getCameraPosition().target
   });
}

async addMarker() {
    const alert = await this.alertController.create({
      header: 'Ajouter un emplacement',
      inputs: [
        {
          name: 'title',
          type: 'text',
          placeholder: 'Le titre'
        }
      ],
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ajouter',
          handler: data => {
            console.log('Titre: ' + data.title);
            this.placeMarker(data.title);
          }
        }
      ]
    });
    await alert.present();
  }

  ngOnInit() {
  }
}