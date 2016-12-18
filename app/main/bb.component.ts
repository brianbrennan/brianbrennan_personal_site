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

    public setMinHeight() {
        this.minHeight = window.innerHeight;
    }
}