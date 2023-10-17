import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterDataComponent } from './components/filter-data/filter-data.component';
import { MaterialModule } from '../material/material.module';
import { LinkTreeDirective } from './directive/link-tree.directive';
import { EllipsisPipe } from './pipes/ellipsis.pipe';
import { FilterPipe } from './pipes/filter.pipe';



@NgModule({
  declarations: [
    FilterDataComponent,
    EllipsisPipe,
    FilterPipe,
    LinkTreeDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  exports: [
    FilterDataComponent,
    EllipsisPipe,
    FilterPipe,
    LinkTreeDirective
  ]
})
export class SharedModule { }
