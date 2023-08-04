/**
 * This is just a sample of utilizing the API routes of NextJS to secure internal API endpoints.
 * The server side will handle the request to the internal API instead of the client side.
 *
 * To test: '{appURL}/api'
 *
 * More details: https://nextjs.org/docs/pages/building-your-application/routing/api-routes
 */

import { NextResponse } from 'next/server';

// For health check
export const GET = () => NextResponse.json('Adopt A Puppy API connected.');
