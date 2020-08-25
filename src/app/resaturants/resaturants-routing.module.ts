import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResaturantsPage } from './resaturants.page';

const routes: Routes = [
  {
    path: '',
    component: ResaturantsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResaturantsPageRoutingModule {}
