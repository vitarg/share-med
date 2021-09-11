const initialState = {
  medications: [],
  loading: false,
};

export default function medications(state = initialState, action) {
  switch (action.type) {
    case "medications/fetch/pending":
      return {
        ...state,
        loading: true,
      };
    case "medications/fetch/fulfilled":
      return {
        ...state,
        loading: false,
        medications: action.payload,
      };
    default:
      return state;
  }
}

export const getMedications = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: "medications/fetch/pending" });
      const response = await fetch("http://localhost:4000/medications");
      const json = await response.json();

      dispatch({ type: "medications/fetch/fulfilled", payload: json });
    } catch (e) {
      dispatch({ type: "medications/fetch/rejected", error: e.toString() });
    }
  };
};
