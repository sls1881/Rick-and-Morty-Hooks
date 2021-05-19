import React from 'react'
import PropTypes from 'prop-types'

function DetailsItem({ name, species, status, image, url }) {
    return (
        <div>
            <h2>{name}</h2>
            <p>{species}</p>
            <p>{status}</p>
            <img alt={name} src={image}/>
            <a href={url}>Character Data</a>
        </div>
    )
}

DetailsItem.propTypes = {
    character: PropTypes.object.isRequired,
// name: PropTypes.string.isRequired,
// species: PropTypes.string.isRequired,
// status: PropTypes.string.isRequired,
// image: PropTypes.string.isRequired,
// url: PropTypes.string.isRequired,
}

export default DetailsItem

