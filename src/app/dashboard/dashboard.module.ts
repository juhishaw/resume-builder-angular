import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateEditResumeComponent } from './create-edit-resume/create-edit-resume.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { DynamicFormArrayComponent } from './dynamic-form-array/dynamic-form-array.component';
import { InformationComponent } from './information/information.component';
import { EllipsisPipe } from '../shared/pipes/ellipsis.pipe';
import { LinkTreeDirective } from '../shared/directive/link-tree.directive';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    DashboardComponent,
    CreateEditResumeComponent,
    DragDropComponent,
    DynamicFormArrayComponent,
    InformationComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    SharedModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DashboardModule { }
