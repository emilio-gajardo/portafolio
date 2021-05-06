import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modulos
import { RouterModule } from '@angular/router';
// import { ComponentsModule } from '../components/components.module';


// Componentes
import { ActualidadComponent } from './actualidad/actualidad.component';
import { CertificadosComponent } from './certificados/certificados.component';
import { ConocimientosComponent } from './conocimientos/conocimientos.component';
import { FormacionComponent } from "./formacion/formacion.component";
import { HomeComponent } from "./home/home.component";


// Portafolio
import { MiportafolioComponent } from "./portafolio/mi-portafolio/mi-portafolio.component";
import { SisBibliotecaComponent } from "./portafolio/sis-biblioteca/sis-biblioteca.component";
import { SisEnfermeriaComponent } from './portafolio/sis-enfermeria/sis-enfermeria.component';
import { SisAdmintaskComponent } from './portafolio/sis-admintask/sis-admintask.component';
import { SisImportadoraComponent } from './portafolio/sis-importadora/sis-importadora.component';
import { SisHospitalComponent } from './portafolio/sis-hospital/sis-hospital.component';


// import { NavbarComponent } from "../components/navbar/navbar.component";
// import { FooterComponent } from "../components/footer/footer.component";

@NgModule({

    declarations: [
        ActualidadComponent,
        CertificadosComponent,
        ConocimientosComponent,
        FormacionComponent,
        HomeComponent,
        MiportafolioComponent,
        SisBibliotecaComponent,
        SisEnfermeriaComponent,
        SisAdmintaskComponent,
        SisImportadoraComponent,
        SisHospitalComponent,
        // NavbarComponent,
        // FooterComponent
    ],

    exports: [
        ActualidadComponent,
        CertificadosComponent,
        ConocimientosComponent,
        FormacionComponent,
        HomeComponent,
        MiportafolioComponent,
        SisBibliotecaComponent,
        SisEnfermeriaComponent,
        SisAdmintaskComponent,
        SisImportadoraComponent,
        SisHospitalComponent,
        // NavbarComponent,
        // FooterComponent
    ],

    imports: [
        CommonModule,
        RouterModule,
        // ComponentsModule
    ]
})

export class PagesModule { }