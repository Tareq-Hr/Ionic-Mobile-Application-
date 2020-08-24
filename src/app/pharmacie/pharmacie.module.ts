import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PharmaciePageRoutingModule } from './pharmacie-routing.module';

import { PharmaciePage } from './pharmacie.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PharmaciePageRoutingModule
  ],
  declarations: [PharmaciePage]
})
export class PharmaciePageModule {}
