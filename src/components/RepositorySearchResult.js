import * as React from "react";
import { Link } from "react-router-dom";
import { getRepositoryRoute } from "../constants/routes";
import styled from 'styled-components';

/**The results should be displayed as cards or a list, containing at least the following info:
    Full name | description | Stargazers Count | Open issues Count | match score
 */

const Card = styled.div`
    height: 20%;
    overflow: auto;
    border: 1px solid rgba(0, 0, 0, 0.0975);
    border-radius: 10px;
    box-sixing: border-box;
    margin: 10px;
    color: black;
    padding: 20px;
    h1 {
      margin: 0;
      padding: 0;
    }
    b {
        margin: 10px;
    }
    &:hover {
        background-color: lightblue;
    }
`;
const RepositorySearchResult = ({ searchResult }) => {
  let detailPath = getRepositoryRoute(searchResult.id);
  return (
    <Link to={{ pathname: detailPath, state: { result: searchResult } }} style={{ textDecoration: 'none' }}>
      <Card>
        <h1>{searchResult.full_name}</h1>
        <p>{searchResult.description}</p>
        <b>Stargazers Count:</b> {searchResult.stargazers_count}
        <b>Open Issues Count:</b> {searchResult.open_issues_count}
        <b>Match Score:</b> {searchResult.score}
      </Card>
    </Link>
  );
};

export default RepositorySearchResult;
