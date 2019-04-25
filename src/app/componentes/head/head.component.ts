import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../servicios/login.service';
import { Router } from '@angular/router';

@Component({
  selector: "app-head",
  templateUrl: "./head.component.html",
  styleUrls: ["./head.component.css"]
})
export class HeadComponent implements OnInit {
  isLogged: boolean;
  userLogin: string;

  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit() {
    this.loginService.getAut().subscribe(auth => {
      if (auth) {
        this.isLogged = true;
        this.userLogin = auth.email;
      } else {
        this.isLogged = false;
      }
    });
  }

  logout(){

    this.loginService.logout();
    this.isLogged = false;
    this.router.navigate(['/login']);

  }
}
