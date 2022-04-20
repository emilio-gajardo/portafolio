import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Componentes
import { ActualidadComponent } from './actualidad/actualidad.component';
import { CertificadosComponent } from './certificados/certificados.component';
import { ConocimientosComponent } from './conocimientos/conocimientos.component';
import { FormacionComponent } from "./formacion/formacion.component";
import { HomeComponent } from "./home/home.component";
// import { NavbarComponent } from "./navbar/navbar.component";



// --------------------------------------------------------------------------
// Portafolio
import { Apirestfulspringbootyh2Component } from './portafolio/apirestfulspringbootyh2/apirestfulspringbootyh2.component';

import { Apirestfulphp7Component } from "./portafolio/apirestfulphp7/apirestfulphp7.component";

import { MiportafolioComponent } from "./portafolio/mi-portafolio/mi-portafolio.component";

import { SisBibliotecaComponent } from "./portafolio/sis-biblioteca/sis-biblioteca.component";
import { SisEnfermeriaComponent } from './portafolio/sis-enfermeria/sis-enfermeria.component';
import { SisAdmintaskComponent } from './portafolio/sis-admintask/sis-admintask.component';
import { SisImportadoraComponent } from "./portafolio/sis-importadora/sis-importadora.component";
import { SisHospitalComponent } from './portafolio/sis-hospital/sis-hospital.component';



const childRoutes: Routes = [
    { path: '', component: HomeComponent, data: { titulo: 'Home' } },
    { path: 'home', component: HomeComponent, data: { titulo: 'Home' } },
    { path: 'actualidad', component: ActualidadComponent, data: { titulo: 'Actualidad' } },
    { path: 'certificados', component: CertificadosComponent, data: { titulo: 'Certificados' } },
    { path: 'conocimientos', component: ConocimientosComponent, data: { titulo: 'Conocimientos' } },
    { path: 'formacion', component: FormacionComponent, data: { titulo: 'Formación' } },
    // { path: 'navbarComponent', component: NavbarComponent, data: { titulo: 'Navbar' } },


    // Portafolio    
    { path: 'mi-portafolio/apirestfulspringbootyh2', component: Apirestfulspringbootyh2Component, data: { titulo: 'Api Restful Spring Boot y H2' } },

    { path: 'mi-portafolio/apirestfulphp7', component: Apirestfulphp7Component, data: { titulo: 'Api Restful php7' } },
    { path: 'mi-portafolio', component: MiportafolioComponent, data: { titulo: 'Mi Portafolio' } },
    { path: 'mi-portafolio/sis-biblioteca', component: SisBibliotecaComponent, data: { titulo: 'Sistema Biblioteca' } },
    { path: 'mi-portafolio/sis-erp-enfermeria', component: SisEnfermeriaComponent, data: { titulo: 'Sistema ERP Enfermería' } },
    { path: 'mi-portafolio/sis-erp-admintask', component: SisAdmintaskComponent, data: { titulo: 'Sistema ERP Admintask' } },
    { path: 'mi-portafolio/sis-post-importadora', component: SisImportadoraComponent, data: { titulo: 'Sistema POST Importadora' } },
    { path: 'mi-portafolio/sis-hospital', component: SisHospitalComponent, data: { titulo: 'Sistema Hospital con Stack MEAN'}}



];

@NgModule({
    declarations: [],
    imports: [RouterModule.forChild(childRoutes)],
    exports: [RouterModule]
})

export class ChildRoutesModule { }