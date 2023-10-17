import { Component, OnInit } from '@angular/core';
import { AuthenticatorService } from 'src/app/core/services/authenticator.service';
import { IPersonalInfo } from 'src/app/shared/interface/personalInfo.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public personalInfo: IPersonalInfo;

  constructor(private _auth: AuthenticatorService) {
    this._auth.test()
  }

  ngOnInit(): void {
      
  }

  public getPersonalInfo(data: IPersonalInfo): void {
    this.personalInfo = data
  }
}
