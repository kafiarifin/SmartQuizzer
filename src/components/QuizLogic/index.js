import React, {Component} from 'react';
import QuizWrapper from '../QuizWrapper'
import {QuestionProgress} from "../question-components/QuestionProgress";
import PropTypes from "prop-types";
import {AnswerExplanation} from "../question-components/AnswerExplanation";
import {connect} from 'react-redux'

class QuizLogic extends Component {
    // Logic Layer that is responsible for delivering a specific question. ML that logic.
    HandleNextQuestion(){
        console.log('HandleNextQuestion');
        return this.props.quizData[0]
    }

    render() {
        console.log(this.props.questionsAttempted);
        return (
            <div className="App">
                <div className="container p-3 text-center">
                    <div className="row">
                        <div className="col-12">
                            <QuestionProgress percent={40}/>
                            <QuizWrapper attempts={this.props.questionsAttempted} questionObject={this.HandleNextQuestion()}/>
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