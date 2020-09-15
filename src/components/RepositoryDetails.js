import * as React from "react";
import { useLocation } from "react-router-dom";

/**The results should be displayed as cards or a list, containing at least the following info:
    Full name | description | Stargazers Count | Open issues Count | match score
 */
const RepositorySearchResult = () => {
    const location = useLocation();
    const searchResult = location.state.result;
  return (
    <div>
        <h1>{searchResult.full_name}</h1>
        <p>{searchResult.description}</p>
        <b>Stargazers Count:</b>
        <p>{searchResult.stargazers_count}</p>
        <b>Open Issues Count:</b>
        <p>{searchResult.open_issues_count}</p>
        <b>Match Score:</b>
        <p>{searchResult.score}</p>

        <p><a href={`${searchResult.html_url}/issues`} target="_blank">Issues</a></p>
        <p><a href={`${searchResult.html_url}/pulls`} target="_blank">Pull Requests</a></p>

        <b>License:</b>
        <p>{searchResult.license?.name}</p>
        <p>{searchResult.license?.spdx_id}</p>
        <p>{searchResult.license?.url}</p>
    </div>
  );
};

export default RepositorySearchResult;
