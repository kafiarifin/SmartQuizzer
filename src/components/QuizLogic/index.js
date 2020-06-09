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
            totalQuestionsInInterval: 9,
            quizData: props.quizData && props.quizData.sort((a, b) => a.questionComplexityIndex - b.questionComplexityIndex)
        }
    }

    getPercentComplete(){
        const data = this.props.quizData;
        let complete = 0;
        data.map(item => {
            return item.questionComplexityIndex >= 0.5 ? complete += 1 : null;
        });
        return ((complete / data.length) * 100).toFixed(2);
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

        if (questionsAttempted === totalQuestionsInInterval) {
            updateTest('testOne', quizData.slice(0, totalQuestionsInInterval));
            quizData.sort((a, b) => a.questionComplexityIndex - b.questionComplexityIndex);
        }
        return quizData[questionsAttempted]
    }

    render() {
        return (
            <div className="App">
                <div className="container p-0">
                    <div className="row text-center">
                        <div className="col-12">
                            <QuestionProgress
                                percent={(this.props.questionsAttempted / (this.state.totalQuestionsInInterval - 1)) * 100}/>
                            <QuizWrapper attempts={this.props.questionsAttempted}
                                         questionObject={this.HandleNextQuestion()}
                                         completionRate={this.getPercentComplete()}
                                         totalQuestionsInInterval={this.state.totalQuestionsInInterval}/>
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
