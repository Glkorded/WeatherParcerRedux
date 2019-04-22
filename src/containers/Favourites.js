import React, { Component } from "react";
import SingleCity from "../components/SingleCity";
import { Link } from "react-router-dom";
import styled from "styled-components";

const DataLink = styled(Link)`
  font-size: 18px;
  font-weight: bold;
  font-family: "KoHo", sans-serif;
  text-decoration: none;
  color: #c88c32;
`;
const Title = styled.h1`
  position: sticky;
  margin: 0px;
  color: gray;
  font-weight: bold;
  font-family: "KoHo", sans-serif;
  text-align: center;
  top: 0px;
  z-index: 1;
  background: #edeef0;
`;

const SubTitle = styled.h2`
  position: sticky;
  margin: 0px;
  color: gray;
  font-weight: bold;
  font-family: "KoHo", sans-serif;
  text-align: center;
  top: 41px;
  z-index: 1;
  background: #edeef0;
`;

const Wrapper = styled.div`
    display: flex;
    position: absolute;
    left: calc(50% - 228px);
    flex-direction: column;
    text-align: center;
    height: calc(100% - 61px);
    overflow: auto;
`;

const Input = styled.input`
    position: sticky;
    top: 72px;
    z-index: 1;
    background: #edeef0;
`;

class Favourites extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [], inputField: "" };
  }

  componentDidMount() {
    if (JSON.parse(localStorage.getItem("favouriteData")) !== null) {
      this.setState({
        data: JSON.parse(localStorage.getItem("favouriteData"))
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.data !== prevState.data) {
      localStorage.setItem("favouriteData", JSON.stringify(this.state.data));
    }
  }

  handleChange = e => {
    this.setState({
      inputField: e.target.value
    });
  };

  filterFunction = elem => {
    if (this.state.inputField !== "") {
      if (
        elem.title.toLowerCase().includes(this.state.inputField.toLowerCase())
      ) {
        return true;
      }
    } else {
      return elem.title;
    }
  };

  render() {
    return (
      <Wrapper>
        <Title>FAVOURITES</Title>
        <SubTitle>
          Feel free to work with your favourited cities!
        </SubTitle>
        <Input onChange={this.handleChange} className="input" />
        <div>
          {this.state.data.filter(this.filterFunction).map((single, index) => (
            <div key={single.woeid}>
              <DataLink to={`../detailed_search/${single.woeid}`}>
                {single.title}
              </DataLink>
              <SingleCity
                key={single.woeid}
                location_type={single.location_type}
                latt_long={single.latt_long}
                buttonName="Unfavourite me!"
                buttonDisabled={false}
                handleFavourite={() => {
                  const semiData = this.state.data.slice();
                  semiData.splice(index, 1);
                  this.setState({ data: semiData });
                }}
              />
            </div>
          ))}
        </div>
      </Wrapper>
    );
  }
}

export default Favourites;
