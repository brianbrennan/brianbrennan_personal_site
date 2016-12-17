import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';

import { BBComponent } from './bb.component';
import { BBRouterModule } from '../routes/bb.router';
import { HomeComponent } from '../home/home.component';

@NgModule({
    imports: [BrowserModule, BBRouterModule],
    declarations: [BBComponent, HomeComponent],
    bootstrap: [BBComponent],
    providers: [Title]
})

export class BBModule {}