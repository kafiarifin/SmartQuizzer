import React from 'react';
import PropTypes from 'prop-types'

export const QuestionProgress = ({percent}) => {
    return (
        <div className="progress">
            <div className="progress-bar progress-bar-striped bg-info"
                 role="progressbar"
                 style={{width: `${percent}%`}}
                 aria-valuenow={percent}
                 aria-valuemin="0" aria-valuemax="100"/>
        </div>
    )
};

QuestionProgress.propTypes = {
    percent: PropTypes.number
};