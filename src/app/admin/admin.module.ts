import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { Routes, RouterModule } from '@angular/router';
import { StudentsComponent } from './students/students.component';
import { SpecialityListComponent } from './speciality/speciality-list/speciality-list.component';


const routes: Routes = [
  {
    path: '', component: AdminComponent,
    children: [
      { path: 'students', component: StudentsComponent },
      { path: 'speciality', component: SpecialityListComponent }
      // Here you can add routes for your entities
    ]
  }
];
@NgModule({
  declarations: [
    AdminComponent,
    StudentsComponent,
    SpecialityListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class AdminModule { }
