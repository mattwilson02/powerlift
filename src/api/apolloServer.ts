import { gql } from '@apollo/client';

export const GET_MY_SBD_MAX = gql`
  query sbd_max {
    sbd_max(where: { id: { _eq: 1 } }) {
      Name
      Squat
      Bench
      Deadlift
      id
    }
  }
`;

export const GET_MY_WORKOUT = gql`
  query workout {
    workout {
      name
      compound
      accessories
    }
  }
`;
