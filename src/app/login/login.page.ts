import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private route: Router
  ) { }

  ngOnInit() {
  }

  homePage(){
    this.route.navigate(['home']) 
   }

   forgotPage(){
    this.route.navigate(['forgotpassword']) 
   }

   signUpPage(){
    this.route.navigate(['signup']) 
   }

   loginPage(){
    this.route.navigate(['login']) 
   }

}
