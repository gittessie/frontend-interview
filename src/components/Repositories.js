import * as React from "react";
import RepositorySearchResults from "./RepositorySearchResults";
import styled from 'styled-components';

const Input = styled.input`
  height: 2rem;
  width: 50%;
  min-width: 200px;
  border: 1px solid black;
  box-sixing: border-box;
  border-radius: 5px;
  margin: 5px;
`;

/**
 * Once given an input, fetch the repositories we searched
 * via:
 *
 * https://api.github.com/search/repositories?q={}
 *
 * This should not kickoff a fetch for every keystroke, but rather when
 * typing stops.
 *
 * Documentation for the search api is here:
 * https://developer.github.com/v3/search/#search-repositories
 */
const debounce = (func, waitTime) => {
  let timeout;
  const debouncedFunc = (...args) =>{
      clearTimeout(timeout);
      const context = this; 
      timeout = setTimeout(()=>{
        func.apply(context, args)
      }, waitTime);
    
  }
  return debouncedFunc;
}

const Repositories = () => {
  const [searchResults, setSearchResults] = React.useState(undefined);

  const searchRepositories = async (query) => {
    let response = await fetch(`https://api.github.com/search/repositories?q=${query}`)
    if (response.ok) { 
      let json = await response.json();
      setSearchResults(json.items);
    } else {
      alert("Error: " + response.status);
    }
  }

  const debounceSearchRepositories = debounce(searchRepositories, 1000); // wait for the user to not type for two seconds

  const handleSearchChange = e => {
    debounceSearchRepositories(e.target.value);
  }

  return (
    <div>
      <Input name="search-terms" onChange={(e) => handleSearchChange(e)}/>
      {searchResults ? (
        <RepositorySearchResults searchResults={searchResults} />
      ) : (
        <div style={{ fontSize: '20px' }}>Enter some text to search github repositories</div>
      )}
    </div>
  );
};

export default Repositories;
