import { Ingredient } from './ingredient';

export type Drink = {
    id: number;
    name: string;
    description: string;
    image: string;
    spirit: number;
    method: 'stirred' | 'shaken' | 'built' | 'thrown';
    ingredients: Ingredient[];
    garnish: string;
    glass: string;
};
