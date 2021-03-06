import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";


import { NavbarComponent } from "./navbar/navbar.component";
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
  ],

  exports:[
    NavbarComponent,
    FooterComponent,
  ],

  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ComponentsModule { }
