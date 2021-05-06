// 26-04-2021
// Archivo que gestiona las rutas hijas del modulo (pages)

import { Routes, RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';



const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./child-routes.module')
            .then(m => m.ChildRoutesModule)
    },
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class PagesRoutingModule { }