import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form-array',
  templateUrl: './dynamic-form-array.component.html',
  styleUrls: ['./dynamic-form-array.component.scss']
})
export class DynamicFormArrayComponent implements OnInit {
  public  empForm: FormGroup;
  public formValue;

  constructor(private _fb: FormBuilder) {}

  ngOnInit(): void {
    this.initEmpForm();
  }

  public initEmpForm():void {
    this.empForm = this._fb.group({
      employees: this._fb.array([])
    });
  }

  public employees(): FormArray {
    return this.empForm.get('employees') as FormArray;
  }

  public newEmployee(): FormGroup {
    return this._fb.group({
      company: '',
      location: '',
      skills: this._fb.array([])
    });
  }

  public addEmployee() {
    this.employees().push(this.newEmployee());
  }

  public removeEmployee(empIndex: number) {
    this.employees().removeAt(empIndex);
  }

  public employeeSkills(empIndex: number): FormArray {
    return this.employees()
      .at(empIndex)
      .get('skills') as FormArray;
  }

  public newSkill(): FormGroup {
    return this._fb.group({
      roles:'',
      fromDate: '',
      toDate: ''
    });
  }

  public addEmployeeSkill(empIndex: number) {
    this.employeeSkills(empIndex).push(this.newSkill());
  }

  public removeEmployeeSkill(empIndex: number, skillIndex: number) {
    this.employeeSkills(empIndex).removeAt(skillIndex);
  }

  public onSubmit() {
    this.formValue = this.empForm.value;
  }

  getSubTaskWrapperId(prefix: string, taskIndex: number, subTaskIndex?: number) {
    return prefix + taskIndex + (subTaskIndex !== undefined ? ('-' + subTaskIndex) : '');
}
}
