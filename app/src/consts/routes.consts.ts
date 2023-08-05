export const APP_ROUTES = {
  PUPPY_LIST: '/puppies',
  PUPPY_PROFILE: (id: string) => `/puppy/${id}`,
  ADOPTION_FORM: (id: string) => `/adoption/${id}`,
  ADOPTION_SUCCESS: (id: string) => `/adoption/${id}/success`,
};

export const ADMIN_ROUTES = {
  DATABASE: {
    PUPPIES_LIST: '/admin/database/puppies',
    PUPPIES_FORM: (id?: string) => `/admin/database/puppies/form${!!id === true ? `/${id}` : ''}`,
  },
};
