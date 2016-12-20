import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { PageComponent } from '../page/page.component';

const bbRoutes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'about',
        component: PageComponent
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