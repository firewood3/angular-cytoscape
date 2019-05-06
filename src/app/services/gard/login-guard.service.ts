import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {AuthService} from '../api/auth.service';

@Injectable()
export class LoginGuardService implements CanActivate {
  constructor(public auth: AuthService,
              public router: Router) {
  }

  canActivate(): boolean {
    if(this.auth.getToken()!==null) {
      this.router.navigateByUrl('/workspace');
      return false;
    }
    return true;
  }
}
