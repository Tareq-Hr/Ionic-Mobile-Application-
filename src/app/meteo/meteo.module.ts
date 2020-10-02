import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

import { IonicModule } from '@ionic/angular';

import { MeteoPageRoutingModule } from './meteo-routing.module';

import { MeteoPage } from './meteo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MeteoPageRoutingModule,
    HttpClientModule,
    HttpClient
  ],
  declarations: [MeteoPage]
})
export class MeteoPageModule {}
