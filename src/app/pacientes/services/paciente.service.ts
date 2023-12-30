import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class PacienteService {
    constructor(private http: HttpClient) { }

    private apiUrl = 'http://localhost:3000/api/v1'; // Ejemplo de la URL de tu API local
    
    getPacientes(): Observable<any> {
        return this.http.get(`${this.apiUrl}/paciente`);
    }



    // Simulando la obtención de datos de pacientes
    //   getPacientes(): Paciente[] {

    //     let json = {
    //         "operacion": "READ",
    //         "id_persona": 0,
    //         "ci": "123456",
    //         "direccion": "Calle Principal 123",
    //         "nombre": "Juan",
    //         "apellidos": "Pérez",
    //         "telefono": 123456789,
    //         "celular": "987654321",
    //         "email": "juan@example.com",
    //         "id_dentista": 0,
    //         "persona_id": 0
    //     }

    //     // Simula la obtención de datos, puedes reemplazar esto con tus datos reales
    //     return [
    //       // Ejemplos de pacientes
    //     //   { id_paciente: 1, persona_id: 1, /*... Otras propiedades ...*/ },
    //     //   { id_paciente: 2, persona_id: 2, /*... Otras propiedades ...*/ },
    //       // Agrega más pacientes según sea necesario
    //     ];
    //   }
}
