import React, { useState, useEffect} from 'react'
import DetailsItem from '../components/app/characters/DetailsItem'
import Spinner from '../components/Spinner'
import { getCharacter } from '../services/ApiUtils'

export default function Details() {
    //state
    const [loading, setLoading] = useState(true)
    const [character, setCharacter] = useState({})

    //useEffect
    useEffect(() => {
        (async () => {
            const { id } = match.params
            const character = await getCharacter(id)
            //setCharacter, setLoading
            setCharacter(character);
            setLoading(false);
        })();
    }, []);

    return (
        <div>
            {loading ? <Spinner/> : <DetailsItem {...character}/>}
        </div>
    )
}
