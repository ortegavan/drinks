import { Component, input } from '@angular/core';
import { Drink } from '../../model/drink';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-card',
    imports: [RouterLink],
    templateUrl: './card.component.html',
    styleUrl: './card.component.scss',
})
export class CardComponent {
    drink = input.required<Drink>();
}
