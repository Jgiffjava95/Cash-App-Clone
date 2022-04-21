import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { UserService } from '../services/user.service';
import { AppStateService } from '../shared/app-state';

@Component({
  selector: 'app-top-tool-bar',
  templateUrl: './top-tool-bar.component.html',
  styleUrls: ['./top-tool-bar.component.css']
})
export class TopToolBarComponent implements OnInit {

  @ViewChild('transactionHistory') transactionHistory!: TemplateRef<any>;
  @ViewChild('userAccountInfo') userAccountInfo!: TemplateRef<any>;

  constructor(
    public appState: AppStateService,
    public userService: UserService
    ) { }

  ngOnInit(): void {
  }

  displayAccountInfo(): void {
    this.appState.setOverlayTemplate(this.userAccountInfo);
    this.appState.setIsOverlayVisible(true);
  }

  displayTransactionHistory(): void {
    this.appState.setOverlayTemplate(this.transactionHistory);
    this.appState.setIsOverlayVisible(true);
  }

  displayRequests(): void {
    console.log('requests');
  }

  displaySentRequests(): void {
    console.log('sent requests');
  }

}
