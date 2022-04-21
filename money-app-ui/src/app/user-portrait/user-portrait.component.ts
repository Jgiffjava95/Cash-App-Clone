import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

export interface PortraitSettings {
  height: string,
  width: string,
  fontSize: string
}

@Component({
  selector: 'app-user-portrait',
  templateUrl: './user-portrait.component.html',
  styleUrls: ['./user-portrait.component.css']
})
export class UserPortraitComponent implements OnInit {

  @Input() nameForPortraitLetter!: string;
  @Input() portraitColor!: string;
  @Input() portraitSettings!: PortraitSettings;

  constructor(public userService: UserService) { }

  ngOnInit(): void {
  }

  getfirstLetterOfUsername(): string {
    return this.nameForPortraitLetter[0].toUpperCase();
}

}
