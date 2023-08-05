'use client';

import { redirect } from 'next/navigation';

import { APP_ROUTES } from '@/consts/routes.consts';

const PageAdoption = () => {
  redirect(APP_ROUTES.PUPPY_LIST);
};

export default PageAdoption;
