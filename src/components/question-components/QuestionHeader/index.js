import React from 'react';
import PropTypes from 'prop-types'

export const QuestionHeader = ({title, completionRate}) => {
    return (
        <div className="row">
            <h6 className="col-8">{title}</h6>
            <h6 className="col-4">{completionRate}% Completed Total</h6>
            <hr/>
        </div>
    )
};

QuestionHeader.propTypes = {
    title: PropTypes.string
};