import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },

  {
    path: '',
    redirectTo: 'resaturants',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'liste-places',
    loadChildren: () => import('./liste-places/liste-places.module').then( m => m.ListePlacesPageModule)
  },
  {
    path: 'add-page-local',
    loadChildren: () => import('./add-page-local/add-page-local.module').then( m => m.AddPageLocalPageModule)
  },
  {
    path: 'meteo',
    loadChildren: () => import('./meteo/meteo.module').then( m => m.MeteoPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'localisation',
    loadChildren: () => import('./localisation/localisation.module').then( m => m.LocalisationPageModule)
  },
  {
    path: 'pharmacie',
    loadChildren: () => import('./pharmacie/pharmacie.module').then( m => m.PharmaciePageModule)
  },
  {
    path: 'transports',
    loadChildren: () => import('./transports/transports.module').then( m => m.TransportsPageModule)
  },
  {
    path: 'hotels',
    loadChildren: () => import('./hotels/hotels.module').then( m => m.HotelsPageModule)
  },
  {
    path: 'resaturants',
    loadChildren: () => import('./resaturants/resaturants.module').then( m => m.ResaturantsPageModule)
  },



  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
