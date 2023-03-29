const initialState = 20;
export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_NUMBER":
      return {
        ...state,
        numbers: [...state.numbers, action.payload],
      };
    case "REMOVE_NUMBER":
      return {
        ...state,
        numbers: state.numbers.filter(
          (number, index) => index !== action.payload
        ),
      };
    default:
      return state;
  }
};
