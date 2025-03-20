import { Component, input } from '@angular/core';
import { Drink } from '../../model/drink';

@Component({
    selector: 'app-card',
    imports: [],
    templateUrl: './card.component.html',
    styleUrl: './card.component.scss',
})
export class CardComponent {
    drink = input.required<Drink>();
}
