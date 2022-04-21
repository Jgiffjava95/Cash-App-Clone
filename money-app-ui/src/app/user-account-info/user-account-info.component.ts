import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { PortraitSettings } from '../user-portrait/user-portrait.component';

@Component({
  selector: 'app-user-account-info',
  templateUrl: './user-account-info.component.html',
  styleUrls: ['./user-account-info.component.css']
})
export class UserAccountInfoComponent implements OnInit {

  portraitSettings: PortraitSettings = {
    height: '125px',
    width: '125px',
    fontSize: '50px'
  }
  
  constructor(
    public userService: UserService
  ) { }

  ngOnInit(): void {
  }

}
