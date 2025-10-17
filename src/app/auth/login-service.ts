import { Injectable } from '@angular/core';
import { environment } from '../environment/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface AuthResponse {
  id: number;
  username: string;
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  private apiUrl = environment.apiUrl + '/auth/login';

  constructor(private http: HttpClient){}

  login(credentials: {username: string, password: string}): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(this.apiUrl, credentials);
  }
}
