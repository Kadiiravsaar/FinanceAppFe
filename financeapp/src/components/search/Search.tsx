import React, { useState, ChangeEvent, SyntheticEvent, FormEvent } from 'react'

interface Props {
    search: string | undefined;
    handleSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
    onSearchSubmit: (e: SyntheticEvent) => void;
};

const Search: React.FC<Props> = ({ search, handleSearchChange, onSearchSubmit }: Props): JSX.Element => {
    return (
        <>
            <form onSubmit={onSearchSubmit}>
                <input onChange={handleSearchChange} value={search} />
            </form>
        </>
    )
}

export default Search