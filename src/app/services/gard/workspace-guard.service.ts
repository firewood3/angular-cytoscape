import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {AuthService} from '../api/auth.service';

@Injectable()
export class WorkspaceGuardService implements CanActivate {

  constructor(public auth: AuthService,
              public router: Router) { }

  canActivate(): boolean {
    if(!this.auth.getToken()) {
      console.log('canActive - login');
      this.router.navigateByUrl('/login');
      return false;
    }
    console.log('canActive - workspace');
    return true;
  }
}
