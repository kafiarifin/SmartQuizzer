import React, {Component} from 'react';
import QuizWrapper from '../QuizWrapper'
import {QuestionProgress} from "../question-components/QuestionProgress";
import PropTypes from "prop-types";
import {AnswerExplanation} from "../question-components/AnswerExplanation";
import {connect} from 'react-redux'
import {updateQuestionIndex} from '../../actions'
import {bindActionCreators} from "redux";
import {updateTest} from "../../fireStoreLogicLayer";


class QuizLogic extends Component {
    // Logic Layer that is responsible for delivering a specific question. ML that logic.
    constructor(props) {
        super(props);
        this.state = {
            totalQuestionsInInterval: 5,
            quizData: props.quizData.sort((a, b) => a.questionComplexityIndex - b.questionComplexityIndex)
        }
    }

    componentDidUpdate() {
        if (this.props.questionsAttempted === this.state.totalQuestionsInInterval) {
            this.props.updateQuestionIndex();
        }
    }

    HandleNextQuestion() {
        const {
            props: {
                questionsAttempted
            },
            state: {
                quizData,
                totalQuestionsInInterval
            }
        } = this;

        console.log('Total Questions: ', quizData.length);
        console.log('Questions: ', quizData);
        if (questionsAttempted === totalQuestionsInInterval) {
            updateTest('testOne', quizData);
            quizData.sort((a, b) => a.questionComplexityIndex - b.questionComplexityIndex);
        }
        return quizData[questionsAttempted]
    }

    render() {
        return (
            <div className="App">
                <div className="container p-3 text-center">
                    <div className="row">
                        <div className="col-12">
                            <QuestionProgress
                                percent={(this.props.questionsAttempted / (this.state.totalQuestionsInInterval - 1)) * 100}/>
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

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        updateQuestionIndex
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(QuizLogic);


AnswerExplanation.propTypes = {
    quizData: PropTypes.string
};