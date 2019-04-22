import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Footer = styled.nav`
  margin-top: 90px;
  width: 100%;
  height: auto;
  background-color: transparent;
  position: fixed;
  z-index: 1;
  bottom: 0;
`;

const List = styled.ul`
  text-align: center;
`;

const ListElement = styled.li`
  display: inline;
  padding: 30px;
`;

const LinkElement = styled(Link)`
  color: gray;
  font-size: 22px;
  font-weight: bold;
  font-family: "KoHo", sans-serif;
  color: #c88c32;
  text-decoration: none;
  text-shadow: 0 0 1px black;
  :hover {
    color: gray;
    text-decoration: none;
  }
`;

const Navigation = () => {
  return (
    <Footer>
      <List>
        <ListElement>
          <LinkElement to="/">Search</LinkElement>
        </ListElement>
        <ListElement>
          <LinkElement to="/favourites/">Favourites</LinkElement>
        </ListElement>
      </List>
    </Footer>
  );
};

export default Navigation;
