import React from 'react'
import PropTypes from 'prop-types'
import CharacterItem from './CharacterItem'
import styles from '../App.css'

function CharacterList({ characters }) {
    return (
        <div>
            <ul aria-label='characters'>
                {characters.map((character) => (
                <li key={character.id}> 
                    <CharacterItem {...character}/>
                </li>
                ))}
            </ul>
        </div>
    )
}

CharacterList.propTypes = {
characters: PropTypes.arrayOf(
    PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        species: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
    })
)
}

export default CharacterList

