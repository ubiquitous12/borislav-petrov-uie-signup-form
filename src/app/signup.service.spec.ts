import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { SignupService } from './signup.service';

describe('SignupService', () => {
  it('should POST sign-up data to /api/signup', () => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });

    const service = TestBed.inject(SignupService);
    const httpTesting = TestBed.inject(HttpTestingController);

    const formData = {
      firstName: 'Ada',
      lastName: 'Lovelace',
      email: 'ada@example.com',
      // If more fields are needed, example:
      // age: 36,
    };

    service.signup(formData).subscribe((response) => {
      expect(response.success).toBe(true);
    });

    const request = httpTesting.expectOne('/api/signup');
    expect(request.request.method).toBe('POST');
    expect(request.request.body).toEqual(formData);

    request.flush(
      {
        success: true,
        message: 'Sign-up successful',
      },
      { status: 200, statusText: 'OK' },
    );

    httpTesting.verify();
  });
});
