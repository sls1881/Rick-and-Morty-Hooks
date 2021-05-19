import React, { useState, useEffect } from 'react'
import CharacterList from '../components/app/characters/CharacterList';
import Spinner from '../components/Spinner';
import styles from '../components/app/App.css';
import { getCharacters } from '../services/ApiUtils';

export default function RickAndMorty() {
//useState
const [characters, setCharacters] = useState([]);
const [loading, setLoading] = useState(true);
const [page, setPage] = useState(1);

//useEffect and fetch
useEffect(() => {
    (async () => {
        const characters = await getCharacters(page)
        //setCharacter, setLoading, setPage
        setCharacters(characters);
        setLoading(false);
    })();
}, [page]);

    return (
        <div>
            <div className={styles.characterContainer}>
            {loading ? <Spinner/> : <CharacterList characters={characters}/>}
            </div>
            <div className={styles.buttons}>
            <button onClick={() => setPage((prevPage) => prevPage - 1)}>Previous</button>
            <span>{page}</span>
            <button aria-label='pages' onClick={() => setPage((nextPage) => nextPage + 1)}>Next</button>
            </div>
        </div>
    )
}
