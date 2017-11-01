import { Component, Input } from '@angular/core';
import { Hero } from '../../model/hero';

@Component({
    selector: 'app-hero-display',
    templateUrl: './hero-display.component.html',
    styleUrls: ['./hero-display.component.css']
})
export class HeroDisplayComponent {

    @Input() heroes: Hero[];

    constructor() { }

}
