import React from 'react';
import PropTypes from 'prop-types'
import ReactMarkdown from "react-markdown";
import Speech from 'speak-tts'

export const AnswerExplanation = ({answerExplanation, referenceImage}) => {

    const handleClick = () => {
        const speech = new Speech()
        if (!speech.speaking()) {
            speech.speak({
                text: answerExplanation,
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
                <div className="card border-secondary">
                    <div className="card-body text-secondary text-left" role="alert">
                        {/*<ReactMarkdown escapeHtml={false}*/}
                        {/*               source={answerExplanation}/>*/}
                        <p onClick={handleClick}><span style={{'whiteSpace': 'pre-line'}}>{answerExplanation}</span></p>

                        {referenceImage && <img className="img-fluid" src={referenceImage} alt=""/>}
                    </div>
                </div>
            </div>
        </div>
    )
};

AnswerExplanation.propTypes = {
    answerExplanation: PropTypes.string
};
