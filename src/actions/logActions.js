import {
  SET_LOADING,
  GET_LOGS,
  LOGS_ERROR,
  ADD_LOG,
  DELETE_LOG,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_LOG,
  SEARCH_LOGS,
  CLEAR_LOGS
} from "./types";

// Get LOGS from server
export const getLogs = () => async dispatch => {
  try {
    dispatch(setLoading());
    const res = await fetch("/logs");
    const data = await res.json();

    dispatch({
      type: GET_LOGS,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.data
    });
  }
};

// Add log to DB
export const addLog = log => async dispatch => {
  try {
    dispatch(setLoading());
    const res = await fetch("/logs", {
      method: "POST",
      body: JSON.stringify(log),
      headers: {
        "Content-Type": "application/json"
      }
    });
    const data = await res.json();
    dispatch({
      type: ADD_LOG,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.data
    });
  }
};

// Delete log from DB

export const deleteLog = id => async dispatch => {
  try {
    dispatch(setLoading());
    await fetch(`/logs/${id}`, {
      method: "DELETE"
    });

    dispatch({
      type: DELETE_LOG,
      payload: id
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.data
    });
  }
};

// Edit log in the DB
export const updateLog = log => async dispatch => {
  try {
    dispatch(setLoading());
    const res = await fetch(`/logs/${log.id}`, {
      method: "PUT",
      body: JSON.stringify(log),
      headers: {
        "Content-Type": "application/json"
      }
    });
    const data = await res.json();
    dispatch({
      type: UPDATE_LOG,
      payload: data
    })
    dispatch(clearCurrent());
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.data
    });
  }
};

// Set current log
export const setCurrent = id => async dispatch => {
  try {
    dispatch(setLoading());
    const res = await fetch(`/logs/${id}`);
    const data = await res.json();

    dispatch({
      type: SET_CURRENT,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.data
    });
    dispatch(clearCurrent());
  }
};

// Clear current log
export const clearCurrent = () => {
  return {
    type: CLEAR_CURRENT
  };
};

export const searchLogs = (search) => async dispatch => {
  dispatch(setLoading());
  dispatch({
    type: SEARCH_LOGS,
    payload: search,
  });
}

export const clearLogs = () => async dispatch => {
  dispatch({
    type: CLEAR_LOGS,
  })
}

// Internal functon to set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};
