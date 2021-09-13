

const initialState = {
  medications: [],
  loading: false
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
        medications: [...state.medications, ...action.payload],
      };
    case "medications/remove/fulfilled":
      return {
        ...state,
        medications: state.medications.filter((item) => {
          if (item != action.payload) {
            return item;
          }
        }),
      };
    default:
      return state;
  }
}

export const getMedications = (currentPage, setCurrentPage, setFetching) => {
  return async (dispatch) => {
    try {
      // dispatch({ type: "medications/fetch/pending"});
      console.log('fetch')
      const response = await fetch(`/medications/?limit=10&page=${currentPage}`);
      const json = await response.json();

      await dispatch({ type: "medications/fetch/fulfilled", payload: json });
      await setCurrentPage(prevState => prevState + 1)

    } catch (e) {
      dispatch({ type: "medications/fetch/rejected", error: e.toString() });
    } finally {
      return setFetching(false)
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
      const response = await fetch("/medications", {
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

export const removeMedication = (id) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`/medications/${id}`, {
        method: "DELETE",
      });
      const json = await response.json();

      dispatch({ type: "medications/remove/fulfilled", payload: id });
    } catch (e) {
      dispatch({ type: "medications/remove/rejected", error: e.toString() });
    }
  };
};
