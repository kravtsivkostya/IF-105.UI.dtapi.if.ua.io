import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpecialityListComponent } from './speciality-list/speciality-list.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: SpecialityListComponent }
];

@NgModule({
  declarations: [SpecialityListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class SpecialityModule { }
