import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { InscriptionPageRoutingModule } from './inscription-routing.module';
import { RouterModule } from '@angular/router';
//import {ValidateEqualModule} from 'ng-validate-equal';
import { InscriptionPage } from './inscription.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
   // ValidateEqualModule,
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
