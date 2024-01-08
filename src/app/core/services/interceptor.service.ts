import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthService } from './auth.services';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private isRefreshing = false;
  constructor(private authService: AuthService,private router: Router ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
   
      const token = this.authService.getAccessToken();
      
      if (token) {
        request = this.addTokenToRequest(request, token);
      }
      
      return next.handle(request).pipe(
        catchError(error => {
          console.log(error);
          if (error.status === 401 || error.status === 0) {
            return this.handle401Error(request, next);
          }else if(error.status===400){
            this.authService.logout();
            return throwError(() => ('Token refresh failed, redirect to login'));
          }
          
          else if(error.status === 500 && request.url.includes('/auth/login')){
            return throwError(() => ("login failed"));
          } else {
            this.authService.logout();
            return throwError(() => ('Token refresh failed, redirect to login'));
          }
        })
      );
   
  }
  

  private addTokenToRequest(request: HttpRequest<any>, token: string): HttpRequest<any> {
    return request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
  }
  private handle401Error(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (request.url.includes('/auth')) {
      return throwError(() => ("login failed"));
    }
  
    this.isRefreshing = true;
  
    // Save the original request for retry
    const originalRequest = request.clone();
  
    return this.authService.refreshToken().pipe(
      switchMap((newToken: any) => {
        console.log(newToken);
        if (newToken) {
          console.log(newToken);
          this.isRefreshing = false;
          this.authService.saveToken(newToken.accessToken);
          this.authService.saveRefresh(newToken.refreshToken);
          request = this.addTokenToRequest(originalRequest, newToken.accessToken);
  
          // Retry the original request with the new token
          return next.handle(request).pipe(
            catchError((error) => {
              this.isRefreshing = false;
              this.authService.logout();
              return throwError(() => (error));
            })
          );
        } else {
          this.isRefreshing = false;
          this.authService.logout();
          return throwError(() => ('Token refresh failed, redirect to login'));
        }
      }),
      catchError((error) => {
        
        this.isRefreshing = false;
        this.authService.logout();
        this.router.navigate(['/auth/signin']);
        return throwError(() => (error));
        
      })
    );
  }
  

  
  
}
