import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { HeadernavComponent } from './headernav.component';
import { ActivatedRoute } from '@angular/router';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from '../../material.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';
import { NgSelectModule } from '@ng-select/ng-select';
import { SlickCarouselModule } from 'ngx-slick-carousel';


describe('HeadernavComponent', () => {
  let component: HeadernavComponent;
  let fixture: ComponentFixture<HeadernavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[NgxQRCodeModule,NgSelectModule,SlickCarouselModule,FontAwesomeModule,MaterialModule,HttpClientModule, ReactiveFormsModule,FormsModule,RouterModule,BrowserAnimationsModule, HttpClientTestingModule],
      declarations: [ HeadernavComponent ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: new Map([['flightNo', 'ABCDEFGH']])
            }
          }
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeadernavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
