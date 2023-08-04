/**
 * This is just a sample of utilizing the API routes of NextJS to secure internal API endpoints.
 * The server side will handle the request to the internal API instead of the client side.
 *
 * To test: '{appURL}/api/puppy'
 *
 * More details: https://nextjs.org/docs/pages/building-your-application/routing/api-routes
 */

import { NextResponse } from 'next/server';

import PuppyAPI from '@/api/puppy.api';
import { BOOLEAN_STRING } from '@/consts/common.consts';
import { PUPPY_GENDER } from '@/consts/puppy.consts';

export const GET = async () => {
  const response = await PuppyAPI().findAll({
    search: '',
    gender: [PUPPY_GENDER.MALE, PUPPY_GENDER.FEMALE],
    is_neutered: [BOOLEAN_STRING.TRUE, BOOLEAN_STRING.FALSE],
    is_vaccinated: [BOOLEAN_STRING.TRUE, BOOLEAN_STRING.FALSE],
  });

  return NextResponse.json(response);
};
