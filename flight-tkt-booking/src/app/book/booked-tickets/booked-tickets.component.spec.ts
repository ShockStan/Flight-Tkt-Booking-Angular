import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { MaterialModule } from '../../../material.module';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BookedTicketsComponent } from './booked-tickets.component';

describe('BookedTicketsComponent', () => {
  let component: BookedTicketsComponent;
  let fixture: ComponentFixture<BookedTicketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[RouterModule, ToastrModule.forRoot(), HttpClientModule, HttpClientTestingModule, MaterialModule, BrowserAnimationsModule],
      declarations: [ BookedTicketsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookedTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
