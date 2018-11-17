import React, {Component} from 'react';
import QuizWrapper from '../QuizWrapper'
import {QuestionProgress} from "../question-components/QuestionProgress";
import PropTypes from "prop-types";
import {AnswerExplanation} from "../question-components/AnswerExplanation";

class QuizLogic extends Component {
    // Logic Layer that is responsible for delivering a specific question. ML that logic.
    render() {
        return (
            <div className="App">
                <div className="container p-3 text-center">
                    <div className="row">
                        <div className="col-12">
                            <QuestionProgress percent={40}/>
                            <QuizWrapper questionObject={this.props.quizData[0]}/>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default QuizLogic;


AnswerExplanation.propTypes = {
    quizData: PropTypes.string
};