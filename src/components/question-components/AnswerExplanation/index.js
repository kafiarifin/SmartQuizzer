import React from 'react';
import PropTypes from 'prop-types'

export const AnswerExplanation = ({answerExplanation}) => {
    return (
        <div className="row m-3">
            <div className="col-12">
                <div className="alert alert-primary" role="alert">
                    {answerExplanation}
                </div>
            </div>
        </div>
    )
};

AnswerExplanation.propTypes = {
    answerExplanation: PropTypes.string
};