import React from 'react';
import PropTypes from 'prop-types'
import ReactMarkdown from "react-markdown";

export const QuestionExplanation = ({complete, isIncorrect, explanation, wrongAnswer}) => {
    return (
        <div className="row m-3">
            <div className="col-12">
                {complete ? isIncorrect ? <div className="alert alert-danger" role="alert">
                        Incorrect
                    </div> :
                    <div className="alert alert-primary" role="alert">
                        Correct!
                    </div> : null}
                {wrongAnswer ? <div className="alert alert-danger" role="alert">Incorrect, Please Try Again</div> : null}
            </div>
            <div className="col-12 text-left">
                <h6>Given:</h6>
            </div>
            <div className="col-12 text-left">
                {/*<ReactMarkdown escapeHtml={false}*/}
                {/*source={explanation}/>*/}
                <p>{explanation}</p>
            </div>
        </div>
    )
};

QuestionExplanation.propTypes = {
    explanation: PropTypes.string,
    complete: PropTypes.bool,
    isIncorrect: PropTypes.bool
};