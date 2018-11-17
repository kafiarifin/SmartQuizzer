import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {CodeHighlighter} from "../question-components/QuestionBody/CodeDisplay";
import {QuestionHeader} from "../question-components/QuestionHeader";
import {QuestionExplanation} from "../question-components/QuestionExplanation";
import {Question} from "../question-components/Question";
import {QuestionOptions} from "../question-components/QuestionOptions";
import {AnswerExplanation} from "../question-components/AnswerExplanation";
import {QuestionNavigation} from "../question-components/QuestionNavigation";

class QuizWrapper extends Component {
    render() {
        const {explanation, prompt, options, codeString, answerExplanation} = this.props.questionObject;
        return (
            <div className="quizWrapper">
                <div className="container">
                    <QuestionHeader title={'Title'} name={"Name"}/>
                    <QuestionExplanation explanation={explanation}/>
                    <CodeHighlighter codeString={codeString}/>
                    <Question prompt={prompt}/>
                    <QuestionOptions options={options}/>
                    <AnswerExplanation answerExplanation={answerExplanation}/>
                    <QuestionNavigation/>
                </div>
            </div>
        )
    }
}

export default QuizWrapper;

QuizWrapper.propTypes = {
    questionObject: PropTypes.object.isRequired
};
