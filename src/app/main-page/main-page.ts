import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { signal } from '@angular/core';
@Component({
  selector: 'app-main-page',
  imports: [],
  templateUrl: './main-page.html',
  styleUrl: './main-page.css',
})
export class MainPage {

  protected readonly title = signal('angular-devops-demo');

  constructor(private router: Router) {

  }

  openAwsLogo() {
    window.open('https://aws.amazon.com/what-is-aws/', '_blank');
  }

  openGitHubActions() {
    window.open('https://github.com/lubaib-hub/angular-devops-demo/actions/workflows/deploy.yml', '_blank');
  }

  goToNew() {
    this.router.navigate(['/new']);
  }
}
