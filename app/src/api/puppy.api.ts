import { PuppyFilterType } from '@/types/puppy.types';

const API_URL = 'http://localhost:3000/api/puppy';

const PuppyAPI = () => ({
  findAll: async (filters: PuppyFilterType) => {
    const queryParams = new URLSearchParams(filters as any).toString();
    console.log('QUERY', queryParams);

    const puppies = await fetch(API_URL, { next: { revalidate: 5000 } });

    if (puppies.ok === false) throw new Error(`${PuppyAPI.name} findAll request failed.`);

    return await puppies.json();
  },
});

export default PuppyAPI;
