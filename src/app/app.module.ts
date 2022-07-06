import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomePageComponent } from './home-page/home-page.component';
import { AddDataPageComponent } from './add-data-page/add-data-page.component';
import { EditDataPageComponent } from './edit-data-page/edit-data-page.component';
import { DetailDataPageComponent } from './detail-data-page/detail-data-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AddDataPageComponent,
    EditDataPageComponent,
    DetailDataPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,

    //angular material
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
