import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-devops-demo');

  openAwsLogo() {
    window.open('https://aws.amazon.com/what-is-aws/', '_blank');
  }

  openGitHubActions() {
    window.open('https://github.com/lubaib-hub/angular-devops-demo/actions/workflows/deploy.yml', '_blank');
  }
}
