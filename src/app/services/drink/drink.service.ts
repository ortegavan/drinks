import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Drink } from '../../model/drink';

@Injectable({
    providedIn: 'root',
})
export class DrinkService {
    getDrinks(spirits?: number[]): Observable<Drink[]> {
        let drinks = [
            {
                name: 'Martini',
                description: 'Gin e vermute',
                image: 'martini.jpg',
                spirit: 2,
            },
            {
                name: 'Cosmopolitan',
                description:
                    'Vodka, triple sec, suco de limão e xarope de cranberry',
                image: 'cosmopolitan.jpg',
                spirit: 1,
            },
            {
                name: 'Negroni',
                description: 'Gin, vermute tinto e Campari',
                image: 'negroni.jpg',
                spirit: 2,
            },
            {
                name: 'Moscow Mule',
                description: 'Vodka, ginger beer, suco de limão e angostura',
                image: 'moscow-mule.jpg',
                spirit: 1,
            },
            {
                name: 'Margarita',
                description: 'Tequila, triple sec e suco de limão',
                image: 'margarita.jpg',
                spirit: 4,
            },
            {
                name: 'Rob Roy',
                description: 'Whisky escocês, vermute tinto e angostura',
                image: 'rob-roy.jpg',
                spirit: 5,
            },
            {
                name: 'Daiquiri',
                description: 'Rum, suco de limão e xarope de açúcar',
                image: 'daiquiri.jpg',
                spirit: 3,
            },
            {
                name: 'Gin Tônica',
                description: 'Gin e água tônica',
                image: 'gin-tonica.jpg',
                spirit: 2,
            },
            {
                name: 'Bloody Mary',
                description:
                    'Vodka, suco de tomate, suco de limão, molho inglês, tabasco e pimenta',
                image: 'bloody-mary.jpg',
                spirit: 1,
            },
            {
                name: 'Manhattan',
                description: 'Whisky, vermute tinto e angostura',
                image: 'manhattan.jpg',
                spirit: 5,
            },
            {
                name: 'Martinez',
                description:
                    'Gin, vermute tinto, licor de maraschino e angostura',
                image: 'martinez.jpg',
                spirit: 2,
            },
        ];

        if (spirits && spirits.length > 0) {
            drinks = drinks.filter((drink) => spirits.includes(drink.spirit));
        }

        return of(drinks);
    }
}
