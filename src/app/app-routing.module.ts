import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: 'welcome',
    loadChildren: () => 
      import('./modules/landing-page/landing-page.module').then((m) => m.LandingPageModule),
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules, // Preload all lazy-loaded modules and critical assets
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
