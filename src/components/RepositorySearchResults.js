import * as React from "react";
import RepositorySearchResult from "./RepositorySearchResult";

const RepositorySearchResults = ({searchResults}) => {
  return (
    <div>{
        searchResults.length > 0? 
        searchResults.map(result => {return <RepositorySearchResult key={result.id} searchResult={result}/>}) : 
        <p>No results found.</p>
    }
    </div>
  );
};

export default RepositorySearchResults;
