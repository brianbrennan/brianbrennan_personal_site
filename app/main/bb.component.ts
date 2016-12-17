import { Component } from '@angular/core';

@Component({
    selector: 'bb',
    templateUrl: './app/main/app.html'
})

export class BBComponent {
    minHeight: number;

    constructor(){
        this.setMinHeight();
    }

    private setMinHeight() {
        this.minHeight = window.innerHeight;
    }
}