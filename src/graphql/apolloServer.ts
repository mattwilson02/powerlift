import { gql } from '@apollo/client';

export const GET_MY_SBD_MAX = gql`
  query sbd_max($id: Int!) {
    sbd_max(where: { id: { _eq: $id } }) {
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

export const CREATE_WORKOUT = gql`
  mutation Workout(
    $name: String!
    $compound: jsonb!
    $id: Int!
    $accessories: jsonb!
  ) {
    insert_workout_one(
      object: {
        name: $name
        compound: $compound
        accessories: $accessories
        id: $id
      }
    ) {
      id
    }
  }
`;

export const DELETE_WORKOUT = gql`
  mutation DeleteWorkout($id: Int) {
    delete_workout(where: { id: { _eq: $id } }) {
      returning {
        id
      }
    }
  }
`;
