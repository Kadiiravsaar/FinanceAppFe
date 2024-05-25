import { ChangeEvent, SyntheticEvent, useState } from 'react';
import './App.css';
import CardList from './components/cardList/CardList';
import Search from './components/search/Search';
import { CompanySearch } from './company';
import { searchCompanies } from './api';


function App() {
  const [search, setSearch] = useState<string>("");
  const [searchResult, setSearchResult] = useState<CompanySearch[]>([])
  const [serverError, setServerError] = useState<string>("")

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    console.log(e);
  }

  const onSearchSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();
    const result = await searchCompanies(search)
    if (typeof result === "string") {
      setServerError(result);
    }
    else if (Array.isArray(result.data)) {
      setSearchResult(result.data)
    }
    console.log(searchResult);

  }
  const onPortfolioCreate = (e: SyntheticEvent) => {
    e.preventDefault();
    console.log(e);
  }
  return (
    <div className="App">
      <Search onSearchSubmit={onSearchSubmit} search={search} handleSearchChange={handleSearchChange} />
      <CardList searchResult={searchResult} onPortfolioCreate={onPortfolioCreate} />
      {serverError}
    </div>
  );
}

export default App;
