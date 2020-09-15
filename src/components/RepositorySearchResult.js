import * as React from "react";
import { Link } from "react-router-dom";
import { getRepositoryRoute } from "../constants/routes";

/**The results should be displayed as cards or a list, containing at least the following info:
    Full name | description | Stargazers Count | Open issues Count | match score
 */
const RepositorySearchResult = ({ searchResult }) => {
  let detailPath = getRepositoryRoute(searchResult.id);
  return (
    <div>
      <Link to={{ pathname: detailPath, state: { result: searchResult } }}>
        <h1>{searchResult.full_name}</h1>
        <p>{searchResult.description}</p>
        <b>Stargazers Count:</b> {searchResult.stargazers_count}
        <b>Open Issues Count:</b> {searchResult.open_issues_count}
        <b>Match Score:</b> {searchResult.score}
      </Link>
    </div>
  );
};

export default RepositorySearchResult;
