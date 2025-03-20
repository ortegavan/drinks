import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Spirit } from '../../model/spirit';

@Injectable({
    providedIn: 'root',
})
export class SpiritService {
    getSpirits(): Observable<Spirit[]> {
        return of([
            {
                id: 1,
                name: 'Vodka',
                image: 'vodka.png',
                selected: false,
            },
            {
                id: 2,
                name: 'Gin',
                image: 'gin.png',
                selected: false,
            },
            {
                id: 3,
                name: 'Rum',
                image: 'rum.png',
                selected: false,
            },
            {
                id: 4,
                name: 'Tequila',
                image: 'tequila.png',
                selected: false,
            },
            // {
            //     id: 5,
            //     name: 'Whisky',
            //     image: 'whisky.png',
            //     selected: false,
            // },
        ]);
    }
}
