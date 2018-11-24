import React from 'react';
import PropTypes from 'prop-types'

export const QuestionHeader = ({title}) => {
    return (
        <div className="row">
            <h6 className="col-12">{title}</h6>
            <hr/>
        </div>
    )
};

QuestionHeader.propTypes = {
    title: PropTypes.string
};