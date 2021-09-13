const initialState = {
  requests: [],
  loading: false,
  error: null,
};

export default function requests(state = initialState, action) {
  switch (action.type) {
    case "requestsGet/fetch/pending":
      return {
        ...state,
        loading: true,
      };
    case "requests/fetch/pending":
      return {
        ...state,
        loading: true,
      };
    case "requests/fetch/fulfilled":
      return {
        ...state,
        requests: action.payload,
        loading: false,
      };
    case "requests/fetch/rejected":
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    case "requestsGet/fetch/fulfilled":
      return {
        ...state,
        requests: action.payload,
        loading: false,
      };
    case "acceptRequest/fetch/pending":
      return {
        ...state,
        requests: state.requests.map((item) => {
          if (item.medicationId == action.payload) {
            return {
              ...item,
              isAccept: true,
            };
          }
          return item;
        }),
      };
    // case "acceptRequest/fetch/fulfilled":
    //   return {
    //     ...state,
    //     // requests: state.requests.filter((item) => {
    //     //   if (item.medicationId != action.payload) {
    //     //     return item;
    //     //   }
    //     // }),
    //   };
    default:
      return state;
  }
}

export const fetchRequest = (medicationId, name, tel, email, message) => {
  return async (dispatch) => {
    try {
      dispatch({ type: "requests/fetch/pending" });
      const response = await fetch(`/requests/${medicationId}`, {
        method: "POST",
        body: JSON.stringify({ name, tel, email, message, medicationId }),
        headers: { "Content-type": "application/json" },
      });

      const json = await response.json();

      if (json.error) {
        dispatch({ type: "requests/fetch/rejected", error: json.error });
      } else {
        dispatch({ type: "requests/fetch/fulfilled", payload: json });
      }
    } catch (e) {
      dispatch({ type: "requests/fetch/rejected", error: e.toString() });
    }
  };
};

export const fetchRequestGet = (id) => {
  return async (dispatch) => {
    try {
      dispatch({ type: "requestsGet/fetch/pending" });
      const response = await fetch(`/requests/${id}`);
      const json = await response.json();
      if (json.error) {
        dispatch({ type: "requestsGet/fetch/rejected", error: json.error });
      } else {
        dispatch({ type: "requestsGet/fetch/fulfilled", payload: json });
      }
    } catch (e) {
      dispatch({ type: "requestsGet/fetch/rejected", error: e.toString() });
    }
  };
};

export const acceptRequest = (id, medicationId) => {
  return async (dispatch) => {
    try {
      dispatch({ type: "acceptRequest/fetch/pending", payload: medicationId });
      const response = await fetch(`/requests/${id}/accept`, {
        method: "PATCH",
        body: JSON.stringify({
          id,
        }),
        headers: { "Content-type": "application/json" },
      });
      const json = await response.json();
      if (json.error) {
        dispatch({ type: "acceptRequest/fetch/rejected", error: json.error });
      } else {
        dispatch({
          type: "acceptRequest/fetch/fulfilled",
          payload: medicationId,
        });
      }
    } catch (e) {
      dispatch({ type: "acceptRequest/fetch/rejected", error: e.toString() });
    }
  };
};
