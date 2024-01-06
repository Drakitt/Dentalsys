import { Routes } from '@angular/router';
import { PacientesComponent } from '../../pacientes/pacientes.component';
import { DentistasComponent } from '../../dentistas/dentistas.component';
// import { OdontogramaComponent } from '../../odontograma/odontograma.component';



export const AdminLayoutRoutes: Routes = [
  { path: 'pacientes', component: PacientesComponent },
  { path: 'dentistas', component: DentistasComponent },
  // { path: 'odontograma', component: OdontogramaComponent },
];
