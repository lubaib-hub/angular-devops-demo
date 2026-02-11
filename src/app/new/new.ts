import { Component } from '@angular/core';

@Component({
  selector: 'app-new',
  imports: [],
  templateUrl: './new.html',
  styleUrl: './new.css',
})
export class New {


  yamlContent: string = `
name: Deploy Angular App to EC2

on:
  push:
    branches:
      - master
      - develop

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20

      - name: Install dependencies
        run: npm install

      - name: Build Angular
        run: npm run build -- --configuration production

      - name: Copy build to EC2
        uses: appleboy/scp-action@v0.1.7
        with:
          host: \${{ secrets.EC2_HOST }}
          username: ubuntu
          key: \${{ secrets.EC2_KEY }}
          source: "dist/*/browser/*"
          target: "/home/ubuntu/angular-dist"
          strip_components: 3
          rm: true
          overwrite: true

      - name: Deploy to Nginx
        uses: appleboy/ssh-action@v1.0.3
        with:
          host: \${{ secrets.EC2_HOST }}
          username: ubuntu
          key: \${{ secrets.EC2_KEY }}
          script: |
            sudo rm -rf /var/www/html/*
            sudo cp -r /home/ubuntu/angular-dist/* /var/www/html/
            sudo chown -R www-data:www-data /var/www/html
            sudo chmod -R 755 /var/www/html
            sudo systemctl restart nginx
`;

}
