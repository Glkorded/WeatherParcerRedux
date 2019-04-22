import { combineReducers } from 'redux';
import { dataFetchSuccess, detailedDataFetchSuccess, dataFetchFail, dataIsFetching } from './fetchReducer'

export default combineReducers({
  dataFetchSuccess,
  dataFetchFail,
  dataIsFetching,
  detailedDataFetchSuccess,
})