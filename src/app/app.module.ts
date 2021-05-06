import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


// Modulos
import { AppRoutingModule } from "./app-routing.module";
import { PagesModule } from "./pages/pages.module";
import { ComponentsModule } from "./components/components.module";


// Componentes
import { AppComponent } from "./app.component";
import { NopagefoundComponent } from "src/app/pages/nopagefound/nopagefound.component";



@NgModule({
  declarations: [
    AppComponent,
    NopagefoundComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    ComponentsModule,
  ],

  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
