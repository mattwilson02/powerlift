import { gql } from 'graphql-request';
import { createApi } from '@reduxjs/toolkit/dist/query/react';
import { graphqlRequestBaseQuery } from '@rtk-query/graphql-request-base-query';

export const graphqlApi = createApi({
  baseQuery: graphqlRequestBaseQuery({
    url: 'https://amazing-maggot-25.hasura.app/v1/graphql',
    prepareHeaders: headers => {
      headers.set(
        'x-hasura-admin-secret',
        'KnMCmNqzi8344BLciixWvJKyN8VusPcL72VtjDHqVxzWsrgVpGFc2LbOf4Ueajix'
      );
      return headers;
    }
  }),
  endpoints: build => ({
    getNumbers: build.query<any, any>({
      query: () => ({
        document: gql`
          query {
            sbd_max {
              Name
              Squat
              Bench
              Deadlift
            }
          }
        `
      })
    })
  })
});

export const { useGetNumbersQuery } = graphqlApi;
