import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { HttpClientModule } from '@angular/common/http';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddDataModule } from './modules/add-data/add-data.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MatProgressBarModule,
    HttpClientModule,
    MatInputModule,
    MatTableModule,
    FormsModule,
    BrowserAnimationsModule,
    AddDataModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
