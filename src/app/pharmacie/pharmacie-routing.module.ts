import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PharmaciePage } from './pharmacie.page';

const routes: Routes = [
  {
    path: '',
    component: PharmaciePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PharmaciePageRoutingModule {}
