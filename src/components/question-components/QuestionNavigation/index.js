import React from 'react';
import PropTypes from 'prop-types'

export const QuestionNavigation = ({something}) => {
    return (
        <div  className="row m-3">
            <div className="col-7 text-left">
                <button type="button" className="btn btn-success">Review</button>
            </div>
            <div className="col-3">
                <button type="button" className="btn btn-outline-secondary disabled">
                    Attempts Remaining <span className="badge badge-dark">2</span>
                </button>
            </div>
            <div className="col-2 text-right">
                <button type="button" className="btn btn-primary">Submit</button>
                {/*<button type="button" className="btn btn-primary">Next</button>*/}
            </div>
        </div>
    )
};

QuestionNavigation.propTypes = {
    something: PropTypes.string
};