import {
  ADD_NEW_REMINDER,
  UPDATE_REMINDER,
  REMOVE_REMINDER,
  PREVIOUS_MONTH,
  NEXT_MONTH
} from "../constants/ActionType";

export const addNewReminder = (weekIndex, weekdayIndex) => ({
  type: ADD_NEW_REMINDER,
  payload: { weekIndex, weekdayIndex }
});

export const editReminder = (weekIndex, weekdayIndex, reminder) => ({
  type: UPDATE_REMINDER,
  payload: { weekIndex, weekdayIndex, reminder }
});

export const removeReminder = (weekIndex, weekdayIndex, reminder) => ({
  type: REMOVE_REMINDER,
  payload: { weekIndex, weekdayIndex, reminder }
});

export const previousMonth = () => ({
  type: PREVIOUS_MONTH
});

export const nextMonth = () => ({
  type: NEXT_MONTH
});
