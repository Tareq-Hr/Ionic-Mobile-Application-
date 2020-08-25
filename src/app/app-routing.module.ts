import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'place-detaille',
    loadChildren: () => import('./place-detaille/place-detaille.module').then( m => m.PlaceDetaillePageModule)
  },
  {
    path: 'add-page-local',
    loadChildren: () => import('./add-page-local/add-page-local.module').then( m => m.AddPageLocalPageModule)
  },
 
  {
    path: 'liste',
    loadChildren: () => import('./liste/liste.module').then( m => m.ListePageModule)
  },
  {
    path: 'inscription',
    loadChildren: () => import('./inscription/inscription.module').then( m => m.InscriptionPageModule)
  },

  {
    path: 'add-page-local',
    loadChildren: () => import('./add-page-local/add-page-local.module').then( m => m.AddPageLocalPageModule)
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
    path: 'meteo',
    loadChildren: () => import('./meteo/meteo.module').then( m => m.MeteoPageModule)
  },
{
    path: 'resaturants',
    loadChildren: () => import('./resaturants/resaturants.module').then( m => m.ResaturantsPageModule)
  },

{
    path: 'hotels',
    loadChildren: () => import('./hotels/hotels.module').then( m => m.HotelsPageModule)
  },

  
];




@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }


