import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddPageLocalPage } from './add-page-local.page';

const routes: Routes = [
  {
    path: '',
    component: AddPageLocalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddPageLocalPageRoutingModule {}
