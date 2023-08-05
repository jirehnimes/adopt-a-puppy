'use client';

import { redirect } from 'next/navigation';

import { ADMIN_ROUTES } from '@/consts/routes.consts';

const PageAdminDatabase = () => {
  redirect(ADMIN_ROUTES.DATABASE.PUPPIES_LIST);
};

export default PageAdminDatabase;
