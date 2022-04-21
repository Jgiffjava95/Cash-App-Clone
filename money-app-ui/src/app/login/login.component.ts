import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MoneyAppService } from '../services/money-app.service';
import { UserLoginRequest } from '../services/money-app.service';
import { UserService } from '../services/user.service';

type MainButtonLabels = "Login" | "Create Account" | "Recover Account";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userLoggingIn = true;
  userCreatingAccount = false;
  userRecoveringAccount = false;

  test: any;

  buttonLabel: MainButtonLabels = "Login";

  userData: UserLoginRequest = {
    username: '',
    password: ''
  };

  constructor(
    private maService: MoneyAppService,
    private userService: UserService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  mainButtonClicked(): void {
    if (this.userLoggingIn) {
      this.maService.logginUser(this.userData).subscribe({
        error: (error) => {
          console.log(error);
        },
        next: (response) => {
          this.userService.setLoggedInUser(JSON.parse(response.body));
          this.router.navigateByUrl('home');
        },
      });
    } 
    else if(this.userCreatingAccount) {
      console.log('Creating Account');
    }
    else if(this.userRecoveringAccount) {
      console.log('Recovering Account');
    }
  }


  createAccount(): void {
    this.userLoggingIn = false;
    this.userCreatingAccount = true;
    this.userRecoveringAccount = false;
    this.buttonLabel = 'Create Account';
  }

  recoverAccount(): void {
    this.userLoggingIn = false;
    this.userCreatingAccount = false;
    this.userRecoveringAccount = true;
    this.buttonLabel = 'Recover Account';
  }

  CancelCurrentTask(): void {
    this.userLoggingIn = true;
    this.userCreatingAccount = false;
    this.userRecoveringAccount = false;
    this.buttonLabel = 'Login';
  }

}
