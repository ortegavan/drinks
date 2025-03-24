import { Component, inject, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { CardComponent } from '../card/card.component';
import { DrinkService } from '../../services/drink/drink.service';
import { AsyncPipe } from '@angular/common';
import { SpiritService } from '../../services/spirit/spirit.service';
import { SpiritComponent } from '../spirit/spirit.component';
import { Spirit } from '../../model/spirit';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { first } from 'rxjs';

@Component({
    selector: 'app-home',
    imports: [
        HeaderComponent,
        CardComponent,
        AsyncPipe,
        SpiritComponent,
        RouterOutlet,
    ],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
    spiritService = inject(SpiritService);
    drinkService = inject(DrinkService);
    route = inject(ActivatedRoute);

    drinks$ = this.drinkService.getDrinks();
    spirits: Spirit[] = [];

    ngOnInit(): void {
        this.spiritService
            .getSpirits()
            .pipe(first())
            .subscribe((spirits) => {
                this.spirits = spirits;
            });
    }

    changeSpirit(spirit: Spirit) {
        if (spirit.selected) {
            this.spirits.forEach((s) => {
                s.selected = false;
            });
            spirit.selected = true;
            this.drinks$ = this.drinkService.getDrinks([spirit.id]);
        } else {
            this.drinks$ = this.drinkService.getDrinks();
        }
    }
}
