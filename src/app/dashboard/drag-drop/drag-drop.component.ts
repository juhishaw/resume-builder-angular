import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { AuthenticatorService } from 'src/app/core/services/authenticator.service';

@Component({
  selector: 'app-drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.scss']
})
export class DragDropComponent implements OnInit {
  public required = ['HTML', 'CSS', 'Javascript', 'Angular', 'Bootstrap', 'Mobile Responsive', 'Platform Compatiblity', 'Jest/Jasmine'];
  public excel = [];
  public formValue: string[];
  public searchBy;


  constructor(private _auth: AuthenticatorService) {
    this._auth.test()
  }

  ngOnInit(): void {
      
  }

  drop(event: CdkDragDrop<string[]> | any) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  public onSubmit(): void {
    this.formValue = this.excel
  }

  public getOutput(event: string): void {
    this.searchBy = event;
  }
}
