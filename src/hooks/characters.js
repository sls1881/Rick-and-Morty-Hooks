import React, { useState, useEffect } from 'react'
import { getCharacters } from '../services/ApiUtils';

export default function useCharacters() {
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

    return { characters, loading, page, setPage }
}
