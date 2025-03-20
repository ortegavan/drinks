import { Component, inject, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { CardComponent } from '../card/card.component';
import { DrinkService } from '../../services/drink/drink.service';
import { AsyncPipe } from '@angular/common';
import { SpiritService } from '../../services/spirit/spirit.service';
import { SpiritComponent } from '../spirit/spirit.component';
import { Spirit } from '../../model/spirit';

@Component({
    selector: 'app-home',
    imports: [HeaderComponent, CardComponent, AsyncPipe, SpiritComponent],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
})
export class HomeComponent {
    spiritService = inject(SpiritService);
    drinkService = inject(DrinkService);

    spirits$ = this.spiritService.getSpirits();
    drinks$ = this.drinkService.getDrinks();

    spirits: number[] = [];

    changeSpirit(spirit: Spirit) {
        if (spirit.selected) {
            this.spirits.push(spirit.id);
        } else {
            this.spirits = this.spirits.filter((s) => s !== spirit.id);
        }

        this.drinks$ = this.drinkService.getDrinks(this.spirits);
    }
}
