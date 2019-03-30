import { PagesComponent } from './pages.component';
// Routes
import { PAGES_ROUTES } from './pages.routes';
// Modulies
import { NgModule } from '@angular/core';
import { ErrorModule } from '../error/error.module';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPermissionsModule } from 'ngx-permissions';



// Component
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
    ],
    exports: [
        DashboardComponent,
        PagesComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        ErrorModule,
        PAGES_ROUTES,
        DataTablesModule,
        FormsModule,
        ReactiveFormsModule,
        NgxPermissionsModule.forRoot()
    ]
})

export class PagesModule { }
