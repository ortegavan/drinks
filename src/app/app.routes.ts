import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
    {
        path: 'home',
        component: HomeComponent,
        children: [
            {
                path: ':id',
                loadComponent: () =>
                    import('./components/drink/drink.component').then(
                        (m) => m.DrinkComponent,
                    ),
            },
        ],
    },
];
