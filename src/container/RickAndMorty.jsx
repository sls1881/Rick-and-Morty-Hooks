import React, { useState, useEffect } from 'react'
import CharacterList from '../components/app/characters/CharacterList';
import Spinner from '../components/Spinner';
import styles from '../components/app/App.css';
import useCharacters from '../hooks/characters';

export default function RickAndMorty() {
 const { characters, loading, page, setPage } = useCharacters();
    return (
        <div className={styles.entireContainer}>
            <h1>Rick and Morty Characters</h1>
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
