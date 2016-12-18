import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';

import { BBComponent } from './bb.component';
import { BBRouterModule } from '../routes/bb.router';
import { MainNavComponent } from '../globals/components/main-nav/mainNav.component';
import { MainFooterComponent } from '../globals/components/main-footer/mainFooter.component';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../page/about/about.component';

@NgModule({
    imports: [BrowserModule, BBRouterModule],
    declarations: [BBComponent, MainNavComponent, MainFooterComponent, HomeComponent, AboutComponent],
    bootstrap: [BBComponent],
    providers: [Title]
})

export class BBModule {}