import { MatDrawer, MatSidenavModule } from '@angular/material/sidenav';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ComponentsModule } from '../../components/components.module';
import { AdminLayoutComponent } from './admin-layout.component';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { PacientesComponent } from '../../pacientes/pacientes.component';
import { DentistasComponent } from '../../dentistas/dentistas.component';
import { AgGridModule } from 'ag-grid-angular';




@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule.forChild(AdminLayoutRoutes),
    MatSidenavModule,
    AgGridModule
  ],
  declarations: [
    AdminLayoutComponent,
    PacientesComponent,
    DentistasComponent,
  ],
  exports:[
    AdminLayoutComponent
  ]
})
export class AdminLayoutModule { }
