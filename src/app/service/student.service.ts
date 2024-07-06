import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Student} from "../model/student";

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  deletemsg :any ="";
  Cureentrecoerd:any;

  public student : Student[] = new Array<Student>();
  constructor(public http: HttpClient) { }

  setdbstudent(student: Student):Observable<Student> {
    return this.http.post<Student>('http://localhost:3000/users',JSON.parse(JSON.stringify(student)));
  }
  updatedbstudent(student: Student):Observable<Student> {
    return this.http.put<Student>('http://localhost:3000/users',JSON.parse(JSON.stringify(student)));
  }
  showstudent() {
    // @ts-ignore
    return this.http.get<Student[]>('http://localhost:3000/users');
  }
  deletestudent(_id:any){
  return this.http.delete(`http://localhost:3000/users/${_id}`).subscribe(data=>{this.deletemsg=data;this.showstudent();})
  }
}
