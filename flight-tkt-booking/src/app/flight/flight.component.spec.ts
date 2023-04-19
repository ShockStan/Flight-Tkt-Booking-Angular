import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FlightComponent } from './flight.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../../material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('FlightComponent', () => {
  let component: FlightComponent;
  let fixture: ComponentFixture<FlightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientModule, HttpClientTestingModule,MaterialModule, BrowserAnimationsModule],
      declarations: [ FlightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
