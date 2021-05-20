import React from 'react'
import PropTypes from 'prop-types'
import CharacterItem from './CharacterItem'
import styles from '../App.css'
import useCharacters from '../../../hooks/characters'

function CharacterList() {

    const {characters } = useCharacters();
    
    return (
        <div className={styles.characterStyles}>
            <ul aria-label='characters'>
                {characters.map((character) => (
                <li key={character.id}> 
                    <CharacterItem {...character}/>
                    <hr/>
                </li>
                ))}
            </ul>
        </div>
    )
}

export default CharacterList

