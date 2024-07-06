import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentEntryComponent } from './component/student-entry/student-entry.component';
import {MenubarModule} from "primeng/menubar";
import {IconFieldModule} from "primeng/iconfield";
import {InputIconModule} from "primeng/inputicon";
import { InputTextModule } from 'primeng/inputtext';
import {Button} from "primeng/button";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MessageService} from "primeng/api";
import {HttpClientModule} from "@angular/common/http";
import { StudentViewComponent } from './component/student-view/student-view.component';
import {TableModule} from "primeng/table";
import { CourseEntryComponent } from './component/course-entry/course-entry.component';
import {InputNumberModule} from "primeng/inputnumber";
import {CalendarModule} from "primeng/calendar";
import {FloatLabelModule} from "primeng/floatlabel";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {DropdownModule} from "primeng/dropdown";
import {FileUploadModule} from "primeng/fileupload";
import {ToastModule} from "primeng/toast";
import { CourseViewComponent } from './component/course-view/course-view.component';
import { AdmissionEntryComponent } from './component/admission-entry/admission-entry.component';
import { AdmissionViewComponent } from './component/admission-view/admission-view.component';
import { PaymentEntryComponent } from './component/payment-entry/payment-entry.component';
import { PaymentViewComponent } from './component/payment-view/payment-view.component';


@NgModule({
  declarations: [
    AppComponent,
    StudentEntryComponent,
    StudentViewComponent,
    CourseEntryComponent,
    CourseViewComponent,
    AdmissionEntryComponent,
    AdmissionViewComponent,
    PaymentEntryComponent,
    PaymentViewComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    IconFieldModule,
    InputIconModule,
    InputTextModule,
    Button,
    ReactiveFormsModule,
    HttpClientModule,
    TableModule,
    InputNumberModule,
    CalendarModule,
    FormsModule,
    FloatLabelModule,
    BrowserAnimationsModule,
    DropdownModule,
    FileUploadModule,
    ToastModule,
  ],
  providers: [
    MessageService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
