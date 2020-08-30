import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {environment} from '../environments/environment';
import { HttpClientModule } from "@angular/common/http";
import { IonicStorageModule } from '@ionic/storage';

import { AngularFireModule } from '@angular/fire'; // pour se connecter à Firebase
import { AngularFireDatabaseModule } from '@angular/fire/database'; // pour manipuler la base de données Firebase
import { AngularFireStorageModule } from '@angular/fire/storage'; // pour accéder aux fonction de stockage et de récupération des fichiers
import { AngularFirestoreModule } from '@angular/fire/firestore';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    IonicStorageModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireStorageModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}