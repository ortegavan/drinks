import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Drink } from '../../model/drink';

@Injectable({
    providedIn: 'root',
})
export class DrinkService {
    getDrinks(): Observable<Drink[]> {
        return of([
            {
                name: 'Martini',
                description: 'Gin e vermute',
                image: 'martini.jpg',
            },
            {
                name: 'Cosmopolitan',
                description:
                    'Vodka, triple sec, suco de limão e xarope de cranberry',
                image: 'cosmopolitan.jpg',
            },
            {
                name: 'Negroni',
                description: 'Gin, vermute tinto e Campari',
                image: 'negroni.jpg',
            },
            {
                name: 'Moscow Mule',
                description: 'Vodka, ginger beer, suco de limão e angostura',
                image: 'moscow-mule.jpg',
            },
            {
                name: 'Margarita',
                description: 'Tequila, triple sec e suco de limão',
                image: 'margarita.jpg',
            },
            {
                name: 'Rob Roy',
                description: 'Whisky escocês, vermute tinto e angostura',
                image: 'rob-roy.jpg',
            },
            {
                name: 'Daiquiri',
                description: 'Rum, suco de limão e xarope de açúcar',
                image: 'daiquiri.jpg',
            },
            {
                name: 'Gin Tônica',
                description: 'Gin e água tônica',
                image: 'gin-tonica.jpg',
            },
            {
                name: 'Bloody Mary',
                description:
                    'Vodka, suco de tomate, suco de limão, molho inglês, tabasco e pimenta',
                image: 'bloody-mary.jpg',
            },
            {
                name: 'Manhattan',
                description: 'Whisky, vermute tinto e angostura',
                image: 'manhattan.jpg',
            },
        ]);
    }
}
