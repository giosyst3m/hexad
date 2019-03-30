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

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

// Component
import { DashboardComponent } from './dashboard/dashboard.component';
import { ItemComponent } from './item/item.component';


@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        ItemComponent,
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
        NgxPermissionsModule.forRoot(),
        NgbModule
    ]
})

export class PagesModule { }
