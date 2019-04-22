import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchDetailedData } from "../actions/index";
import DetailedCity from "../components/DetailedCity";
import styled from "styled-components";

const Table = styled.table`
  display: flex;
  position: absolute;
  left: calc(50% - 356px);
  top: calc(50% - 250px);
  flex-direction: column;
  background: #fffefe;
  width: 762px;
  border: 4px solid gray;
`;

class DetailedCitySearch extends Component {
  componentDidMount() {
    this.props.fetchDataUrl(this.props.match.params.cityId);
  }

  render() {
    if (this.props.dataFetchFail) {
      return <p>Sorry! There was an error loading the items</p>;
    }

    if (this.props.dataIsFetching) {
      return <p>Loading…</p>;
    }
    return (
      <div>
        <Table>
          {this.props.detailedDataFetchSuccess.map(detailed => (
            <DetailedCity
              key={detailed.id}
              applicable_date={detailed.applicable_date}
              weather_state_name={detailed.weather_state_name}
              weather_state_abbr={detailed.weather_state_abbr}
              wind_speed={detailed.wind_speed}
              wind_direction={detailed.wind_direction}
              min_temp={detailed.min_temp}
              the_temp={detailed.the_temp}
              max_temp={detailed.max_temp}
            />
          ))}
        </Table>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    detailedDataFetchSuccess: state.detailedDataFetchSuccess,
    dataFetchFail: state.dataFetchFail,
    dataIsFetching: state.dataIsFetching
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchDataUrl: url => dispatch(fetchDetailedData(url))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DetailedCitySearch);
