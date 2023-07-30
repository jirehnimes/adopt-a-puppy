const API_URL = 'http://localhost:3000/api/puppy';

const PuppyAPI = () => ({
  findAll: async () => {
    try {
      const puppies = await fetch(API_URL);

      if (puppies.ok === true) return await puppies.json();

      return false;
    } catch (error: any) {
      console.error(error);

      return false;
    }
  },
});

export default PuppyAPI;
