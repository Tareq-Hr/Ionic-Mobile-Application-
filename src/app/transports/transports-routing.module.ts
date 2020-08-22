import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransportsPage } from './transports.page';

const routes: Routes = [
  {
    path: '',
    component: TransportsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransportsPageRoutingModule {}
