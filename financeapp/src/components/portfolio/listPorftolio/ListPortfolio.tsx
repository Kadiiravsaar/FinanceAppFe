import React from 'react';
import CardPortfolio from '../cardPortfolio/CardPortfolio';

interface Props {
    portfolioValues: string[];
}

const ListPortfolio: React.FC<Props> = ({ portfolioValues }) => {
    return (
        <>
            <h3>my port</h3>
            <ul>
                {portfolioValues && portfolioValues.map((portfolioValue) => {
                    return <CardPortfolio portfolioValues={portfolioValue} />
                })}
            </ul>
        </>
    );
}

export default ListPortfolio;
