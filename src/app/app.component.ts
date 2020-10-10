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
      title: 'Accueil',
      url: '/home',
      icon: 'home-outline'
    },
    {
      title: 'Restaurants',
      url: '/resaturants',
      icon: 'restaurant-outline'
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
      url: '/localisation/34.2199201/-3.99871',
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
      title: 'Places Locals',
      url: '/liste-places',
      icon: 'image-outline'
    },
    {
      title: 'Déconnexion',
      url: '/login',
      icon: 'log-out-outline'
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
