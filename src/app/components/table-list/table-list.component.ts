import { HttpClient } from '@angular/common/http';
import { Component, ViewChild, AfterViewInit, Input } from '@angular/core';
import { merge, Observable, of as observableOf } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';

import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule, SortDirection } from '@angular/material/sort';
import { DatePipe } from '@angular/common';
import { MatTableDataSource } from '@angular/material/table';
import { Paciente } from '../../interfaces/pacientes';

export interface UserData {
  id: string;
  name: string;
  progress: string;
  fruit: string;
}

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.scss'],
})
export class TableListComponent implements AfterViewInit {


  @Input()
  titles: any = [];
  @Input()
  tableTitle: string = '';
  @Input()
  table: any = [];
  @Input()
  displayedColumns: string[] = [];
  @Input()
  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>();

  isRateLimitReached:boolean = false;
  isLoadingResults: boolean = true;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor() {
  }

  ngAfterViewInit() {
    if (this.dataSource) {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.isLoadingResults = false;
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
