import { Component, Input } from '@angular/core';
import { IPersonalInfo } from 'src/app/shared/interface/personalInfo.interface';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent {
  @Input('personalInfo') personalInfo: IPersonalInfo
}
