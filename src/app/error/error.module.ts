import { NgModule } from '@angular/core';

import { E500Component } from './e500/e500.component';
import { E404Component } from './e404/e404.component';
import { E403Component } from './e403/e403.component';



@NgModule({
    declarations: [
        E403Component,
        E404Component,
        E500Component
    ],
    exports: [
        E403Component,
        E404Component,
        E500Component
    ],
    imports: [
        
    ]
})

export class ErrorModule { }
