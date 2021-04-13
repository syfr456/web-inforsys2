import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router}  from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  email = "";
  password = "";
  message = '';
  errorMessage = '';
  error: {name:string, message:string} = {name : '', message : ''};
 
  

  constructor(private authservice: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  clearErrorMessage()
  {
    this.errorMessage = '';
    this.error = {name : '', message:''};
  }
register()
{
  this.clearErrorMessage();
  if(this.validateForm(this.email,this.password))
  {
    this.authservice.registerWithEmail(this.email, this.password).then(() => {
      this.message = "you are register with data on firebase"
      // this.router.navigate(['/userinfo'])
    }).catch(_error => {
      this.error = _error
      this.router.navigate(['/register'])
    })
  }
}
validateForm(email, password)
{
  if(email.length === 0)
  {
    this.errorMessage = "Please enter email";
    return false;
  }

   if(password.length === 0)
  {
    this.errorMessage = "Please enter password";
    return false;
  }

  {
    if (password.length < 6)
    {
      this.errorMessage = "password should be at least 6 char";
      return false;
    }

  {
    this.errorMessage = "";
    return true;
  }
  }
}
  
}
