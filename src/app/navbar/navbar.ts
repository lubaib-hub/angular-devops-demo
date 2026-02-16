import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})

export class Navbar {
  constructor(private router: Router) {

  }

  new() {
    this.router.navigate(['/new']);
  }

  main() {
    this.router.navigate(['/']);
  }

  ec2() {
    this.router.navigate(['/ec2']);
  }

  test() {
    this.router.navigate(['/test']);
  
}
