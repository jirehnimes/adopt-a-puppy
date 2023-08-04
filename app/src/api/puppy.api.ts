import {
  PuppyFilterType,
  PuppyFormCreateAPIType,
  PuppyFormCreateType,
  PuppyFormUpdateAPIType,
  PuppyFormUpdateType,
} from '@/types/puppy.types';

import { $httpDelete, $httpGet, $httpPatch, $httpPost } from './_api';

const PuppyAPI = () => {
  const PUPPY_API_URL = (process?.env?.API_URL || 'http://localhost:3000/api') + '/puppy';
  const API_REVALIDATE = Number(process?.env?.API_REVALIDATE || 5000);

  const formatRequestForm = (form: PuppyFormCreateType | PuppyFormUpdateType) => {
    const { age, gender, size, is_vaccinated, is_neutered, traits, ...otherFields } = form;

    const requestForm: PuppyFormCreateAPIType | PuppyFormUpdateAPIType = {
      ...otherFields,
      age: Number(age || 0),
      gender: gender === 'null' ? null : gender,
      size: size === 'null' ? null : size,
      is_vaccinated: is_vaccinated === 'true' ? true : false,
      is_neutered: is_neutered === 'true' ? true : false,
      traits: traits?.split(',') || null,
    };

    return requestForm;
  };

  return {
    create: async (form: PuppyFormCreateType) => {
      const requestForm = formatRequestForm(form) as PuppyFormCreateAPIType;

      const puppy = await $httpPost(PUPPY_API_URL, requestForm);

      if (puppy.ok === false) throw new Error(`${PuppyAPI.name} create request failed.`);

      return await puppy.json();
    },

    findAll: async (filters: PuppyFilterType) => {
      const puppies = await $httpGet(PUPPY_API_URL, filters, {
        next: { revalidate: API_REVALIDATE, tags: ['puppies'] },
      });

      if (puppies.ok === false) throw new Error(`${PuppyAPI.name} findAll request failed.`);

      return await puppies.json();
    },

    findOne: async (id: string) => {
      const requestURL = `${PUPPY_API_URL}/${id}`;

      const puppy = await $httpGet(requestURL, undefined, {
        next: { revalidate: 0 },
      });

      if (puppy.ok === false) throw new Error(`${PuppyAPI.name} findOne request failed.`);

      return await puppy.json();
    },

    update: async (id: string, form: PuppyFormUpdateType) => {
      const requestForm = formatRequestForm(form) as PuppyFormUpdateAPIType;

      const puppy = await $httpPatch(PUPPY_API_URL, id, requestForm);

      console.log(await puppy.json());

      if (puppy.ok === false) throw new Error(`${PuppyAPI.name} update request failed.`);

      return await puppy.json();
    },

    remove: async (id: string) => {
      const response = await $httpDelete(PUPPY_API_URL, id);

      if (response.ok === false) throw new Error(`${PuppyAPI.name} delete request failed.`);

      return await response.json();
    },
  };
};

export default PuppyAPI;
