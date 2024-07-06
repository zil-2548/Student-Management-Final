import { Component } from '@angular/core';
import {AdmissionService} from "../../service/admission.service";

@Component({
  selector: 'app-admission-view',
  templateUrl: './admission-view.component.html',
  styleUrl: './admission-view.component.css'
})
export class AdmissionViewComponent {

  constructor(public admissionService: AdmissionService) {
   this.admissionService.showadmission().subscribe(data=>this.admissionService.admissions=data);

  }
}
