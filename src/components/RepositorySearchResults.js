import * as React from "react";
import RepositorySearchResult from "./RepositorySearchResult";
import styled from 'styled-components';

const Results = styled.div`
  height: calc(100vh - 80px - 2rem);
  overflow: auto;
  box-sixing: border-box;
`;
const RepositorySearchResults = ({searchResults}) => {
  return (
    <Results>{
        searchResults.length > 0? 
        searchResults.map(result => {return <RepositorySearchResult key={result.id} searchResult={result}/>}) : 
        <p>No results found.</p>
    }
    </Results>
  );
};

export default RepositorySearchResults;
