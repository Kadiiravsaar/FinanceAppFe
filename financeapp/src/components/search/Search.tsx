import React, { useState,ChangeEvent,SyntheticEvent } from 'react'

type Props = {}

const Search: React.FC<Props> = (props: Props): JSX.Element => {
    const [search, setSearch] = useState("");

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
        console.log(e);
    }

    const onClick = (event:SyntheticEvent) => {
        console.log(event);
    }

    return (
        <div>
            <input value={search} onChange={(e) => handleChange(e)}></input>
            <button onClick={(event) => onClick(event)}></button>
        </div>
    )
}

export default Search