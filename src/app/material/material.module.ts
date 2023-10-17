import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { OverlayModule } from '@angular/cdk/overlay';
import { CdkMenuModule } from '@angular/cdk/menu';
import { DragDropModule } from '@angular/cdk/drag-drop';
import {MatCardModule} from '@angular/material/card';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatMomentDateModule } from "@angular/material-moment-adapter";

const materialModule = [
  MatInputModule,
  MatFormFieldModule,
  MatRippleModule,
  MatButtonModule,
  MatIconModule,
  MatAutocompleteModule,
  OverlayModule,
  CdkMenuModule,
  DragDropModule,
  MatCardModule,
  MatDatepickerModule,
  MatNativeDateModule, 
  MatMomentDateModule, 
];

@NgModule({
  imports: [CommonModule, ...materialModule],
  exports: [...materialModule],
})
export class MaterialModule {}
