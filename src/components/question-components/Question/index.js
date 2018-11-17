import React from 'react';
import PropTypes from 'prop-types'

export const Question = ({prompt}) => {
    return (
        <div >
            <h6>{prompt}</h6>
        </div>
    )
};

Question.propTypes = {
    prompt: PropTypes.string
};