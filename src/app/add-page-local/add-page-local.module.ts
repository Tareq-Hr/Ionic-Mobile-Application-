import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddPageLocalPageRoutingModule } from './add-page-local-routing.module';

import { AddPageLocalPage } from './add-page-local.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddPageLocalPageRoutingModule
  ],
  declarations: [AddPageLocalPage]
})
export class AddPageLocalPageModule {}
