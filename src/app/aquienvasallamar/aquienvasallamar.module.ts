import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AquienvasallamarPageRoutingModule } from './aquienvasallamar-routing.module';

import { AquienvasallamarPage } from './aquienvasallamar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AquienvasallamarPageRoutingModule
  ],
  declarations: [AquienvasallamarPage]
})
export class AquienvasallamarPageModule {}
