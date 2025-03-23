import { Component, inject, input, OnInit } from '@angular/core';
import { DrinkService } from '../../services/drink/drink.service';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { Drink } from '../../model/drink';

@Component({
    selector: 'app-drink',
    imports: [AsyncPipe],
    templateUrl: './drink.component.html',
    styleUrl: './drink.component.scss',
})
export class DrinkComponent implements OnInit {
    id = input<number>();
    drinkService = inject(DrinkService);
    drink$!: Observable<Drink>;

    ngOnInit(): void {
        this.drink$ = this.drinkService.getDrink(this.id() || 0);
    }
}
