import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr'
import { AuthServiceService } from '../service/auth-service.service';
import { inOutAnimation } from '../app.animation';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [inOutAnimation]
})
export class LoginComponent{
  constructor(private builder: FormBuilder, private toastr: ToastrService, private service: AuthServiceService,
    private router: Router) {
    sessionStorage.clear();
  }
  result: any;

  loginform = this.builder.group({
    email: this.builder.control('', Validators.required),
    password: this.builder.control('', Validators.required)
  });

  proceedLogin() {
    if (this.loginform.valid) {
      this.service.GetUserbyEmail(this.loginform.value.email).subscribe((data) => {
        this.result = data;
        if (this.result.password === this.loginform.value.password) {
          sessionStorage.setItem('email', this.result.email)
          sessionStorage.setItem('username',this.result.username);
          this.toastr.success('Successfully logged in!')
          this.router.navigate(['/h/home'])
        } else {
          this.toastr.error('Wrong Password', 'Forgot Password? Contact Admin')
        }
      });
    } else {
      this.toastr.error('Enter Username and Password!')
    }
  }
}