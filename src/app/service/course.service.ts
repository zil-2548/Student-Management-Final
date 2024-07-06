import { Injectable } from '@angular/core';
import {Course} from "../model/course";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  public courses: Course[] = new Array<Course>();
  constructor(public http: HttpClient) { }

  setdbcourses(courses: Course):Observable<Course[]> {
    return this.http.post<Course[]>('http://localhost:3000/course',JSON.parse(JSON.stringify(courses)));
  }
  getdbcourses(courses: Course):Observable<Course> {
    // @ts-ignore
    return this.http.get<Course[]>("http://localhost:3000/course");
  }

}
