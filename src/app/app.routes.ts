import { Routes } from '@angular/router';
import { New } from './new/new';
import { MainPage } from './main-page/main-page';

export const routes: Routes = [
    { path: 'new', component: New },
    { path: '', component: MainPage }
];
