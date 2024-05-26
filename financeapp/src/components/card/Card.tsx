import React, { SyntheticEvent } from 'react';
import './Card.css';
import { CompanySearch } from '../../company';
import AddPortfolio from '../portfolio/addPortfolio/AddPortfolio';

interface Props {
    id: string;
    searchResult: CompanySearch;
    onPortfolioCreate: (e: SyntheticEvent) => void;
}

const Card: React.FC<Props> = ({ id, searchResult, onPortfolioCreate }: Props) => {
    return (
        <div
            className="flex flex-col items-center justify-between w-full p-6 bg-slate-100 rounded-lg md:flex-row"
            key={id}
            id={id}
        >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between w-full">
                <h2 className="font-bold text-center text-black md:text-left md:w-1/3">
                    {searchResult.name} ({searchResult.symbol})
                </h2>
                <p className="text-black text-center md:text-left">
                    {searchResult.currency}
                </p>
                <p className="font-bold text-black md:w-1/3 text-center md:text-right">
                    {searchResult.exchangeShortName} - {searchResult.stockExchange}
                </p>
                <div className="md:w-1/6 flex justify-end">
                    <AddPortfolio onPortfolioCreate={onPortfolioCreate} symbol={searchResult.symbol} />
                </div>
            </div>
        </div>
    );
};

export default Card;
