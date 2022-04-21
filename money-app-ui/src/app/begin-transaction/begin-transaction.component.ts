import { Component, Input, OnInit } from '@angular/core';
import { MoneyAppService, SearchUserRequest } from '../services/money-app.service';
import { PortraitSettings } from '../user-portrait/user-portrait.component';
import {MatDialog} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { TransactionTarget, UserService } from '../services/user.service';

@Component({
  selector: 'app-begin-transaction',
  templateUrl: './begin-transaction.component.html',
  styleUrls: ['./begin-transaction.component.css']
})
export class BeginTransactionComponent implements OnInit {

  @Input() transactionAmount: number = 0;
  search: string = '';
  users!: SearchUserRequest[];

  portraitSettings: PortraitSettings = {
    height: '50px',
    width: '50px',
    fontSize: '25px'
  }

  constructor(
    public client: MoneyAppService,
    public dialog: MatDialog,
    public userService: UserService
  ) { }

  ngOnInit(): void {
  }

  searchUser(): void {
    if (this.search !== '') {
      this.client.searchUser(this.search).subscribe({
        error: (error) => {
          console.log(error);
        },
        next: (response) => {
          this.users = response;
        },
      });
    }
  }

  selectUser(user: SearchUserRequest): void {
    const target: TransactionTarget = {
      username: user.username,
      portraitColor: user.portraitColor,
      transactionAmount: this.transactionAmount
    }
    
    this.dialog.open(DialogComponent);
    this.userService.setTransactionTarget(target);
  }
}

