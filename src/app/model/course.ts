export class Course {
  get courseName(): string {
    return this._courseName;
  }

  set courseName(value: string) {
    this._courseName = value;
  }

  get courseOverview(): string {
    return this._courseOverview;
  }

  set courseOverview(value: string) {
    this._courseOverview = value;
  }

  get courseDescription(): string {
    return this._courseDescription;
  }

  set courseDescription(value: string) {
    this._courseDescription = value;
  }

  get courseDuration(): number{
    return this._courseDuration;
  }

  set courseDuration(value: number) {
    this._courseDuration = value;
  }

  get courseFees(): number {
    return this._courseFees;
  }

  set courseFees(value: number) {
    this._courseFees = value;
  }

  get courseStatus(): string {
    return this._courseStatus;
  }

  set courseStatus(value: string) {
    this._courseStatus = value;
  }

  get courseUsers(): string {
    return this._courseUsers;
  }

  set courseUsers(value: string) {
    this._courseUsers = value;
  }
constructor(courseName: string, courseOverview: string, courseDescription: string,courseDuration: number, courseFees: number, courseStatus: string,courseUsers: string) {
    this._courseName = courseName;
    this._courseOverview = courseOverview;
    this._courseDescription = courseDescription;
    this._courseDuration = courseDuration;
    this._courseFees = courseFees;
    this._courseStatus = courseStatus;
    this._courseUsers=courseUsers;

  }
  private _courseName: string='';
private _courseOverview: string='';
private _courseDescription: string='';
private _courseDuration: number=0;
private _courseFees:number=0;
private _courseStatus:string='';
private _courseUsers:string='';


}
