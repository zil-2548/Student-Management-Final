export class Student {
  get stdent_name(): string {
    return this._stdent_name;
  }

  set stdent_name(value: string) {
    this._stdent_name = value;
  }

  get student_father_name(): string {
    return this._student_father_name;
  }

  set student_father_name(value: string) {
    this._student_father_name = value;
  }

  get student_last_name(): string {
    return this._student_last_name;
  }

  set student_last_name(value: string) {
    this._student_last_name = value;
  }

  get student_10_marks(): number {
    return this._student_10_marks;
  }

  set student_10_marks(value: number) {
    this._student_10_marks = value;
  }

  get student_12_marks(): number {
    return this._student_12_marks;
  }

  set student_12_marks(value: number) {
    this._student_12_marks = value;
  }

  get student_phone_number(): number {
    return this._student_phone_number;
  }

  set student_phone_number(value: number) {
    this._student_phone_number = value;
  }

  get father_egucation(): string {
    return this._father_egucation;
  }

  set father_egucation(value: string) {
    this._father_egucation = value;
  }

  get father_email(): string {
    return this._father_email;
  }

  set father_email(value: string) {
    this._father_email = value;
  }

  get father_phone_number(): number {
    return this._father_phone_number;
  }

  set father_phone_number(value: number) {
    this._father_phone_number = value;
  }
  constructor(student_name: string, student_father_name: string, student_last_name: string, student_10_marks: number, student_12_marks: number, student_phone_number: number, father_egucation: string, father_email: string, father_phone_number: number) {
  this._stdent_name=student_name;
  this._student_father_name=student_father_name;
  this._student_last_name=student_last_name;
  this._student_10_marks=student_10_marks;
  this._student_12_marks=student_12_marks;
  this._student_phone_number=student_phone_number;
  this._father_egucation=father_egucation;
  this._father_email=father_email;
  this._father_phone_number=father_phone_number;

  }

  _stdent_name: string='';
_student_father_name: string='';
_student_last_name:string='';
_student_10_marks:number=0;
_student_12_marks:number=0;
_student_phone_number:number=0;
_father_egucation:string='';
_father_email:string='';
_father_phone_number:number=0;
}
