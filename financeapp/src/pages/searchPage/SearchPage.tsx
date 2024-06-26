import React, { ChangeEvent, SyntheticEvent, useState } from 'react'
import ListPortfolio from '../../components/portfolio/listPorftolio/ListPortfolio'
import CardList from '../../components/cardList/CardList'
import { CompanySearch } from '../../company'
import { searchCompanies } from '../../api'
import Search from '../../components/search/Search'
import Hero from '../../components/hero/Hero'

interface Props  {
}

const SearchPage = (props: Props) => {
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
      if (exist) return;
      const updatePortfolio = [...portfolioValues, e.target[0].value];
      setPortfolioValues(updatePortfolio);
    }
  
    const onPortfolioDelete = (e: any) => {
      e.preventDefault();
      const removed = portfolioValues.filter((value) => {
        return value !== e.target[0].value;
      });
      setPortfolioValues(removed);
    }
    
  return (
    <>
      <Search onSearchSubmit={onSearchSubmit} search={search} handleSearchChange={handleSearchChange} />
      <ListPortfolio portfolioValues = {portfolioValues} onPortfolioDelete = {onPortfolioDelete}></ListPortfolio>
      <CardList searchResult={searchResult} onPortfolioCreate={onPortfolioCreate} />
        {serverError ? <div> Error Type:{serverError}</div>:null}
    </>
  )
}

export default SearchPage