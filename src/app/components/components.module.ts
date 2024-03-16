import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import { CardOldGroupComponent } from './card-old-group/card-old-group.component';



@NgModule({
  declarations: [
    CardOldGroupComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports : [
    CardOldGroupComponent
  ]
})
export class ComponentsModule { }
