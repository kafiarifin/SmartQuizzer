import React from 'react';
import PropTypes from 'prop-types'

export const QuestionNavigation = ({something}) => {
    return (
        <div  className="row m-3">
            <div className="col-6">
                <button type="button" className="btn btn-success">Review</button>
            </div>
            <div className="col-6">
                <button type="button" className="btn btn-primary mx-1">Submit</button>
                <button type="button" className="btn btn-primary">Next</button>
            </div>
        </div>
    )
};

QuestionNavigation.propTypes = {
    something: PropTypes.string
};