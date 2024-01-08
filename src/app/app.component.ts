import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ComponentsModule } from './components/components.module';
import { AdminLayoutModule } from './layout/admin-layout/admin-layout.module';
import { PacienteService } from './pacientes/services/paciente.service';
import { DentistaService } from './dentistas/services/dentista.service';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthInterceptor } from './core/services/interceptor.service';
// import { NgtCanvas } from 'angular-three';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    ComponentsModule,
    AdminLayoutModule,
    HttpClientModule,
    ReactiveFormsModule,
    // NgtCanvas
  ],
  providers:[PacienteService,DentistaService
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'dentalsysproy';
}
