import { Injectable } from '@angular/core';
import {Tag} from '../../shared/models/Tag'
import {Food} from '../../shared/models/Food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getFoodById(id: number): Food{
    return this.getAll().find(food => food.id == id)!;
  }

  getAllFoodsBySearchTerm(searchTerm:string): Food[]{
    return this.getAll().filter(food =>
      food.name.toLowerCase().includes(searchTerm.toLowerCase()
      ));
  }

  getAllTags():Tag[]{
    return [
      {name:'All', count: 16},
      {name:'Healthy', count: 3},
      {name:'Lunch', count: 3},
      {name:'Salad', count: 1},
      {name:'Dessert', count: 1},
      {name:'Tasty', count: 2},
      {name:'Cake', count: 1},
      {name:'Pescatarian', count: 1},
      {name:'Fish', count: 1},
      {name:'Breakfast', count: 1},
      {name:'Pizza', count: 1},
      {name:'Burger', count: 1},
    ];
  }

  getAllFoodsByTag(tag:string):Food[] {
    return tag == "All"? 
    this.getAll() : 
    this.getAll().filter(food => food.tags?.includes(tag)); 
  }

  getAll():Food[]{
    return [
      {
        id:1,
        name: "Chef's Salad",
        cookTime: '5-10',
        price: 10,
        favorite: false,
        origins: ['America'],
        stars: 4.5,
        imageUrl: '/assets/images/foods/food-1.jpg',
        tags: ['Healthy', 'Lunch', 'Salad']
      },
      {
        id:2,
        name: 'Raspberry Dream Cake',
        cookTime: '120',
        price: 15,
        favorite: true,
        origins: ['America'],
        stars: 4.3,
        imageUrl: '/assets/images/foods/food-2.jpg',
        tags: ['Dessert', 'Tasty', 'Cake']
      },
      {
        id:3,
        name: 'Balsamic Salmon',
        cookTime: '20-25',
        price: 24,
        favorite: true,
        origins: ['Italy'],
        stars: 3.5,
        imageUrl: '/assets/images/foods/food-3.jpg',
        tags: ['Healthy', 'Pescatarian', 'Fish']
      },
      {
        id:4,
        name: 'Banana Pancakes',
        cookTime: '5-10',
        price: 13,
        favorite: false,
        origins: ['America'],
        stars: 2.5,
        imageUrl: '/assets/images/foods/food-4.jpg',
        tags: ['Healthy', 'Breakfast']
      },
      {
        id:5,
        name: 'Specialty Pizza',
        cookTime: '10-15',
        price: 17,
        favorite: false,
        origins: ['Italy'],
        stars: 3.8,
        imageUrl: '/assets/images/foods/food-5.jpg',
        tags: ['Pizza', 'Lunch']
      },
      {
        id:6,
        name: 'Burger',
        cookTime: '25',
        price: 10,
        favorite: false,
        origins: ['America'],
        stars: 2.5,
        imageUrl: '/assets/images/foods/food-6.jpg',
        tags: ['Burger', 'Lunch', 'Tasty']
      }
    ]
  }
}
