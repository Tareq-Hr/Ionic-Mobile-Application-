import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListePlacesPageRoutingModule } from './liste-places-routing.module';

import { ListePlacesPage } from './liste-places.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListePlacesPageRoutingModule
  ],
  declarations: [ListePlacesPage]
})
export class ListePlacesPageModule {}
