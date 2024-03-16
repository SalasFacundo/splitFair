import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDividerModule} from '@angular/material/divider';
import { OldGroupsComponent } from './old-groups/old-groups.component';
import { ComponentsModule } from '../components/components.module';
import {MatIconModule} from '@angular/material/icon';
import { NewGroupComponent } from './new-group/new-group.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    OldGroupsComponent,
    NewGroupComponent
],
  imports: [
    CommonModule,
    MatDividerModule,
    ComponentsModule,
    MatIconModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule
  ],
  exports: [
    OldGroupsComponent
  ]
})
export class PagesModule { }
