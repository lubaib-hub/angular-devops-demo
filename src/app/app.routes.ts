import { Routes } from '@angular/router';
import { New } from './new/new';
import { MainPage } from './main-page/main-page';
import { Ec2 } from './ec2/ec2';
import { Test } from './test/test';

export const routes: Routes = [
    { path: 'new', component: New },
    { path: '', component: MainPage },
    { path: 'ec2', component: Ec2 },
    { path: 'test', component: Test },
];
