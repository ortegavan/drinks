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
            name: 'Dry Martini',
            description: 'Gin e vermute',
            image: 'martini.jpg',
            spirit: 2,
            method: 'stirred',
            ingredients: [
                {
                    name: 'Gin',
                    quantity: 60,
                },
                {
                    name: 'Vermute',
                    quantity: 10,
                },
            ],
            garnish: 'Azeitona',
            glass: 'Martini',
            pairing: {
                description:
                    'Creme de ricota temperado com salsinha e limão e amêndoas laminadas',
                image: 'ricota.jpg',
            },
        },
        {
            id: 12,
            name: 'Vodka Martini',
            description: 'Vodka e vermute',
            image: 'vodka-martini.jpg',
            spirit: 1,
            method: 'stirred',
            ingredients: [
                {
                    name: 'Vodka',
                    quantity: 60,
                },
                {
                    name: 'Vermute',
                    quantity: 10,
                },
            ],
            garnish: 'Azeitona',
            glass: 'Martini',
            pairing: {
                description: 'Salmão defumado',
                image: 'salmao.jpg',
            },
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
                    quantity: 40,
                },
                {
                    name: 'Triple sec',
                    quantity: 15,
                },
                {
                    name: 'Suco de limão',
                    quantity: 15,
                },
                {
                    name: 'Xarope de cranberry',
                    quantity: 10,
                },
            ],
            garnish: 'Casca de limão',
            glass: 'Coupé',
            pairing: {
                description: 'Salmão defumado',
                image: 'salmao.jpg',
            },
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
                    quantity: 30,
                },
                {
                    name: 'Vermute tinto',
                    quantity: 30,
                },
                {
                    name: 'Campari',
                    quantity: 30,
                },
            ],
            garnish: 'Casca de laranja',
            glass: 'Copo baixo',
            pairing: {
                description:
                    'Grissini com tapenade de azeitonas pretas ou sardela',
                image: 'grissini.jpg',
            },
        },
        // {
        //     id: 4,
        //     name: 'Moscow Mule',
        //     description: 'Vodka, ginger beer, suco de limão e angostura',
        //     image: 'moscow-mule.jpg',
        //     spirit: 1,
        //     method: 'built',
        //     ingredients: [
        //         {
        //             name: 'Vodka',
        //             quantity: 50,
        //         },
        //         {
        //             name: 'Ginger beer',
        //             quantity: 100,
        //         },
        //         {
        //             name: 'Suco de limão',
        //             quantity: 10,
        //         },
        //         {
        //             name: 'Angostura',
        //             quantity: 3,
        //         },
        //     ],
        //     garnish: 'Casca de limão, ramo de hortelã',
        //     glass: 'Caneca de cobre',
        // },
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
                    quantity: 50,
                },
                {
                    name: 'Triple sec',
                    quantity: 20,
                },
                {
                    name: 'Suco de limão',
                    quantity: 20,
                },
            ],
            garnish: 'Casca de limão e flor de sal',
            glass: 'Coupé',
            pairing: {
                description: 'Guacamole',
                image: 'guacamole.jpg',
            },
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
                    quantity: 60,
                },
                {
                    name: 'Vermute tinto',
                    quantity: 30,
                },
                {
                    name: 'Angostura',
                    quantity: 3,
                },
            ],
            garnish: 'Cereja',
            glass: 'Coupé',
            pairing: {
                description: 'Nutella com flor de sal',
                image: 'nutella.jpg',
            },
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
                    quantity: 60,
                },
                {
                    name: 'Suco de limão',
                    quantity: 20,
                },
                {
                    name: 'Xarope de açúcar',
                    quantity: 10,
                },
            ],
            garnish: 'Casca de limão',
            glass: 'Coupé',
            pairing: {
                description: 'Queijo brie com geleia de abacaxi',
                image: 'brie.jpg',
            },
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
                    quantity: 50,
                },
                {
                    name: 'Água tônica',
                    quantity: 150,
                },
            ],
            garnish: 'Casca de limão e zimbro',
            glass: 'Copo longo',
            pairing: {
                description:
                    'Bruschetta clássica com tomate, alho, azeite e manjericão',
                image: 'bruschetta.jpg',
            },
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
                    quantity: 50,
                },
                {
                    name: 'Suco de tomate',
                    quantity: 100,
                },
                {
                    name: 'Suco de limão',
                    quantity: 15,
                },
                {
                    name: 'Molho inglês',
                    quantity: 3,
                },
                {
                    name: 'Tabasco',
                    quantity: 3,
                },
            ],
            garnish: 'Aipo, limão, sal e pimenta',
            glass: 'Copo longo',
            pairing: {
                description:
                    'Creme de ricota temperado com salsinha e limão e amêndoas laminadas',
                image: 'ricota.jpg',
            },
        },
        // {
        //     id: 10,
        //     name: 'Manhattan',
        //     description: 'Whisky, vermute tinto e angostura',
        //     image: 'manhattan.jpg',
        //     spirit: 5,
        //     method: 'stirred',
        //     ingredients: [
        //         {
        //             name: 'Whisky',
        //             quantity: 50,
        //         },
        //         {
        //             name: 'Vermute tinto',
        //             quantity: 20,
        //         },
        //         {
        //             name: 'Angostura',
        //             quantity: 2,
        //         },
        //     ],
        //     garnish: 'Cereja',
        //     glass: 'Martini',
        //     pairing: {
        //         description: 'Nutella com flor de sal',
        //         image: 'nutella.jpg',
        //     },
        // },
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
                    quantity: 50,
                },
                {
                    name: 'Vermute tinto',
                    quantity: 20,
                },
                {
                    name: 'Licor de maraschino',
                    quantity: 5,
                },
                {
                    name: 'Angostura',
                    quantity: 2,
                },
            ],
            garnish: 'Casca de limão',
            glass: 'Coupé',
            pairing: {
                description: 'Queijo brie com geleia de abacaxi',
                image: 'brie.jpg',
            },
        },
        {
            id: 13,
            name: 'Casino',
            description:
                'Gin, licor de maraschino, suco de limão e angostura de laranja',
            image: 'casino.jpg',
            spirit: 2,
            method: 'shaken',
            ingredients: [
                {
                    name: 'Gin',
                    quantity: 45,
                },
                {
                    name: 'Licor de maraschino',
                    quantity: 15,
                },
                {
                    name: 'Suco de limão',
                    quantity: 10,
                },
                {
                    name: 'Angostura de laranja',
                    quantity: 1,
                },
            ],
            garnish: 'Cereja',
            glass: 'Martini',
            pairing: {
                description:
                    'Creme de ricota temperado com salsinha e limão e amêndoas laminadas',
                image: 'ricota.jpg',
            },
        },
        {
            id: 14,
            name: 'Piña Colada',
            description: 'Rum, leite de coco e xarope de abacaxi',
            image: 'pinacolada.jpg',
            spirit: 3,
            method: 'shaken',
            ingredients: [
                {
                    name: 'Rum',
                    quantity: 50,
                },
                {
                    name: 'Xarope de abacaxi',
                    quantity: 25,
                },
                {
                    name: 'Leite de coco',
                    quantity: 40,
                },
            ],
            garnish: 'Pedaço de abacaxi e/ou cereja',
            glass: 'Copo longo',
            pairing: {
                description: 'Queijo brie com geleia de abacaxi',
                image: 'brie.jpg',
            },
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
