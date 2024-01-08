import { Inject, Injectable } from '@angular/core'
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, catchError, throwError } from 'rxjs';
import { environment } from '../../../environments/environments';
import { CommonModule, DOCUMENT } from '@angular/common';
const TOKEN_KEY = 'auth-token';
const TOKEN_KEYR = 'refresh-token';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

@Injectable({providedIn: 'root'})
export class AuthService {
  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  private roleSubject = new BehaviorSubject<string>('');

  isLoggedIn$ = this.isLoggedInSubject.asObservable();
  role$ = this.roleSubject.asObservable();

    private apiServerUrl = environment.apiUserUrl;

    constructor(private http: HttpClient) {
   

    }

 
    updateLoginStatus(isLoggedIn: boolean, role?: string): void {
      this.isLoggedInSubject.next(isLoggedIn);
      if(role){
        this.roleSubject.next(role);
      }
      

    }
    public authenticate(credentials: any): Observable<any> {
      let path = '/api/v1/auth/login';
      return this.http.post(this.apiServerUrl + path, {
        login: credentials.username,
        password: credentials.password
      }, httpOptions).pipe(
        catchError((error:any) => {
          console.log('Error:', error);
          return this.handleError(error, path);
        })
      );
    }
    refreshToken() {
        return this.http.post(this.apiServerUrl  + '/api/v1/auth/refresh-token', { refreshToken: this.getRefreshToken() });
      }
    public handleError(error: any, path: string): Observable<never> {
      let errorMessage = 'An error occurred. Please try again later.';
      
      if (error instanceof HttpErrorResponse) {
        switch (path) {
          case '/api/v1/auth/register':
            if (error.status === 400) {
              errorMessage = 'User with this username already exist! Please try again.';
            } 
            break;

          case '/api/v1/auth/login':
            if (error.status === 400) {
              errorMessage = 'Invalid authentication credentials. Please try again.';
            } else if (error.status === 403) {
              errorMessage = 'You are not authorized to perform this action.';
            } 
            break;

          default:
            errorMessage = 'An error occurred. Please try again later.';
            break;
        }
      } 
      return throwError(() => (errorMessage));
 
    }
    saveToken(token: string): void {
        sessionStorage.removeItem(TOKEN_KEY);
        sessionStorage.setItem(TOKEN_KEY, token);
    }
    saveRefresh(token: string): void {
        sessionStorage.removeItem(TOKEN_KEYR);
        sessionStorage.setItem(TOKEN_KEYR, token);
    }
    getAccessToken(): string | null {
        return sessionStorage.getItem(TOKEN_KEY);
      }
    
    getRefreshToken(): string | null {
        return sessionStorage.getItem(TOKEN_KEYR);
      }
    
      
      logout(): void {
        this.isLoggedInSubject.next(false);
        sessionStorage.removeItem(TOKEN_KEY);

      }
}