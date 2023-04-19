import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthServiceService } from '../service/auth-service.service';
import { socialMedia } from 'src/environment/environment';

import { faGithub, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private service: AuthServiceService, private toastr: ToastrService, private router: Router) {

  }
  githubIcon = faGithub;
  igIcon = faInstagram;
  twitterIcon = faTwitter;
  liIcon = faLinkedin;

  socialMedia = socialMedia;




  username: any;
  email: any;
  msg: any;

  ngOnInit(): void {
    this.service.setnavTitle('CONTACT');
    this.username = sessionStorage.getItem('username');
    this.email = sessionStorage.getItem('email');
  }

  post() {
    const message = {
      username: this.username,
      email: this.email,
      msg: this.msg
    };
    const jsonData = JSON.stringify(message);
    this.service.sendMsg(jsonData).subscribe(msg=>
      {this.toastr.success('Message posted');});
    this.router.navigateByUrl('/h/home'); 
  }

}
