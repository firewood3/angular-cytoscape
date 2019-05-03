import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user';
import {LoginService} from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = new User();
  errorMessage: string | null;

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  onSubmit(): void {
    const payload = {
      id: this.user.id,
      password: this.user.password
    };
    // this.store.dispatch(new LogIn(payload));

    this.loginService.login(this.user.id, this.user.password)
      .subscribe({
        next: value => {
          console.log(value);
        },
        error: err => {
          console.log("error1");
          console.log(err);
        }
      });
  }
}
