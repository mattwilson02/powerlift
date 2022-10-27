import { gql } from '@apollo/client';

export const GET_MY_SBD_MAX = gql`
  query sbd_max {
    sbd_max {
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
    }
  }
`;
