import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MisPuntosPageRoutingModule } from './mis-puntos-routing.module';

import { MisPuntosPage } from './mis-puntos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MisPuntosPageRoutingModule
  ],
  declarations: [MisPuntosPage]
})
export class MisPuntosPageModule {}
