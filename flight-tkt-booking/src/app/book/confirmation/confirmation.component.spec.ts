import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { MaterialModule } from '../../../material.module';
import { ActivatedRoute } from '@angular/router';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfirmationComponent } from './confirmation.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BsModalService, ModalModule } from 'ngx-bootstrap/modal';

describe('ConfirmationComponent', () => {
  let component: ConfirmationComponent;
  let fixture: ComponentFixture<ConfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[RouterModule,ModalModule.forRoot(), ReactiveFormsModule, FormsModule, HttpClientModule, HttpClientTestingModule, ToastrModule.forRoot(),MaterialModule, BrowserAnimationsModule],
      declarations: [ ConfirmationComponent ],
      providers: [BsModalService,
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

    fixture = TestBed.createComponent(ConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
