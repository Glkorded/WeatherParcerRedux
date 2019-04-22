import React from "react";
import styled from "styled-components";

const Data = styled.div`
  font-size: 18px;
  font-weight: bold;
  font-family: "KoHo", sans-serif;
  text-decoration: none;
`;

const SingleCity = ({
  location_type,
  latt_long,
  handleFavourite,
  buttonName,
  buttonDisabled
}) => {
  return (
    <div>
      <Data>Location type: {location_type}</Data>
      <Data>It's coordinates are {latt_long}</Data>
      <Data>
        <button disabled={buttonDisabled} onClick={handleFavourite}>
          {buttonName}
        </button>
      </Data>
    </div>
  );
};
export default SingleCity;
