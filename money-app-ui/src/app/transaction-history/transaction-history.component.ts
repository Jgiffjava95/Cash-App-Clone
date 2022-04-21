import { Component, OnInit } from '@angular/core';
import { KnownUser, Transaction, TransactionState } from '../services/money-app.service';
import { UserService } from '../services/user.service';
import { PortraitSettings } from '../user-portrait/user-portrait.component';

@Component({
  selector: 'app-transaction-history',
  templateUrl: './transaction-history.component.html',
  styleUrls: ['./transaction-history.component.css']
})
export class TransactionHistoryComponent implements OnInit {

  portraitSettings: PortraitSettings = {
    height: '50px',
    width: '50px',
    fontSize: '25px'
  }

  constructor(public userService: UserService) { }

  ngOnInit(): void {
  }

  checkTransactionState(state: number): string {
    return state === TransactionState.Accepted ? 'done' : 'close';
  }

  stateColor(state: number): string {
    return state === TransactionState.Accepted ? 'green' : 'red';
  }

}
