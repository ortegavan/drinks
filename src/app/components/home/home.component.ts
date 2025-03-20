import { Component, inject } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { CardComponent } from '../card/card.component';
import { DrinkService } from '../../services/drink/drink.service';
import { AsyncPipe } from '@angular/common';

@Component({
    selector: 'app-home',
    imports: [HeaderComponent, CardComponent, AsyncPipe],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
})
export class HomeComponent {
    service = inject(DrinkService);
    drinks$ = this.service.getDrinks();
}
