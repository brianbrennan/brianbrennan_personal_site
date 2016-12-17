import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../home/home.component';

const bbRoutes: Routes = [
    {
        path: '',
        component: HomeComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(bbRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class BBRouterModule {}