import {AuthService} from '../api/auth.service';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {Injectable, Injector} from '@angular/core';
import {Router} from '@angular/router';
import {catchError} from 'rxjs/internal/operators/catchError';
import {Store} from '@ngrx/store';
import {AuthState} from '../../ngrx/states/auth.states';

@Injectable()
export class TokenInterceptor implements HttpInterceptor{

  private authService: AuthService;

  constructor(private injector: Injector) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.authService = this.injector.get(AuthService);
    const token: string = this.authService.getToken();
    req = req.clone({
      setHeaders: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });
    return next.handle(req);
  }
}

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private router: Router, private store: Store<AuthState>) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(

      // tap((response: any) =>{
      //   if(response instanceof HttpErrorResponse && response.status === 401) {
      //     // this.store.dispatch(new LogOut);
      //     localStorage.removeItem('token');
      //     this.router.navigateByUrl("/login");
      //   }
      // })

      catchError((response: any) => {
        if(response instanceof HttpErrorResponse && response.status === 401) {
          // this.store.dispatch(new LogOut);
          localStorage.removeItem('token');
          this.router.navigateByUrl("/login");
        }
        return throwError(response);
      })
    );
  }

}
