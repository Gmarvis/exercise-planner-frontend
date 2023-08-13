import { WorkoutContext } from "../context/workoutContet";

import { useContext } from "react";

export const useWorkoutsContext = () => {
  const context = useContext(WorkoutContext);

  if (!context) {
    throw Error(
      "useWorkoutContext must be used in side a workoutsContextProvider"
    );
  }

  return context;
};
