import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import { CardOldGroupComponent } from './card-old-group/card-old-group.component';
import { AddPeopleGridComponent } from './add-people-grid/add-people-grid.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CardOldGroupComponent,
    AddPeopleGridComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    ReactiveFormsModule
  ],
  exports : [
    CardOldGroupComponent,
    AddPeopleGridComponent
  ]
})
export class ComponentsModule { }
