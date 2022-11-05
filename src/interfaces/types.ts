export type KeyValues = {
  key: number;
  value: string;
};

export interface LiftStats extends KeyValues {
  name: string;
}

export type Workout = {
  id: number;
  accessories: {
    name: string;
    reps?: string;
    sets?: string;
    rpe?: string;
  };
  compound: {
    name: string;
    rpe: string;
    sets: string;
  };
  name: string;
};
