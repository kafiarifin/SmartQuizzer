import React from 'react';
import PropTypes from 'prop-types'
import ReactMarkdown from "react-markdown";

export const AnswerExplanation = ({answerExplanation, referenceImage}) => {
    return (
        <div className="row m-3">
            <div className="col-12">
                <div className="card border-secondary">
                    <div className="card-body text-secondary text-left" role="alert">
                        {/*<ReactMarkdown escapeHtml={false}*/}
                        {/*               source={answerExplanation}/>*/}
                        <p><span style={{'white-space': 'pre-line'}}>{answerExplanation}</span></p>
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
