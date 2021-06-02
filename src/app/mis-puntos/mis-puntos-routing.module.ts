import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MisPuntosPage } from './mis-puntos.page';

const routes: Routes = [
  {
    path: '',
    component: MisPuntosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MisPuntosPageRoutingModule {}
