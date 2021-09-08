const initialState = {
  requests: [],
  loading: false,
  error: null
}

export default function (state = initialState, action) {
  switch (action.type) {
    case "medications/fetch/fulfilled":
      return {
        ...state,
        requests: action.payload
      }
    case "medications/fetch/rejected":
      return {
        ...state,
        error: action.error
      }
    case "categories/fetch/rejected":
      return {
        ...state,
        error: action.error
      }
    default:
      return state
  }
}

export const fetchRequest = (medicationId, name, tel, email, message) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`http://localhost:4000/requests/${medicationId}`, {
        method: "POST",
        body: JSON.stringify({ name, tel, email, message, medicationId}),
        headers: { "Content-type": "application/json" }
      });
      const json = await response.json();

      if (json.error) {
        dispatch({ type: "medications/fetch/rejected", error: json.error });
      } else {
        dispatch({ type: "medications/fetch/fulfilled", payload: json });
      }

    } catch (e) {
      dispatch({ type: "categories/fetch/rejected", error: e.toString() });
    }
  };
}