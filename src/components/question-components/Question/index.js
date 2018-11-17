import React from 'react';
import PropTypes from 'prop-types'

export const Question = ({prompt}) => {
    return (
        <div className="row mx-2">
            <div className="col-10 offset-1 text-left">
                <h6>{prompt}</h6>
            </div>
        </div>
    )
};

Question.propTypes = {
    prompt: PropTypes.string
};