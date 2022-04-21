import { Component, ElementRef, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { AppStateService } from '../shared/app-state';

@Component({
  selector: 'app-keypad',
  templateUrl: './keypad.component.html',
  styleUrls: ['./keypad.component.css']
})
export class KeypadComponent implements OnInit {

  currentValue: string = '0';

  @ViewChild('transactionScreen') transactionScreen!: TemplateRef<any>;

  constructor(public appState: AppStateService) { }

  ngOnInit(): void {
  }

  tenKeyInput(input: number | string): void {
    if (this.currentValue === '0') {
      this.currentValue = '';
    }
    switch (input) {
      case '.':
        if (this.currentValue !== '') {
          let addDot = true;
          for (let i = 0; i < this.currentValue.length; i++) {
            if (this.currentValue[i] === '.') {
              addDot = false;
            }
          }
          if (addDot) {
            this.currentValue = `${this.currentValue}.`
          }
        } else {
          this.currentValue = '0';
        }
        break;
      case 'Del':
        this.currentValue = this.currentValue.substring(0, this.currentValue.length - 1);
        if (this.currentValue === '') {
          this.currentValue = '0';
        }
        break;
      default:
        this.currentValue = this.currentValue + input;
        break;
    }

  }

  beginTransaction(): void {
    if (this.currentValue !== '0') {
      this.appState.setIsOverlayVisible(true);
      this.appState.setOverlayTemplate(this.transactionScreen);
    } else {
      console.log('Cannot beign transaction with 0')
    }
  }

  currentValueToNumber(): number {
    const tempNum: number =+ this.currentValue;
    return tempNum;
  }

}
