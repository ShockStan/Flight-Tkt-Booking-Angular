import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthServiceService } from '../service/auth-service.service';
import { inOutAnimation } from '../app.animation';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  animations: [inOutAnimation]
})
export class SignupComponent {

  constructor(private builder: FormBuilder, private service: AuthServiceService, private router: Router,
    private toastr: ToastrService) { }

    

    signupform = this.builder.group({
      username: this.builder.control('', Validators.compose([Validators.required, Validators.maxLength(10), Validators.minLength(4)])),
      email: this.builder.control('', Validators.compose([Validators.required, Validators.email])),
      password: this.builder.control('', Validators.compose([Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]))
    });
    un:any = this.signupform.value.username?.length;
    
    
    proceedSignup(){
      if(this.signupform.valid){
        this.service.RegisterUser(this.signupform.value).subscribe(result => {
          this.toastr.success('Signed up successfully');
          this.router.navigate(['login']);
        });
      } else {
        this.toastr.warning('Enter Valid Credentials');
            }
    }
}