import React from 'react';
import PropTypes from 'prop-types'
import ReactMarkdown from "react-markdown";
import Speech from 'speak-tts'

export const QuestionExplanation = ({complete, isIncorrect, explanation, wrongAnswer}) => {
    const speech = new Speech()


    const handleClick = () => {
        const speech = new Speech()
        if (!speech.speaking()) {
            speech.speak({
                text: explanation,
            }).then(() => {
                console.log("Success !")
            }).catch(e => {
                console.error("An error occurred :", e)
            })
        } else {
            speech.cancel()
        }
    }
    return (
        <div className="row m-3">
            <div className="col-12">
                {complete ? isIncorrect ? <div className="alert alert-danger" role="alert">
                        Incorrect
                    </div> :
                    <div className="alert alert-primary" role="alert">
                        Correct!
                    </div> : null}
                {wrongAnswer ?
                    <div className="alert alert-danger" role="alert">Incorrect, Please Try Again</div> : null}
            </div>
            <div className="col-12 text-left">
                {/*<h6>Consider:</h6>*/}
            </div>
            <div className="col-12 text-left">
                {/*<ReactMarkdown escapeHtml={false}*/}
                {/*source={explanation}/>*/}
                <p onClick={handleClick}>{explanation}</p>
            </div>
        </div>
    )
};

QuestionExplanation.propTypes = {
    explanation: PropTypes.string,
    complete: PropTypes.bool,
    isIncorrect: PropTypes.bool
};
