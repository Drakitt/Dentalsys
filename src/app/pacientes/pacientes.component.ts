import { Component, Input, OnInit } from '@angular/core';

import { PacienteService } from './services/paciente.service'; // Ruta a tu servicio de pacientes
import { Paciente } from '../interfaces/pacientes';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.scss'],
})
export class PacientesComponent implements OnInit {

  titles  = [];
  tableTitle: string = 'Pacientes';
  table: Paciente[] = [];
  dataSource!: MatTableDataSource<any>;
  displayedColumns: string[] = [];
  constructor(private pacienteService: PacienteService) { }

  ngOnInit(): void {
    this.getPacientes();
  }

  getPacientes(): void {
    this.pacienteService.getPacientes().subscribe((data) => {
      console.log('response received:', data.rows);
      this.table = data.rows;
      this.dataSource = new MatTableDataSource(data.rows);
      this.titles = data.fields;

      console.log('response :', data.fields.map((_item: any) =>{ return _item.name}))
      this.displayedColumns = data.fields.map((_item: any) =>{ return _item.name});
    }, error => {
      console.log('error occurred:', error);
    });
  }
}
