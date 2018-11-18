import React, {Component} from 'react';
import QuizWrapper from '../QuizWrapper'
import {QuestionProgress} from "../question-components/QuestionProgress";
import PropTypes from "prop-types";
import {AnswerExplanation} from "../question-components/AnswerExplanation";
import {connect} from 'react-redux'

class QuizLogic extends Component {
    // Logic Layer that is responsible for delivering a specific question. ML that logic.
    HandleNextQuestion() {
        console.log('HandleNextQuestion');
        if (this.props.questionsAttempted === this.props.quizData.length) {
            console.log('Complete');
        }
        return this.props.quizData[this.props.questionsAttempted]
    }

    render() {
        return (
            <div className="App">
                <div className="container p-3 text-center">
                    <div className="row">
                        <div className="col-12">
                            <QuestionProgress
                                percent={(this.props.questionsAttempted / this.props.quizData.length) * 100}/>
                            <QuizWrapper attempts={this.props.questionsAttempted}
                                         questionObject={this.HandleNextQuestion()}/>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        questionsAttempted: state.questionData.questionsAttempted
    };
}

export default connect(mapStateToProps)(QuizLogic);


AnswerExplanation.propTypes = {
    quizData: PropTypes.string
};