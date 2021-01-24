// Reference: https://www.apollographql.com/blog/building-a-next-js-app-with-apollo-client-slash-graphql/

import { useMemo } from 'react';
import { setContext } from '@apollo/client/link/context';
import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  NormalizedCacheObject,
} from '@apollo/client';

let client: ApolloClient<NormalizedCacheObject>;

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      ...(process.env.NEXT_PUBLIC_FAUNA_TOKEN
        ? { Authorization: `Bearer ${process.env.NEXT_PUBLIC_FAUNA_TOKEN}` }
        : {}),
    },
  };
});

const httpLink = new HttpLink({
  uri: process.env.NEXT_PUBLIC_FAUNA_URL,
});

const createApolloClient = () => {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });
};

export function initializeApollo(initialState = null) {
  const _apolloClient = client ?? createApolloClient();
  if (initialState) {
    const existingCache = _apolloClient.extract();
    _apolloClient.cache.restore({ ...existingCache, ...initialState });
  }

  if (typeof window === 'undefined') return _apolloClient;

  if (!client) client = _apolloClient;
  return _apolloClient;
}

export function useApollo(initialState) {
  const store = useMemo(() => initializeApollo(initialState), [initialState]);
  return store;
}
