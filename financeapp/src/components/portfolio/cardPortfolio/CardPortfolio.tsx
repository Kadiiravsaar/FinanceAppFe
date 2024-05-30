import React, { SyntheticEvent } from "react";
import { Link } from "react-router-dom";
import DeletePorfolio from "../deletePorfolio/DeletePorfolio";

interface Props {
  portfolioValues: string;
  onPortfolioDelete: (e: SyntheticEvent) => void;
}

const CardPortfolio = ({ portfolioValues, onPortfolioDelete }: Props) => {
  return (
    <div className="flex flex-col w-full p-8 space-y-4 text-center rounded-lg shadow-lg md:w-1/3">
      <Link
        to={`/company/${portfolioValues}/company-profile`}
        className="pt-6 text-xl font-bold"
      >
        {portfolioValues}
      </Link>
      <DeletePorfolio
        portfolioValue={portfolioValues}
        onPortfolioDelete={onPortfolioDelete}
      />
    </div>
  );
};

export default CardPortfolio;