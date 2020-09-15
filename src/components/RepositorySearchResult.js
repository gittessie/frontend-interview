import * as React from "react";

/**The results should be displayed as cards or a list, containing at least the following info:
    Full name | description | Stargazers Count | Open issues Count | match score
 */
const RepositorySearchResult = ({searchResult}) => {
  return (
    <div>
        <h1>{searchResult.full_name}</h1>
        <p>{searchResult.description}</p>
        <h5>Stargazers Count:</h5>
        <p>{searchResult.stargazers_count}</p>
        <h5>Open Issues Count:</h5>
        <p>{searchResult.open_issues_count}</p>
        <h5>Match Score:</h5>
        <p>{searchResult.score}</p>
    </div>
  );
};

export default RepositorySearchResult;
