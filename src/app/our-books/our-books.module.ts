import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OurBooksPageRoutingModule } from './our-books-routing.module';

import { OurBooksPage } from './our-books.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OurBooksPageRoutingModule
  ],
  declarations: [OurBooksPage]
})
export class OurBooksPageModule {}
