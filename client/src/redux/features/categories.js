const initialState = {
  categories: [],
  loading: false,
};

export default function categories(state = initialState, action) {
  switch (action.type) {
    case "categories/fetch/fulfilled":
      return {
        ...state,
        loading: false,
        categories: action.payload,
      };
    default:
      return state;
  }
}

export const fetchAllCategories = () => {
  return async (dispatch) => {
    try {
      const response = await fetch("/categories");
      const json = await response.json();

      dispatch({ type: "categories/fetch/fulfilled", payload: json });
    } catch (e) {
      dispatch({ type: "categories/fetch/rejected", error: e.toString() });
    }
  };
};
