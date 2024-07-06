import { Injectable } from '@angular/core';
import {Admission} from "../model/admission";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AdmissionService {
  public admissions: Admission[] = new Array<Admission>();

  constructor(public http: HttpClient) { }

  setadmissions(admissions: Admission): Observable<Admission> {
    // @ts-ignore
    return this.http.post<Admission>('http://localhost:3000/admissions',JSON.parse(JSON.stringify(admissions)))
  }
  showadmission(){
    return this.http.get<Admission[]>('http://localhost:3000/admissions');
  }
}
