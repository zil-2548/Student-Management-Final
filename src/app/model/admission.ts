export class Admission {
  get admission_start_date(): any {
    return this._admission_start_date;
  }

  set admission_start_date(value: any) {
    this._admission_start_date = value;
  }

  get admission_end_date(): any {
    return this._admission_end_date;
  }

  set admission_end_date(value: any) {
    this._admission_end_date = value;
  }

  get admission_due_date(): any {
    return this._admission_due_date;
  }

  set admission_due_date(value: any) {
    this._admission_due_date = value;
  }

  get idproof(): any {
    return this._idproof;
  }

  set idproof(value: any) {
    this._idproof = value;
  }

  get leture_start_date(): any {
    return this._leture_start_date;
  }

  set leture_start_date(value: any) {
    this._leture_start_date = value;
  }

  get leture_end_date(): any {
    return this._leture_end_date;
  }

  set leture_end_date(value: any) {
    this._leture_end_date = value;
  }

  get diccout(): number {
    return this._diccout;
  }

  set diccout(value: number) {
    this._diccout = value;
  }

  get fees(): number {
    return this._fees;
  }

  set fees(value: number) {
    this._fees = value;
  }

  get status(): any {
    return this._status;
  }

  set status(value: any) {
    this._status = value;
  }

  get number_of_week(): number {
    return this._number_of_week;
  }

  set number_of_week(value: number) {
    this._number_of_week = value;
  }

  get pending_fess(): number {
    return this._pending_fess;
  }

  set pending_fess(value: number) {
    this._pending_fess = value;
  }

  get inquiry(): any {
    return this._inquiry;
  }

  set inquiry(value: any) {
    this._inquiry = value;
  }

  constructor(admission_start_date:any,admission_end_date:any,admission_due_date:any,idproof:any,lecture_start_date:any,lecture_end_date:any,diccout:any,fees:number,status:any,number_of_week:number,pending_fess:number,inquiry:any) {
  this._admission_start_date = admission_start_date;
  this._admission_due_date = admission_due_date;
  this._admission_end_date = admission_end_date;
  this._idproof=idproof;
  this._leture_start_date=lecture_start_date;
  this._leture_end_date=lecture_end_date;
  this._diccout=diccout;
  this._fees=fees;
  this._status=status;
  this._number_of_week=number_of_week;
  this._pending_fess=pending_fess;
  this._inquiry=inquiry;

  }
 private _admission_start_date: any;
 private _admission_end_date: any;
 private _admission_due_date: any;
 private _idproof:any;
 private _leture_start_date: any;
 private _leture_end_date: any;
 private _diccout:number = 0;
 private _fees:number=0;
 private _status:any;
 private _number_of_week:number=0;
 private _pending_fess:number=0;
 private _inquiry:any;
}
