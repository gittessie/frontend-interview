import * as React from "react";
import RepositorySearchResult from "./RepositorySearchResult";

const RepositorySearchResults = ({searchResults}) => {
  return (
    <div>
        {searchResults.map(result => {return <RepositorySearchResult key={result.id} searchResult={result}/>})}
    </div>
  );
};

export default RepositorySearchResults;
