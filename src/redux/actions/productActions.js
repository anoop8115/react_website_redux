export const addNumber = (number) => ({
  type: ADD_NUMBER,
  payload: number,
});

export const removeNumber = (index) => ({
  type: REMOVE_NUMBER,
  payload: index,
});
