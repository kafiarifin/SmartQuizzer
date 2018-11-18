import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import {CodeHighlighter} from "../question-components/QuestionBody/CodeDisplay";
import {QuestionHeader} from "../question-components/QuestionHeader";
import {QuestionExplanation} from "../question-components/QuestionExplanation";
import {Question} from "../question-components/Question";
import QuestionOptions from "../question-components/QuestionOptions";
import {AnswerExplanation} from "../question-components/AnswerExplanation";
import QuestionNavigation from "../question-components/QuestionNavigation";
import {shuffle} from '../../utils'

class QuizWrapper extends Component {
    constructor(props) {
        super(props);
        this.shuffledOptions = shuffle(props.questionObject.options);
        this.state = {
            isCorrect: false,
            attemptsRemaining: 2,
            isIncorrect: false,
            questionsAnswered: props.attempts,
            questionObject: props.questionObject
        };
    }

    componentDidUpdate() {
        if(this.state.questionsAnswered !== this.props.attempts) {
            this.shuffledOptions = shuffle(this.props.questionObject.options);
            this.setState({
                isCorrect: false,
                attemptsRemaining: 2,
                isIncorrect: false,
                questionsAnswered: this.props.attempts,
                questionObject: this.props.questionObject
            });
        }
    }

    handleGuess(id) {
        const {
            props: {
                questionObject: {
                    correctAnswerId
                }
            },
            state: {
                attemptsRemaining
            }
        } = this;
        if (correctAnswerId && id === correctAnswerId) {
            console.log('correct');
            this.setState({
                isCorrect: true
            })
        } else {
            console.log('Not Correct');
            if (attemptsRemaining === 1) {
                this.setState({
                    isIncorrect: true,
                    attemptsRemaining: attemptsRemaining - 1
                })
            } else {
                this.setState({
                    attemptsRemaining: attemptsRemaining - 1
                })
            }
        }
    }

    render() {

        const {
            props: {
                attempts,
            },
            state: {
                isCorrect,
                attemptsRemaining,
                isIncorrect,
                questionObject: {
                    explanation,
                    prompt,
                    codeString,
                    answerExplanation,
                }
            }
        } = this;

        const complete = isCorrect || isIncorrect;
        return (
            <div className="quizWrapper">
                <div className="container">
                    <QuestionHeader title={'Title'} name={`Total Questions Attempted: ${attempts}`}/>
                    <QuestionExplanation complete={complete} isIncorrect={isIncorrect} explanation={explanation}/>
                    {codeString.length > 1 && <CodeHighlighter codeString={codeString}/>}
                    <Question prompt={prompt}/>
                    <QuestionOptions complete={complete} options={this.shuffledOptions}/>
                    {complete && <AnswerExplanation answerExplanation={answerExplanation}/>}
                    <QuestionNavigation complete={complete} isCorrect={isCorrect} attemptsRemaining={attemptsRemaining}
                                        callBack={() => this.handleGuess(this.props.questionData.selectedQuestionID)}/>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        questionData: state.questionData
    };
}

export default connect(mapStateToProps)(QuizWrapper);

QuizWrapper.propTypes = {
    questionObject: PropTypes.object.isRequired
};
