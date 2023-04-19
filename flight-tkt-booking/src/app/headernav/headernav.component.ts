import { BreakpointObserver } from '@angular/cdk/layout';
import { AfterContentChecked, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Location } from '@angular/common';
import { AuthServiceService } from '../service/auth-service.service';
import { faGithub, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { socialMedia } from 'src/environment/environment';

@Component({
  selector: 'app-headernav',
  templateUrl: './headernav.component.html',
  styleUrls: ['./headernav.component.scss']
})
export class HeadernavComponent implements OnInit, AfterContentChecked{

  component: any;

  logout(): void {
    const navigationExtras: NavigationExtras = { state: { reload: true } };
    this.router.navigate(['/login'], navigationExtras);
  }

  constructor(private observer: BreakpointObserver,private router: Router,private service: AuthServiceService, private location: Location, private route: ActivatedRoute, private cdref: ChangeDetectorRef) {
    
  }
  ngAfterContentChecked(): void {
    this.service.navTitle$.subscribe(value=>{
      this.component = value;
    });
    this.cdref.detectChanges();
  }

  githubIcon = faGithub;
  igIcon = faInstagram;
  twitterIcon = faTwitter;
  liIcon = faLinkedin;

  socialMedia = socialMedia;
  ngOnInit(): void {
    
  }

  back() {
    this.service.back();
  }
  
}