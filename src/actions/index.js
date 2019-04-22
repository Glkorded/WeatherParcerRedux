export const DATA_FETCH_SUCCESS = "DATA_FETCH_SUCCESS";
export const DETAILED_DATA_FETCH_SUCCESS = "DETAILED_DATA_FETCH_SUCCESS";
export const DATA_FETCH_FAIL = "DATA_FETCH_FAIL";
export const DATA_IS_FETCHING = "DATA_IS_FETCHING";

const dataIsFetching = bool => ({
  type: DATA_IS_FETCHING,
  payload: bool
});

const dataFetchFail = bool => ({
  type: DATA_FETCH_FAIL,
  payload: bool
});

const dataFetchSuccess = data => ({
  type: DATA_FETCH_SUCCESS,
  payload: data
});

const detailedDataFetchSuccess = data => ({
  type: DETAILED_DATA_FETCH_SUCCESS,
  payload: data
});

export function fetchDetailedData(urlName) {
  return dispatch => {
    dispatch(dataIsFetching(true));
    const proxy = "https://cors-anywhere.herokuapp.com/";
    const url = "https://www.metaweather.com/api";
    fetch(`${proxy}${url}/location/${urlName}`)
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        dispatch(dataIsFetching(false));
        return response;
      })
      .then(response => response.json())
      .then(detailedData =>
        dispatch(detailedDataFetchSuccess(detailedData.consolidated_weather))
      )
      .catch(() => dispatch(dataFetchFail(true)));
  };
}

export function fetchData(name) {
  return dispatch => {
    dispatch(dataIsFetching(true));
    const proxy = "https://cors-anywhere.herokuapp.com/";
    const url = "https://www.metaweather.com/api";
    fetch(`${proxy}${url}/location/search/?query=${name}`)
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        dispatch(dataIsFetching(false));
        return response;
      })
      .then(response => response.json())
      .then(data => dispatch(dataFetchSuccess(data)))
      .catch(() => dispatch(dataFetchFail(true)));
  };
}
