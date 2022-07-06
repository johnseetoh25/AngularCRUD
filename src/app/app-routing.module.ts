import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddDataPageComponent } from './add-data-page/add-data-page.component';
import { DetailDataPageComponent } from './detail-data-page/detail-data-page.component';
import { EditDataPageComponent } from './edit-data-page/edit-data-page.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'add-data-page', component: AddDataPageComponent },
  { path: 'edit-data-page/:id', component: EditDataPageComponent },
  { path: 'detail-data-page/:id', component: DetailDataPageComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
