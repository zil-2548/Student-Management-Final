import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

import {StudentService} from "../../service/student.service";
import {MessageService} from "primeng/api";
import {Student} from "../../model/student";
import {UploadEvent} from "primeng/fileupload";



@Component({
  selector: 'app-student-entry',
  templateUrl: './student-entry.component.html',
  styleUrl: './student-entry.component.css'
})
export class StudentEntryComponent {
  date1: Date | undefined;
  // @ts-ignore
  cities: City[] | undefined;

  // @ts-ignore
  selectedCity: City | undefined;

  ngOnInit() {
    this.cities = [
      { name: 'Male', code: 'Me' },
      { name: 'Fmale', code: 'Fe' },

    ];
  }
  onBasicUploadAuto(event: UploadEvent) {
    this.messageService.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded Successfully' });
  }
  Studentgroup = new FormGroup({
    //_student_name : new FormControl('',[Validators.maxLength(150)]),
    _stdent_name :new FormControl('', [Validators.required,Validators.maxLength(150)]),
    _student_father_name:new FormControl('', [Validators.maxLength(150)]),
    _student_last_name: new FormControl('', [Validators.maxLength(150)]),
    _student_10_marks: new FormControl('', [Validators.maxLength(4), Validators.required]),
    _student_12_marks:new FormControl('', [Validators.maxLength(4), Validators.required]),
    _student_phone_number:new FormControl('', [Validators.maxLength(10), Validators.required]),
    _father_egucation:new FormControl('', [Validators.maxLength(150)]),
    _father_email:new FormControl('', [Validators.maxLength(150), Validators.required]),
    _father_phone_number:new FormControl('', [Validators.maxLength(10), Validators.required]),
  });


  constructor(public studentservies:StudentService,private messageService: MessageService) {
  }
    save(){
      let allstudent = this.Studentgroup.value;
      console.log(allstudent)
      // @ts-ignore
      let student : Student = new Student(allstudent._stdent_name,allstudent._student_father_name,allstudent._student_last_name,parseInt(allstudent._student_10_marks),parseInt(allstudent._student_12_marks),parseInt(allstudent._student_phone_number),allstudent._father_egucation,allstudent._father_email,parseInt(allstudent._father_phone_number))
      this.studentservies.setdbstudent(student).subscribe(data=>{
        this.messageService.clear();
        this.messageService.add({ key: 'toast1', severity: 'success', summary: 'Success', detail: "Record is successfully added." });
        this.Studentgroup.reset();
      })
      }

}


