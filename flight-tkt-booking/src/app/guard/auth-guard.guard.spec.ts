import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuardGuard } from './auth-guard.guard';
import { ToastrModule } from 'ngx-toastr';

describe('AuthGuardGuard', () => {
  let guard: AuthGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule, HttpClientTestingModule, ToastrModule.forRoot()]
    });
    guard = TestBed.inject(AuthGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
