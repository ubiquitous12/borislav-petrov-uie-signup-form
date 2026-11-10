import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { SignupForm } from './signup-form';

describe('SignupForm', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignupForm],
      providers: [provideHttpClient(), provideHttpClientTesting()],
    }).compileComponents();
  });

  it('should create the component successfully', () => {
    const fixture = TestBed.createComponent(SignupForm);
    expect(fixture.componentInstance).toBeTruthy();
  });
});
