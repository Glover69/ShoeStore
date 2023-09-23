import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopComponent } from './shop.component';
import { ShoeDetailPageComponent } from './pages/shoe-detail-page/shoe-detail-page.component';


const routes: Routes = [
  {
    path: '',
    component: ShopComponent,
  },

  {
    path: 'detail', component: ShoeDetailPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
