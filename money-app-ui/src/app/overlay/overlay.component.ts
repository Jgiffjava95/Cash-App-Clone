import { Component, OnInit } from '@angular/core';
import { AppStateService } from '../shared/app-state';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.css']
})
export class OverlayComponent implements OnInit {

  constructor(public appState: AppStateService) { }

  ngOnInit(): void {
  }

  close(): void {
    this.appState.setIsOverlayVisible(false);
  }

}
