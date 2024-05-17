import { initializeTimes, updateTimes } from './App'; // Adjust the import path accordingly

describe('initializeTimes', () => {
  it('should return the correct initial times', () => {
    const expectedTimes = [
      "17:00",
      "18:00",
      "19:00",
      "20:00",
      "21:00",
      "22:00",
    ];
    const result = initializeTimes();
    expect(result).toEqual(expectedTimes);
  });
});

describe('updateTimes', () => {
  it('should return the same state for unknown action type', () => {
    const initialState = [
      "17:00",
      "18:00",
      "19:00",
      "20:00",
      "21:00",
      "22:00",
    ];
    const action = { type: 'UNKNOWN_ACTION', payload: "2024-05-17" };
    const result = updateTimes(initialState, action);
    expect(result).toEqual(initialState);
  });

  it('should return the same state for UPDATE_TIMES action', () => {
    const initialState = [
      "17:00",
      "18:00",
      "19:00",
      "20:00",
      "21:00",
      "22:00",
    ];
    const action = { type: 'UPDATE_TIMES', payload: "2024-05-17" };
    const result = updateTimes(initialState, action);
    expect(result).toEqual(initialState);
  });
});
