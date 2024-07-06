import { Component } from '@angular/core';
import {DropdownFilterOptions} from "primeng/dropdown";
import {UploadEvent} from "primeng/fileupload";
import {MessageService} from "primeng/api";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AdmissionService} from "../../service/admission.service";
import {Admission} from "../../model/admission";

@Component({
  selector: 'app-admission-entry',
  templateUrl: './admission-entry.component.html',
  styleUrl: './admission-entry.component.css'
})
export class AdmissionEntryComponent {
  studentnames:Array<string> = [];
  couersnames:Array<string> = [];


  // @ts-ignore
  statse: Stats[] | undefined;

  ngOnInit() {
    this.statse = [
      { name: 'Active', code: 'Ae' },
      { name: 'Dactive', code: 'De' },

    ];
  }
  constructor(private messageService: MessageService,public admissionService: AdmissionService) {
  }

  onBasicUploadAuto(event: UploadEvent) {
    this.messageService.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded Successfully' });
  }

  selectedStudent: string | undefined;
  selectedCours:string|undefined;

  filterValue: string | undefined = '';
  customFilterFunction(event: KeyboardEvent, options: DropdownFilterOptions) {
    // @ts-ignore
    options.filter(event);
  }
  resetFunction(options: DropdownFilterOptions) {
    // @ts-ignore
    options.reset();
    this.filterValue = '';
  }

  admissiongroup=new FormGroup({
    _admission_start_date: new FormControl('',[Validators.required,Validators.maxLength(150)]),
    _admission_due_date: new FormControl('',[Validators.maxLength(150)]),
    _admission_end_date: new FormControl('',[Validators.required,Validators.maxLength(150)]),
    _idproof: new FormControl('', [Validators.required]),
    _leture_start_date: new FormControl('',[Validators.required,Validators.maxLength(150)]),
    _leture_end_date: new FormControl('',[Validators.required,Validators.maxLength(150)]),
    _diccout: new FormControl('', [Validators.required]),
    _fees:new FormControl('', [Validators.required]),
    _status: new FormControl('', [Validators.required]),
    _number_of_week: new FormControl('', ),
    _pending_fess: new FormControl('', [Validators.required]),
    _inquiry: new FormControl('', [Validators.required]),
  })

  save(){
    let alladm = this.admissiongroup.value;
    console.log(alladm);

    // @ts-ignore
    let admissions : Admission = new Admission(alladm._admission_start_date,alladm._admission_due_date,alladm._admission_end_date,alladm._idproof,alladm._leture_start_date,alladm._leture_end_date,alladm._diccout,alladm._fees,alladm._status,
    alladm._number_of_week,alladm._pending_fess,alladm._inquiry)

    this.admissionService.setadmissions(admissions).subscribe(data=>{})
    this.admissiongroup.reset();
  }

}
