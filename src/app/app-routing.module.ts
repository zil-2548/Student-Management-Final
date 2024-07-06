import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StudentEntryComponent} from "./component/student-entry/student-entry.component";
import {StudentViewComponent} from "./component/student-view/student-view.component";
import {CourseEntryComponent} from "./component/course-entry/course-entry.component";
import {CourseViewComponent} from "./component/course-view/course-view.component";
import {AdmissionEntryComponent} from "./component/admission-entry/admission-entry.component";
import {AdmissionViewComponent} from "./component/admission-view/admission-view.component";


const routes: Routes = [
  {
    path:'Add',
    component: StudentEntryComponent,
  },
  {
    path:'View',
    component:StudentViewComponent,
  },
  {
    path:'Cr-Add',
    component:CourseEntryComponent,
  },
  {
    path:'Cr-View',
    component:CourseViewComponent,
  },
  {
    path:'Ad-Add',
    component:AdmissionEntryComponent
  },
  {
    path:'Ad-View',
    component:AdmissionViewComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
