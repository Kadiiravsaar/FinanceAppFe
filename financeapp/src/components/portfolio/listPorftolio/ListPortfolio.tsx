import React, { SyntheticEvent } from 'react';
import CardPortfolio from '../cardPortfolio/CardPortfolio';

interface Props {
    portfolioValues: string[];
    onPortfolioDelete :  (e:SyntheticEvent) => void;
}

const ListPortfolio: React.FC<Props> = ({ portfolioValues,onPortfolioDelete }) => {
    return (
        <>
            <h3>my port</h3>
            <ul>
                {portfolioValues && portfolioValues.map((portfolioValue) => {
                    return <CardPortfolio portfolioValues={portfolioValue} onPortfolioDelete={onPortfolioDelete} />
                })}
            </ul>
        </>
    );
}

export default ListPortfolio;
