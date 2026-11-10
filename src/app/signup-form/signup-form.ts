import { Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SignupService } from '../signup.service';

@Component({
  selector: 'app-signup-form',
  imports: [ReactiveFormsModule],
  templateUrl: './signup-form.html',
  styleUrl: './signup-form.css',
})
export class SignupForm {
  private readonly signupService = inject(SignupService);

  readonly isSubmitting = signal(false);
  readonly successMessage = signal<string | null>(null);
  readonly formError = signal<string | null>(null);

  readonly signupForm = new FormGroup({
    firstName: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    lastName: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    email: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    // If more fields are needed, example:
    // age: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
  });

  onSubmit(): void {
    if (this.isSubmitting()) {
      return;
    }

    const { firstName, lastName, email } = this.signupForm.getRawValue();
    // If more fields are needed, example:
    // const { firstName, lastName, email, age } = this.signupForm.getRawValue();

    const payload = {
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      email: email.trim(),
      // age: Number(age),
    };

    if (!payload.firstName || !payload.lastName || !payload.email) {
      this.successMessage.set(null);
      this.formError.set('To sign up you need to fill in all the fields.');
      return;
    }

    this.formError.set(null);
    this.successMessage.set(null);
    this.isSubmitting.set(true);

    this.signupService.signup(payload).subscribe({
      next: (response) => {
        this.isSubmitting.set(false);
        this.successMessage.set(response.message);
        this.signupForm.reset();
      },
      error: () => {
        this.isSubmitting.set(false);
      },
    });
  }
}
