const initialState = {
  medications: [],
  loading: false,
};

export default function medications(state = initialState, action) {
  switch (action.type) {
    case "medications/fetch/pending":
      return {
        ...state,
        loading: true
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
      dispatch({type: "medications/fetch/pending"})
      const response = await fetch("http://localhost:4000/medications");
      const json = await response.json();

      dispatch({ type: "medications/fetch/fulfilled", payload: json });
    } catch (e) {
      dispatch({ type: "medications/fetch/rejected", error: e.toString() });
    }
  };
};

export const addMedication = (
  name,
  price,
  description,
  category,
  img,
  expiryDate,
  hasRecipe
) => {
  return async (dispatch) => {
    try {
      console.log(description)
      const response = await fetch("http://localhost:4000/medications", {
        method: "POST",
        body: JSON.stringify({
          name,
          price,
          descr: description,
          category,
          img,
          expiryDate,
          hasRecipe,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const json = await response.json();

      dispatch({ type: "medications/add-medication/fulfilled", payload: json });
    } catch (e) {
      dispatch({
        type: "categories/add-medication/rejected",
        error: e.toString(),
      });
    }
  };
};
