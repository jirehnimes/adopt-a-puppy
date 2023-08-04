import { HTTP_METHOD } from '@/consts/common.consts';

const REQUEST_HEADERS = {
  'Content-Type': 'application/json',
};

const formatRequestHeaders = (headers: HeadersInit = {}) => {
  return { ...REQUEST_HEADERS, ...headers };
};

export const $httpGet = async (url: string, query?: Record<string, any>, options?: RequestInit) => {
  const { headers, ...otherOptions } = options || {};
  let requestURL = url;

  if (!!query === true) {
    const queryParams = new URLSearchParams(query as any).toString();
    requestURL = `${url}?${queryParams}`;
  }

  return await fetch(requestURL, {
    method: HTTP_METHOD.GET,
    headers: formatRequestHeaders(headers),
    ...(otherOptions || {}),
  });
};

export const $httpPost = async (url: string, data?: any, options?: RequestInit) => {
  const { headers, ...otherOptions } = options || {};

  return await fetch(url, {
    body: JSON.stringify(data),
    method: HTTP_METHOD.POST,
    headers: formatRequestHeaders(headers),
    next: { revalidate: 0 },
    ...(otherOptions || {}),
  });
};

export const $httpPatch = async (url: string, id: string, data?: any, options?: RequestInit) => {
  const { headers, ...otherOptions } = options || {};
  const requestURL = `${url}/${id}`;

  return await fetch(requestURL, {
    body: JSON.stringify(data),
    method: HTTP_METHOD.PATCH,
    headers: formatRequestHeaders(headers),
    ...(otherOptions || {}),
  });
};

export const $httpDelete = async (url: string, id: string, options?: RequestInit) => {
  const { headers, ...otherOptions } = options || {};
  const requestURL = `${url}/${id}`;

  return await fetch(requestURL, {
    method: HTTP_METHOD.DELETE,
    headers: formatRequestHeaders(headers),
    ...(otherOptions || {}),
  });
};
