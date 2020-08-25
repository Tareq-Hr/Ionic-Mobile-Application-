import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlaceDetaillePageRoutingModule } from './place-detaille-routing.module';

import { PlaceDetaillePage } from './place-detaille.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlaceDetaillePageRoutingModule
  ],
  declarations: [PlaceDetaillePage]
})
export class PlaceDetaillePageModule {}
