import React from 'react';
import PropTypes from 'prop-types'
import {bindActionCreators} from "redux";
import {connect} from 'react-redux'
import {nextQuestion} from "../../../actions";

const QuestionNavigation = ({attemptsRemaining, callBack, isCorrect, complete, nextQuestion}) => {
    return (
        <div className="row m-3">
            <div className="col-7 text-left">
                <button type="button" className="btn btn-outline-light">Review</button>
            </div>
            <div className="col-3">
                {!complete && <button type="button" className="btn btn-outline-light disabled">
                    Attempts Remaining <span className="badge badge-light">{attemptsRemaining}</span>
                </button>}
            </div>
            <div className="col-2 text-right">
                {!complete ?
                    <button type="button" onClick={callBack} className="btn btn-primary">Submit</button> :
                    <button type="button" onClick={() => nextQuestion(isCorrect)} className="btn btn-primary">Next</button>
                }
            </div>
        </div>
    )
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        nextQuestion
    }, dispatch);
}

export default connect(null, mapDispatchToProps)(QuestionNavigation);

QuestionNavigation.propTypes = {
    callBack: PropTypes.func,
    attemptsRemaining: PropTypes.number,
    isCorrect: PropTypes.bool,
    complete: PropTypes.bool
};