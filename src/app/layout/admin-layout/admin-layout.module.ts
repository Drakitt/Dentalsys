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
import { LoginComponent } from '../../auth/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthInterceptor } from '../../core/services/interceptor.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { DashbpoardComponent } from '../../dashboard/dashbpoard/dashbpoard.component';




@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule.forChild(AdminLayoutRoutes),
    MatSidenavModule,
    FormsModule,
    ReactiveFormsModule,
    AgGridModule
  ],
  declarations: [
    AdminLayoutComponent,
    PacientesComponent,
    DentistasComponent,
    LoginComponent,
    DashbpoardComponent
  ],
  exports:[
    AdminLayoutComponent
  ],
  providers:[
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ]
})
export class AdminLayoutModule { }
