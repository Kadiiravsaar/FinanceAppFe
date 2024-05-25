import React from 'react'
import Card from '../card/Card'
import { CompanySearch } from '../../company'
import { v4 as uuidv4 } from "uuid"


interface Props {
  searchResult: CompanySearch[];
}

const CardList: React.FC<Props> = ({ searchResult }: Props) => {
  return (
    <>
      {searchResult.length > 0  ? (
        searchResult.map((result) => {
          return <Card id={result.symbol} key={uuidv4()} searchResult={result} ></Card>
        })

      ) : (
        <h1> No Result </h1>
      ) }
      {/* {
        searchResult.length > 0 ?
          (searchResult.map((result) => {
            return <Card id={result.Symbol} key={uuidv4()} searchResult={result}></Card>

          })
          ) : (
            <h1> No Result </h1>)} */}
    </>
  )
}

export default CardList