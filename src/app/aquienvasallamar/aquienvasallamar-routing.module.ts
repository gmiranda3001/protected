import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AquienvasallamarPage } from './aquienvasallamar.page';

const routes: Routes = [
  {
    path: '',
    component: AquienvasallamarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AquienvasallamarPageRoutingModule {}
