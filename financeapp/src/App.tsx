import { ChangeEvent, SyntheticEvent, useState } from 'react';
import './App.css';
import CardList from './components/cardList/CardList';
import Search from './components/search/Search';
import { CompanySearch } from './company';
import { searchCompanies } from './api';
import ListPortfolio from './components/portfolio/listPorftolio/ListPortfolio';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';


function App() {
  const [search, setSearch] = useState<string>("");
  const [portfolioValues, setPortfolioValues] = useState<string[]>([])
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
  const onPortfolioCreate = (e: any) => {
    e.preventDefault();
    const exist = portfolioValues.find((value) => value === e.target[0].value);
    if(exist) return ;
    const updatePortfolio = [...portfolioValues,e.target[0].value];
    setPortfolioValues(updatePortfolio);               
  }

  const onPortfolioDelete = (e: any) => {
    e.preventDefault();
    const removed = portfolioValues.filter((value) => 
    {
      return value !== e.target[0].value;
    });
    setPortfolioValues(removed);            
  }

  return (
    <div className="App">
      <Navbar></Navbar>
      <Hero></Hero>
      <Search onSearchSubmit={onSearchSubmit} search={search} handleSearchChange={handleSearchChange} />
      <ListPortfolio portfolioValues = {portfolioValues} onPortfolioDelete = {onPortfolioDelete}></ListPortfolio>
      <CardList searchResult={searchResult} onPortfolioCreate={onPortfolioCreate} />
      {serverError}
    </div>
  );
}

export default App;
