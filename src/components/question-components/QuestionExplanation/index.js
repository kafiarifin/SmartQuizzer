import React from 'react';
import PropTypes from 'prop-types'

export const QuestionExplanation = ({explanation}) => {
    return (
        <div className="row m-3">
            <div className="col-12 text-left">
                <h6>Given:</h6>
            </div>
            <div className="col-12 text-left">
                <p>{explanation}</p>
            </div>
        </div>
    )
};

QuestionExplanation.propTypes = {
    explanation: PropTypes.string
};