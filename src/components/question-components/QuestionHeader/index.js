import React from 'react';
import PropTypes from 'prop-types'

export const QuestionHeader = ({name, title}) => {
    return (
        <div className="row">
            <h6 className="col-6">{name}</h6>
            <h6 className="col-6">{title}</h6>
        </div>
    )
};

QuestionHeader.propTypes = {
    name: PropTypes.string,
    title: PropTypes.string
};