import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { InscriptionPageRoutingModule } from './inscription-routing.module';
import { RouterModule } from '@angular/router';

import { InscriptionPage } from './inscription.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    InscriptionPageRoutingModule,
    RouterModule.forChild([
      {
        path: '',
        component: InscriptionPage
      }
    ])
  ],
  declarations: [InscriptionPage]
})
export class InscriptionPageModule {}
