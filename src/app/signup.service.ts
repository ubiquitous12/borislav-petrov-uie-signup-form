import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

export interface SignupRequest {
  firstName: string;
  lastName: string;
  email: string;
  // If more fields are needed, example:
  // age: number;
}

export interface SignupResponse {
  success: boolean;
  message: string;
}

@Injectable({
  providedIn: 'root',
})
export class SignupService {
  private readonly http = inject(HttpClient);

  signup(data: SignupRequest): Observable<SignupResponse> {
    return this.http.post<SignupResponse>('/api/signup', data);
  }
}
