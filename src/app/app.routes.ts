import { E404Component } from './error/e404/e404.component';
import { Routes, RouterModule  } from '@angular/router';

const appRoutes: Routes = [
    {path: '**', component: E404Component, pathMatch: 'full' }
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes, { useHash: true});
