import React, { SyntheticEvent } from 'react'
import DeletePorfolio from '../deletePorfolio/DeletePorfolio';

interface Props {
  portfolioValues: string;
  onPortfolioDelete: (e:SyntheticEvent) => void;
}

const CardPortfolio = ({ portfolioValues,onPortfolioDelete }: Props) => {
  return (
    <>
      <h4> {portfolioValues} </h4>
      <DeletePorfolio onPortfolioDelete={onPortfolioDelete} portfolioValue={portfolioValues}  ></DeletePorfolio>
    </>
  )
}

export default CardPortfolio