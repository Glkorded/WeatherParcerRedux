export function dataFetchFail(state = false, action) {
  switch (action.type) {
    case 'DATA_FETCH_FAIL':
      return action.payload;

    default:
      return state;
  }
}

export function dataIsFetching(state = false, action) {
  switch (action.type) {
    case 'DATA_IS_FETCHING':
      return action.payload;

    default:
      return state;
  }
}

export function detailedDataFetchSuccess(state = [], action) {
  switch (action.type) {
    case 'DETAILED_DATA_FETCH_SUCCESS':
      return action.payload;

    default:
      return state;
  }
}

export function dataFetchSuccess(state = [], action) {
  switch (action.type) {
    case 'DATA_FETCH_SUCCESS':
      return action.payload;

    default:
      return state;
  }
}