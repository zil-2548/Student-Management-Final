import { Component } from '@angular/core';
import {CourseService} from "../../service/course.service";

@Component({
  selector: 'app-course-view',
  templateUrl: './course-view.component.html',
  styleUrl: './course-view.component.css'
})
export class CourseViewComponent {
  constructor(public courseService: CourseService) {
    // @ts-ignore
    this.courseService.getdbcourses().subscribe(data=>this.courseService.courses=data)
  }


}
