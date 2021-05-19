import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import styles from '../App.css'

function CharacterItem({ id, name, species, image }) {
    return (
        <Link className={styles.link} to={`/${id}`}>
        <div>
            <h2>{name}</h2>
            <p>{species}</p>
            <img alt={name} src={image}/>
        </div>
        </Link>
    )
}

CharacterItem.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    species: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
}

export default CharacterItem;

