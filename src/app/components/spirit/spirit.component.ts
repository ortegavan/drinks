import { Component, input, output } from '@angular/core';
import { Spirit } from '../../model/spirit';

@Component({
    selector: 'app-spirit',
    imports: [],
    templateUrl: './spirit.component.html',
    styleUrl: './spirit.component.scss',
})
export class SpiritComponent {
    spirit = input.required<Spirit>();
    spiritClicked = output<Spirit>();

    click() {
        const spirit = this.spirit();

        spirit.selected = !spirit.selected;
        this.spiritClicked.emit(spirit);
    }
}
