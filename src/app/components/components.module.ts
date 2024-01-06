import { CUSTOM_ELEMENTS_SCHEMA, NgModule, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DatePipe } from '@angular/common';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule, SortDirection } from '@angular/material/sort';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

// import { NgtCanvas, NgtArgs, NgtStore } from 'angular-three';
// import { OrbitControls } from 'three-stdlib';




import { SlidebarComponent } from './slidebar/slidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TableListComponent } from './table-list/table-list.component';
import { AdminLayoutModule } from '../layout/admin-layout/admin-layout.module';
import { MatListModule } from '@angular/material/list';
// import { ModelComponent } from './model/model.component';
import { DentitionComponent } from './dentition/dentition.component';
// import { SceneComponent } from './scene/scene.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatSlideToggleModule,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatPaginatorModule,
    MatSortModule,
    DatePipe,
    MatProgressSpinnerModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    // NgtCanvas,
    // NgtArgs
  ],
  declarations: [
    SlidebarComponent,
    NavbarComponent,
    TableListComponent,
    // ModelComponent,
    DentitionComponent,
    // SceneComponent
  ],
  exports: [
    SlidebarComponent,
    NavbarComponent,
    TableListComponent,
    // ModelComponent,
    DentitionComponent,
    // SceneComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: []
})
export class ComponentsModule { }
