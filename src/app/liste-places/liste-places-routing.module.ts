import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListePlacesPage } from './liste-places.page';

const routes: Routes = [
  {
    path: '',
    component: ListePlacesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListePlacesPageRoutingModule {}
