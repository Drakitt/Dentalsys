import { Routes } from '@angular/router';
import { PacientesComponent } from '../../pacientes/pacientes.component';
import { DentistasComponent } from '../../dentistas/dentistas.component';
import { LoginComponent } from '../../auth/login/login.component';
import { DashbpoardComponent } from '../../dashboard/dashbpoard/dashbpoard.component';
// import { OdontogramaComponent } from '../../odontograma/odontograma.component';



export const AdminLayoutRoutes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  { path: 'dashboard', component: DashbpoardComponent },
  { path: 'pacientes', component: PacientesComponent },
  { path: 'dentistas', component: DentistasComponent },
  { path: 'auth/login', component: LoginComponent },
];
