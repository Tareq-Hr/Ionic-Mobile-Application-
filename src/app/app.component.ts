import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})

export class AppComponent {

  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home-outline'
    },
    {
      title: 'Restaurants',
      url: '/restaurans',
      icon: 'cloudy-night'
    },
    {
      title: 'Hôtels',
      url: '/hotels',
      icon: 'bed-outline'
    },
    {
      title: 'Météo',
      url: '/meteo',
      icon: 'cloudy-night-outline'
    },
    {
      title: 'Localisation',
      url: '/localisation',
      icon: 'location-outline'
    },
    {
      title: 'Pharmacies',
      url: '/pharmacie',
      icon: 'medkit-outline'
    },
    {
      title: 'Transports',
      url: '/transports',
      icon: 'bus-outline'
    },
    {
      title: 'Ajouter place',
      url: '/add-page-local',
      icon: 'add-circle-outline'
    }

  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
