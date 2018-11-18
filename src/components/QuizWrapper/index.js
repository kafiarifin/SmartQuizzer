import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import {CodeHighlighter} from "../question-components/QuestionBody/CodeDisplay";
import {QuestionHeader} from "../question-components/QuestionHeader";
import {QuestionExplanation} from "../question-components/QuestionExplanation";
import {Question} from "../question-components/Question";
import QuestionOptions from "../question-components/QuestionOptions";
import {AnswerExplanation} from "../question-components/AnswerExplanation";
import {QuestionNavigation} from "../question-components/QuestionNavigation";

class QuizWrapper extends Component {
    constructor(props) {
        super(props);
        this.shuffledOptions = this.shuffle(props.questionObject.options);
        this.state = {
            isCorrect: false,
            attemptsRemaining: 2,
            isIncorrect: false
        };
    }

    shuffle(array) {
        let currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
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
                questionObject: {
                    explanation,
                    prompt,
                    codeString,
                    answerExplanation,
                }
            },
            state: {
                isCorrect,
                attemptsRemaining,
                isIncorrect
            }
        } = this;

        const complete = isCorrect || isIncorrect;
        return (
            <div className="quizWrapper">
                <div className="container">
                    <QuestionHeader title={'Title'} name={"Name"}/>
                    <QuestionExplanation complete={complete} isIncorrect={isIncorrect} explanation={explanation}/>
                    <CodeHighlighter codeString={codeString}/>
                    <Question prompt={prompt}/>
                    <QuestionOptions complete={complete} options={this.shuffledOptions}/>
                    {complete && <AnswerExplanation answerExplanation={answerExplanation}/>}
                    <QuestionNavigation complete={complete} attemptsRemaining={attemptsRemaining}
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
