import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentAddComponent } from './components/student-add/student-add.component';
import { StudentDetailComponent } from './components/student-detail/student-detail.component';
import { StudentEditComponent } from './components/student-edit/student-edit.component';
import { StudentComponent } from './components/student/student.component';

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "student" },
  { path: "student", component: StudentComponent },
  { path: "student/:id", component: StudentDetailComponent },
  { path: "student-edit/:id", component: StudentEditComponent },
  { path: "student-add", component: StudentAddComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
