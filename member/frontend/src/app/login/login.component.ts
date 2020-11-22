import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public username: string;
  public password: string;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.username = "admin";
    this.password = "admin";
  }

  login() {
    if(this.username == "admin" && this.password == "admin") {
      this.router.navigate(['members']);
    } else {
      alert("Sorry! Incorrect username or password.");
    }
  }



}
