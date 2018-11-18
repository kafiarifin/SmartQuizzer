import React from 'react';
import PropTypes from 'prop-types'

export const QuestionNavigation = ({attemptsRemaining, callBack, isCorrect, complete}) => {
    return (
        <div className="row m-3">
            <div className="col-7 text-left">
                <button type="button" className="btn btn-outline-secondary">Review</button>
            </div>
            <div className="col-3">
                {!complete && <button type="button" className="btn btn-outline-secondary disabled">
                    Attempts Remaining <span className="badge badge-dark">{attemptsRemaining}</span>
                </button>}
            </div>
            <div className="col-2 text-right">
                {!complete ?
                    <button type="button" onClick={callBack} className="btn btn-primary">Submit</button> :
                    <button type="button" onClick={() => {
                        console.log('nextQuestionDispatch...')
                    }} className="btn btn-primary">Next</button>
                }
            </div>
        </div>
    )
};

QuestionNavigation.propTypes = {
    callBack: PropTypes.func,
    attemptsRemaining: PropTypes.number,
    isCorrect: PropTypes.bool,
    complete: PropTypes.bool
};