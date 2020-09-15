import * as React from "react";
import { Link } from "react-router-dom";
import {
  REPOSITORIES_ROUTE,
  PROFILE_ROUTE,
  HOME_ROUTE
} from "../constants/routes";
import styled from 'styled-components';

const routes = [
  {
    label: "Home",
    to: HOME_ROUTE
  },
  {
    label: "Profile",
    to: PROFILE_ROUTE
  },
  {
    label: "Repositories",
    to: REPOSITORIES_ROUTE
  }
];

const Nav = styled.nav`
  background-color: #fff;
  color: #367588;
  border-bottom: 1px solid rgba(0, 0, 0, 0.0975); 
  width: 100%;
  margin: 0 auto;
  font-size: 24px;
  height: 40px;
  box-sixing: border-box;
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
  li {
    display: inline;
  }
  a {
    color: #367588;
    padding: 10px;
  }
  a:hover{
    font-weight:bold;
  }
`;

const Navigation = () => {
  return (
    <Nav>
      <ul>
        {routes.map(({ to, label }) => {
          return (
            <li key={to}>
              <Link to={to}>{label}</Link>
            </li>
          );
        })}
      </ul>
    </Nav>
  );
};

export default Navigation;
