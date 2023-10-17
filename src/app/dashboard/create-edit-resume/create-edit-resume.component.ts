import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IPersonalInfo } from 'src/app/shared/interface/personalInfo.interface';


@Component({
  selector: 'app-create-edit-resume',
  templateUrl: './create-edit-resume.component.html',
  styleUrls: ['./create-edit-resume.component.scss']
})
export class CreateEditResumeComponent implements OnInit{
  public createEditFormGroup: FormGroup;
  public formValue: IPersonalInfo;

  @Output() getPersonalInfo: EventEmitter<IPersonalInfo> = new EventEmitter();

  constructor(private _fb: FormBuilder) {}

  ngOnInit(): void {
      this.setcreateEditForm();
  }

  private setcreateEditForm(): void {
    this.createEditFormGroup = this._fb.group({
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      email: ['', [Validators.email, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      contact: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      summary: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      postalCode: ['', Validators.required],
    })
  }

  get formControl(){  
    return this.createEditFormGroup.controls;  
  }  

  public onSubmit() {
   this.formValue = this.createEditFormGroup.value;
    this.getPersonalInfo.emit(this.formValue);
  }

}
