import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  username;
  password;
  rememberme;
  token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJtZXNzYWdlIjoiSldUIFJ1bGVzISIsImlhdCI6MTQ1OTQ0ODExOSwiZXhwIjoxNDU5NDU0NTE5fQ.-yIVBD5b73C75osbmwwshQNRC7frWUYrqaTjTpza2y4"

  constructor(
    public router: Router,
  ) { }

  ngOnInit() {
    if (localStorage.getItem('token') || sessionStorage.getItem('token')) {
      this.router.navigate(['/live'])
    }
  }
  ngOnDestroy() {
  }

  onLogin() {
    if (this.rememberme) {
      if ((this.username == "admin") && (this.password == "1234")) {
        setTimeout(() => this.router.navigate(['/']), 20);
        localStorage.setItem("token", this.token);
        let username = "admin"
        localStorage.setItem("user.data", username);
      }
    } else {
      if ((this.username == "admin") && (this.password == "1234")) {
        setTimeout(() => this.router.navigate(['/']), 20);
        sessionStorage.setItem("token", this.token);
        let username = "admin"
        sessionStorage.setItem("user.data", username);
      }
    }
  }
}
