import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

// Modulos
import { PagesRoutingModule } from "./pages/pages.routing";
// import { ComponentsModule } from "./components/components.module";

// Componentes
import { NopagefoundComponent } from "./pages/nopagefound/nopagefound.component";


const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: NopagefoundComponent },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
        PagesRoutingModule,
        // ComponentsModule
    ],

    exports: [RouterModule]
})


export class AppRoutingModule { }