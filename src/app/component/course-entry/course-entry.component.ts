import { Component } from '@angular/core';
import {UploadEvent} from "primeng/fileupload";
import {MessageService} from "primeng/api";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CourseService} from "../../service/course.service";
import {Course} from "../../model/course";

@Component({
  selector: 'app-course-entry',
  templateUrl: './course-entry.component.html',
  styleUrl: './course-entry.component.css'
})
export class CourseEntryComponent {

  // date: Date | undefined;
  constructor(private messageService: MessageService,public courseService: CourseService) {
  }
  onBasicUploadAuto(event: UploadEvent) {
    this.messageService.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded Successfully' });
  }
  // @ts-ignore
  statse: Stats[] | undefined;
  // @ts-ignore
  selectedCity: Stats | undefined;
  // @ts-ignore
  user:User[] | undefined;
  // @ts-ignore
  selectedUser: User| undefined;
  ngOnInit() {
    this.statse = [
      { name: 'Active', code: 'Ae' },
      { name: 'Dactive', code: 'De' },

    ];




  }

  //GET THE VALUE FORM THE FORM
  CourseGroup = new FormGroup({
    _courseName: new FormControl('', [Validators.required,Validators.maxLength(150)]),
      _courseDuration: new FormControl('', [Validators.maxLength(12), Validators.required]),
      _courseFees: new FormControl('', [ Validators.required]),
      _courseStatus: new FormControl('', [Validators.required]),
      _courseUsers: new FormControl('',[Validators.required]),
    _courseOverview:new FormControl('', [ Validators.required]),
    _courseDescription:new FormControl('', [Validators.required]),
  })

  save(){
    let allcourse = this.CourseGroup.value;
    console.log(allcourse);


    // @ts-ignore
    let courses : Course = new Course(allcourse._courseName,allcourse._courseOverview,allcourse._courseDescription,parseInt(allcourse._courseDuration),parseInt(allcourse._courseFees),allcourse._courseStatus,allcourse._courseUsers)

    this.courseService.setdbcourses(courses).subscribe(data=>{
      this.messageService.clear();
      this.messageService.add({ key: 'toast1', severity: 'success', summary: 'Success', detail: "Record is successfully added." });
      this.CourseGroup.reset();
    })

  }

}
