import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddPeopleGridComponent } from './components/add-people-grid/add-people-grid.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import {  ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { AddDataPageComponent } from './pages/add-data-page/add-data-page.component';
import { ResultsGridComponent } from './components/results-grid/results-grid.component';
import {MatDividerModule} from '@angular/material/divider';



@NgModule({
  declarations: [
    AddPeopleGridComponent,
    AddDataPageComponent,
    ResultsGridComponent
  ],
  imports: [
    CommonModule,
    MatProgressBarModule,
    MatInputModule,
    MatTableModule,
    ReactiveFormsModule,
    MatIconModule,
    MatDividerModule
  ],
  exports: [
    AddPeopleGridComponent,
    AddDataPageComponent
  ]
})
export class AddDataModule { }
