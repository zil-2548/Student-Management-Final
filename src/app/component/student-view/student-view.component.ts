import { Component } from '@angular/core';
import {Table} from "primeng/table";
import {StudentService} from "../../service/student.service";
import {MessageService} from "primeng/api";
import {Student} from "../../model/student";
import {Router} from "@angular/router";


@Component({
  selector: 'app-student-view',
  templateUrl: './student-view.component.html',
  styleUrl: './student-view.component.css'
})
export class StudentViewComponent {
constructor(public studentService: StudentService,private messageService: MessageService,public router:Router) {
 // studentService.showstudent();
  // @ts-ignore
  this.studentService.showstudent().subscribe(data=>this.studentService.student=data)
 console.log("Student View Constructor");
}
  clear(table: Table) {
    table.clear();
  }

  deleteStudent(_id:any){
  this.studentService.deletestudent(_id);


    this.messageService.clear();
    this.messageService.add({ key: 'toast1', severity: 'error', summary: 'Deleted', detail: this.studentService.deletemsg.msg });
  }

  updateStudent(student:Student) {
    this.studentService.Cureentrecoerd=student;
    this.router.navigate(['/Add']);
    this.studentService.updatedbstudent(student).subscribe(data => data);
  }

}

