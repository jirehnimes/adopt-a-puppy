'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const PageAdminHome = () => {
  const router = useRouter();

  useEffect(() => router.push('/admin/database/puppies'));
};

export default PageAdminHome;
