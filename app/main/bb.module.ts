import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';

import { BBComponent } from './bb.component';
import { BBRouterModule } from '../routes/bb.router';
import { MainFooterComponent } from '../globals/components/main-footer/mainFooter.component';
import { HomeComponent } from '../home/home.component';

@NgModule({
    imports: [BrowserModule, BBRouterModule],
    declarations: [BBComponent, MainFooterComponent, HomeComponent],
    bootstrap: [BBComponent],
    providers: [Title]
})

export class BBModule {}