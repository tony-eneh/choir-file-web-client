import {Component} from '@angular/core';
import { Router } from '@angular/router';
import { SignupService } from '../signup.service';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  private firstname='';
  private lastname='';
  private sex='';
  private email='';
  private phoneNo= '';
  private username='';
  private password='';
  private messageArea;

  constructor(private signupService: SignupService, private router: Router){}

  ngOnInit = ()=>{
    this.messageArea = document.querySelector('.alert');
  }

  onSubmit(e){

    const newUser = {firstname: this.firstname,
      lastname: this.lastname,
      sex: this.sex,
      email: this.email,
      phoneNo: this.phoneNo,
      username: this.username,
      password: this.password
    }

    //check if username already exists
    //display error if yes
    //register user if no
    this.signupService.signup(newUser).subscribe((registeredUserId)=>{
        //if successfully registered redirect to dashboard
        if(registeredUserId){
            this.router.navigate(['/dashboard'])
            //if router couldn't navigate display navigation error
            .catch(this.displayNavigationError);
        }else{
            //else display registration error
            this.displayRegistrationError();
        }

    })
  };

  displayRegistrationError(){
    this.messageArea.textContent = 'Username of password is incorrect';
  }

  displayNavigationError(){
    this.messageArea.textContent= 'Sorry we temporarily can\'t register you. Try again shortly';
  }
}
