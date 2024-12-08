import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OurBooksPage } from './our-books.page';

const routes: Routes = [
  {
    path: '',
    component: OurBooksPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OurBooksPageRoutingModule {}
