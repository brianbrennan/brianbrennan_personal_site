import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Page } from '../models/page.model';

@Injectable()
export class PageService {

    constructor(
        private http: Http
    ) {}
    
    getPage(pageName: string): Promise<Page> {
        return this.http.get('/app/data/pages.json')
            .toPromise()
            .then(response => response.json()[pageName] as Page);
    }
}