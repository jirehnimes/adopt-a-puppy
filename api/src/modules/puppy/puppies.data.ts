import { GENDER } from '@/core/consts/common.const';
import { PUPPY_SIZE } from '@/core/consts/puppy.const';
import PuppyEntity from '@/database/entities/puppy.entity';

export const puppies: Omit<PuppyEntity, 'id'>[] = [
  {
    name: 'Samuel',
    age: 1,
    gender: GENDER.MALE,
    is_vaccinated: true,
    is_neutered: true,
    size: PUPPY_SIZE.SMALL,
    breed: 'Jack Russell',
    traits: ['Quiet', 'Great with children'],
    photo_url:
      'https://images.unsplash.com/photo-1593134257782-e89567b7718a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
  },
  {
    name: 'Tillie',
    age: 2,
    gender: GENDER.FEMALE,
    is_vaccinated: true,
    is_neutered: true,
    size: PUPPY_SIZE.MEDIUM,
    breed: 'Collie cross',
    traits: ['Affectionate', 'Loves to play'],
    photo_url:
      'https://images.unsplash.com/photo-1601979031925-424e53b6caaa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  },
  {
    name: 'Barnaby',
    age: 1,
    gender: GENDER.MALE,
    is_vaccinated: false,
    is_neutered: false,
    size: PUPPY_SIZE.LARGE,
    breed: 'Labrador',
    traits: ['Very active', 'Big appetite'],
    photo_url:
      'https://images.unsplash.com/photo-1600804340584-c7db2eacf0bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  },
  {
    name: 'Emily',
    age: 3,
    gender: GENDER.FEMALE,
    is_vaccinated: false,
    is_neutered: true,
    size: PUPPY_SIZE.SMALL,
    breed: 'Springer Spaniel',
    traits: ['Friendly', 'Great around other dogs'],
    photo_url:
      'https://images.unsplash.com/photo-1583511655826-05700d52f4d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80',
  },
];
