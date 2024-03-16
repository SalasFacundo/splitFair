import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDividerModule} from '@angular/material/divider';
import { OldGroupsComponent } from './old-groups/old-groups.component';
import { ComponentsModule } from '../components/components.module';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [
    OldGroupsComponent
],
  imports: [
    CommonModule,
    MatDividerModule,
    ComponentsModule,
    MatIconModule
  ],
  exports: [
    OldGroupsComponent
  ]
})
export class PagesModule { }
