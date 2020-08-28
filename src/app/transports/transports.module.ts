import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TransportsPageRoutingModule } from './transports-routing.module';

import { TransportsPage } from './transports.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TransportsPageRoutingModule
  ],
  declarations: [TransportsPage]
})
export class TransportsPageModule {}
