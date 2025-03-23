import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Drink } from '../../model/drink';

@Injectable({
    providedIn: 'root',
})
export class DrinkService {
    private drinks = [
        {
            id: 1,
            name: 'Martini',
            description: 'Gin e vermute',
            image: 'martini.jpg',
            spirit: 2,
            method: 'stirred',
            ingredients: [
                {
                    name: 'Gin',
                    quantity: '60ml',
                },
                {
                    name: 'Vermute',
                    quantity: '10ml',
                },
            ],
            garnish: 'Azeitona',
            glass: 'Martini',
        },
        {
            id: 2,
            name: 'Cosmopolitan',
            description:
                'Vodka, triple sec, suco de limão e xarope de cranberry',
            image: 'cosmopolitan.jpg',
            spirit: 1,
            method: 'shaken',
            ingredients: [
                {
                    name: 'Vodka',
                    quantity: '40ml',
                },
                {
                    name: 'Triple sec',
                    quantity: '15ml',
                },
                {
                    name: 'Suco de limão',
                    quantity: '15ml',
                },
                {
                    name: 'Xarope de cranberry',
                    quantity: '10ml',
                },
            ],
            garnish: 'Casca de limão',
            glass: 'Coupé',
        },
        {
            id: 3,
            name: 'Negroni',
            description: 'Gin, vermute tinto e Campari',
            image: 'negroni.jpg',
            spirit: 2,
            method: 'stirred',
            ingredients: [
                {
                    name: 'Gin',
                    quantity: '30ml',
                },
                {
                    name: 'Vermute tinto',
                    quantity: '30ml',
                },
                {
                    name: 'Campari',
                    quantity: '30ml',
                },
            ],
            garnish: 'Casca de laranja',
            glass: 'Copo baixo',
        },
        {
            id: 4,
            name: 'Moscow Mule',
            description: 'Vodka, ginger beer, suco de limão e angostura',
            image: 'moscow-mule.jpg',
            spirit: 1,
            method: 'built',
            ingredients: [
                {
                    name: 'Vodka',
                    quantity: '50ml',
                },
                {
                    name: 'Ginger beer',
                    quantity: '100ml',
                },
                {
                    name: 'Suco de limão',
                    quantity: '10ml',
                },
                {
                    name: 'Angostura',
                    quantity: '3 dashes',
                },
            ],
            garnish: 'Casca de limão, ramo de hortelã',
            glass: 'Caneca de cobre',
        },
        {
            id: 5,
            name: 'Margarita',
            description: 'Tequila, triple sec e suco de limão',
            image: 'margarita.jpg',
            spirit: 4,
            method: 'shaken',
            ingredients: [
                {
                    name: 'Tequila',
                    quantity: '50ml',
                },
                {
                    name: 'Triple sec',
                    quantity: '20ml',
                },
                {
                    name: 'Suco de limão',
                    quantity: '20ml',
                },
            ],
            garnish: 'Casca de limão e flor de sal',
            glass: 'Coupé',
        },
        {
            id: 6,
            name: 'Rob Roy',
            description: 'Whisky escocês, vermute tinto e angostura',
            image: 'rob-roy.jpg',
            spirit: 5,
            method: 'stirred',
            ingredients: [
                {
                    name: 'Whisky escocês',
                    quantity: '60ml',
                },
                {
                    name: 'Vermute tinto',
                    quantity: '30ml',
                },
                {
                    name: 'Angostura',
                    quantity: '3 dashes',
                },
            ],
            garnish: 'Cereja',
            glass: 'Coupé',
        },
        {
            id: 7,
            name: 'Daiquiri',
            description: 'Rum, suco de limão e xarope de açúcar',
            image: 'daiquiri.jpg',
            spirit: 3,
            method: 'shaken',
            ingredients: [
                {
                    name: 'Rum',
                    quantity: '60ml',
                },
                {
                    name: 'Suco de limão',
                    quantity: '20ml',
                },
                {
                    name: 'Xarope de açúcar',
                    quantity: '10ml',
                },
            ],
            garnish: 'Casca de limão',
            glass: 'Coupé',
        },
        {
            id: 8,
            name: 'Gin Tônica',
            description: 'Gin e água tônica',
            image: 'gin-tonica.jpg',
            spirit: 2,
            method: 'built',
            ingredients: [
                {
                    name: 'Gin',
                    quantity: '50ml',
                },
                {
                    name: 'Água tônica',
                    quantity: '150ml',
                },
            ],
            garnish: 'Casca de limão e zimbro',
            glass: 'Copo longo',
        },
        {
            id: 9,
            name: 'Bloody Mary',
            description:
                'Vodka, suco de tomate, suco de limão, molho inglês, tabasco e pimenta',
            image: 'bloody-mary.jpg',
            spirit: 1,
            method: 'thrown',
            ingredients: [
                {
                    name: 'Vodka',
                    quantity: '50ml',
                },
                {
                    name: 'Suco de tomate',
                    quantity: '100ml',
                },
                {
                    name: 'Suco de limão',
                    quantity: '15ml',
                },
                {
                    name: 'Molho inglês',
                    quantity: '5ml',
                },
                {
                    name: 'Tabasco',
                    quantity: '3 dashes',
                },
                {
                    name: 'Pimenta',
                    quantity: '1 pinch',
                },
            ],
            garnish: 'Aipo, limão, sal e pimenta',
            glass: 'Copo longo',
        },
        {
            id: 10,
            name: 'Manhattan',
            description: 'Whisky, vermute tinto e angostura',
            image: 'manhattan.jpg',
            spirit: 5,
            method: 'stirred',
            ingredients: [
                {
                    name: 'Whisky',
                    quantity: '50ml',
                },
                {
                    name: 'Vermute tinto',
                    quantity: '20ml',
                },
                {
                    name: 'Angostura',
                    quantity: '2 dashes',
                },
            ],
            garnish: 'Cereja',
            glass: 'Martini',
        },
        {
            id: 11,
            name: 'Martinez',
            description: 'Gin, vermute tinto, licor de maraschino e angostura',
            image: 'martinez.jpg',
            spirit: 2,
            method: 'stirred',
            ingredients: [
                {
                    name: 'Gin',
                    quantity: '50ml',
                },
                {
                    name: 'Vermute tinto',
                    quantity: '20ml',
                },
                {
                    name: 'Licor de maraschino',
                    quantity: '5ml',
                },
                {
                    name: 'Angostura',
                    quantity: '2 dashes',
                },
            ],
            garnish: 'Casca de limão',
            glass: 'Coupé',
        },
    ] as Drink[];

    getDrinks(spirits?: number[]): Observable<Drink[]> {
        let drinks = this.drinks;

        if (spirits && spirits.length > 0) {
            drinks = drinks.filter((drink) => spirits.includes(drink.spirit));
        }

        return of(drinks);
    }

    getDrink(id: number): Observable<Drink> {
        return of(this.drinks.find((drink) => drink.id == id) || ({} as Drink));
    }
}
