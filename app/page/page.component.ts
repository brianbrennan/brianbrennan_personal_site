import { Component } from '@angular/core';
import { Location } from '@angular/common';

import { PageService } from '../globals/services/page.service';
import { Page } from '../globals/models/page.model';

@Component({
    selector: 'page',
    templateUrl: './app/page/page.html',
    providers: [PageService]
})
export class PageComponent {
    page: Page;
    
    constructor(
        private location: Location,
        private pageService: PageService
    ) {
        this.page = new Page();
        this.pageService.getPage(location.path().replace('/', ''))
            .then(data => {
                this.page = data;
            });
    }
}