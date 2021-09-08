const initialState = {
  medications: [],
  loading: false,
};

export default function medications(state = initialState, action) {
  switch (action.type) {
    case "medications/fetch/fulfilled":
      return {
        ...state,
        loading: false,
        medications: action.payload,
      };
    case "medications/single/fulfilled":
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
      const response = await fetch("http://localhost:4000/medications");
      const json = await response.json();

      dispatch({ type: "medications/fetch/fulfilled", payload: json });
    } catch (e) {
      dispatch({ type: "categories/fetch/rejected", error: e.toString() });
    }
  };
};

export const getSingleMedication = (id) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`http://localhost:4000/medications/${id}`);
      const json = await response.json();

      dispatch({ type: "medications/single/fulfilled", payload: json });
    } catch (e) {
      dispatch({ type: "medications/single/rejected", error: e.toString() });
    }
  };
};
