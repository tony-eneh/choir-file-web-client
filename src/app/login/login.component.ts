import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { LoginAuthenticatorService } from '../login-authenticator.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  private username;
  private password;

  private messageArea;

  constructor(private loginAuthenticator: LoginAuthenticatorService, private router: Router){};

  ngOnInit(){
    this.messageArea = document.querySelector('.alert');
  }

  onSubmit = ()=>{
    this.loginAuthenticator.login(this.username, this.password).subscribe((validUser)=>{
      if(!validUser){
        //display login error message
       return this.displayLoginError();
      }

      this.router.navigate(['dashboard'])
      .catch(this.displayNavigationError);
    })
  };

  displayLoginError = ()=>{
    this.messageArea.textContent = 'Username of password is incorrect';
  }

  displayNavigationError= (e)=>{
    this.messageArea.textContent= 'Sorry we temporarily can\'t log you in. Try again shortly';
  }


}
