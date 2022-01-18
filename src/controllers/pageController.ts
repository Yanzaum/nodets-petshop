import { Request, Response } from 'express';
import { Pet } from '../models/pet';
import { createMenuObject } from '../helpers/createMenuObject';

export const home = (req: Request, res: Response) => {
    res.render('pages/page', {
        menu: createMenuObject('all'),
        title: 'Todos os animais',
        banner: 'allanimals.jpg',
        list: Pet.getAll()
    });
}

export const dogs = (req: Request, res: Response) => {
    res.render('pages/page', {
        menu: createMenuObject('dog'),
        title: 'Cachorros',
        banner: 'banner_dog.jpg',
        list: Pet.getFromType('dog')
    });
}

export const cats = (req: Request, res: Response) => {
    res.render('pages/page', {
        menu: createMenuObject('cat'),
        title: 'Gatos',
        banner: 'banner_cat.jpg',
        list: Pet.getFromType('cat')
    });
}

export const fishes = (req: Request, res: Response) => {
    res.render('pages/page', {
        menu: createMenuObject('fish'),
        title: 'Peixes',
        banner: 'banner_fish.jpg',
        list: Pet.getFromType('fish')
    });
}
