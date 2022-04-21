import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { TransactionRequest, TransactionType } from '../services/money-app.service';
import { UserService } from '../services/user.service';
import { PortraitSettings } from '../user-portrait/user-portrait.component';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {


  transactionType!: TransactionType;
  
  portraitSettings: PortraitSettings = {
    height: '50px',
    width: '50px',
    fontSize: '25px'
  }

  constructor(
    public userService: UserService,
    public renderer: Renderer2
    ) { }

  ngOnInit(): void {
    this.userService.loggedInUser.portraitColor
  }

  setTransactionType(type: TransactionType): void {
    this.transactionType = type;

  }

  submit(): void {
    const newTransaction: TransactionRequest = {
      sender: this.userService.loggedInUser.username,
      receiver: this.userService.transactionTarget.username,
      amount: this.userService.transactionTarget.transactionAmount,
      type: this.transactionType
    }
  }

}
