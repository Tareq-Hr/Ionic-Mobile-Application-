import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResaturantsPageRoutingModule } from './resaturants-routing.module';

import { ResaturantsPage } from './resaturants.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResaturantsPageRoutingModule
  ],
  declarations: [ResaturantsPage]
})
export class ResaturantsPageModule {}
