import React from "react";
import styled from "styled-components";

const TableBody = styled.tbody`
  display: flex;
  width: auto;
  border: 2px solid gray;
`;

const TableData = styled.td`
  display: flex;
  color: gray;
  font-size: 22px;
  font-weight: bold;
  font-family: "KoHo", sans-serif;
  text-decoration: none;
`;

const WeatherImage = styled.img`
  height: 64px;
  width: 64px;
`;

const WindPointerImage = styled.img`
  height: 24px;
  width: 24px;
  margin-top: 20px;
  transform: rotate(${props => props.rotateDegree}deg);
`;

const DetailedCity = ({
  id,
  applicable_date,
  weather_state_abbr,
  wind_direction_compass,
  weather_state_name,
  wind_direction,
  wind_speed,
  min_temp,
  the_temp,
  max_temp
}) => {
  return (
    <TableBody>
      <TableData>Date: {applicable_date} </TableData>
      <TableData>
        <WeatherImage
          src={require(`../images/${weather_state_abbr}.svg`)}
          alt={weather_state_name}
        />
      </TableData>
      <TableData>
        Wind direction:
        <WindPointerImage
          src={require(`../images/windarrow.svg`)}
          alt={wind_direction_compass}
          rotateDegree={wind_direction.toFixed(0)}
        />
      </TableData>
      <TableData>{wind_speed.toFixed(0)}m/s </TableData>
      <TableData>Min temp: {min_temp.toFixed(1)}°C </TableData>
      <TableData>Temp: {the_temp.toFixed(1)}°C </TableData>
      <TableData>Max temp: {max_temp.toFixed(1)}°C </TableData>
    </TableBody>
  );
};

export default DetailedCity;
