import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopToolBarComponent } from './top-tool-bar/top-tool-bar.component';
import { TransactionHistoryComponent } from './transaction-history/transaction-history.component';
import { UserDataComponent } from './user-data/user-data.component';
import { BeginTransactionComponent } from './begin-transaction/begin-transaction.component';
import { KeypadComponent } from './keypad/keypad.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { OverlayComponent } from './overlay/overlay.component';
import { AppStateService } from './shared/app-state';
import { ScrollingModule } from "@angular/cdk/scrolling";
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { MoneyAppService } from './services/money-app.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './services/user.service';
import { AppRoutingModule } from './app-routing.module';
import { UserAccountInfoComponent } from './user-account-info/user-account-info.component';
import { UserPortraitComponent } from './user-portrait/user-portrait.component';
import { DialogComponent } from './dialog/dialog.component';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    AppComponent,
    TopToolBarComponent,
    TransactionHistoryComponent,
    UserDataComponent,
    BeginTransactionComponent,
    KeypadComponent,
    OverlayComponent,
    LoginComponent,
    UserAccountInfoComponent,
    UserPortraitComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatIconModule,
    ScrollingModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    MatDialogModule
  ],
  providers: [AppStateService, MoneyAppService, HttpClient, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
