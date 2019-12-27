import { TestBed } from '@angular/core/testing';

import { LoginAuthenticatorService } from './login-authenticator.service';

describe('LoginAuthenticatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoginAuthenticatorService = TestBed.get(LoginAuthenticatorService);
    expect(service).toBeTruthy();
  });
});
