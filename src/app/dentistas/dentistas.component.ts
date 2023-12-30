import { Component, Input, OnInit } from '@angular/core';

import { DentistaService } from './services/dentista.service'; // Ruta a tu servicio de dentistas
import { Dentista } from '../interfaces/dentistas';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-dentistas',
  templateUrl: './dentistas.component.html',
  styleUrls: ['./dentistas.component.scss'],
})
export class DentistasComponent implements OnInit {

  titles  = [];
  tableTitle: string = 'Dentistas';
  table: Dentista[] = [];
  dataSource!: MatTableDataSource<any>;
  displayedColumns: string[] = [];
  constructor(private dentistaService: DentistaService) { }

  ngOnInit(): void {
    this.getDentistas();
  }

  getDentistas(): void {
    this.dentistaService.getDentistas().subscribe((data) => {
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
