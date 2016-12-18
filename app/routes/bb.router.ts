import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../page/about/about.component';

const bbRoutes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'about',
        component: AboutComponent
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