import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { AuthServiceService } from './auth-service.service';

describe('AuthServiceService', () => {
  let service: AuthServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AuthServiceService],
    });
    service = TestBed.inject(AuthServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
