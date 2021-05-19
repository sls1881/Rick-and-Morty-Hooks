import React, { useState, useEffect} from 'react'
import { useParams } from 'react-router'
import DetailsItem from '../components/app/characters/DetailsItem'
import Spinner from '../components/Spinner'
import { getCharacter } from '../services/ApiUtils'

export default function Details() {
    //state
    const [loading, setLoading] = useState(true)
    const [character, setCharacter] = useState({})
    
    const {id} = useParams();

    //useEffect
    useEffect(() => {
        (async () => {
            const character = await getCharacter(id)
            //setCharacter, setLoading
            setCharacter(character);
            setLoading(false);
        })();
    }, [id]);

    return (
        <div>
            {loading ? <Spinner/> : <DetailsItem character={character}/>}
        </div>
    )
}
