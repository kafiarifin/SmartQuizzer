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
            totalQuestionsInInterval: 5
        }
    }

    componentDidUpdate() {
        if (this.props.questionsAttempted === this.state.totalQuestionsInInterval){
            this.props.updateQuestionIndex();
        }
    }

    HandleNextQuestion() {
        console.log('Total Questions: ', this.props.quizData.length);
        console.log('Questions: ', this.props.quizData);
        if (this.props.questionsAttempted === this.state.totalQuestionsInInterval){
            updateTest('testOne', this.props.quizData);
            this.props.quizData.sort((a, b) => a.questionComplexityIndex-b.questionComplexityIndex);
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
                                percent={(this.props.questionsAttempted / (this.state.totalQuestionsInInterval -1)) * 100}/>
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