import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {CodeHighlighter} from "../question-components/QuestionBody/CodeDisplay";
import {QuestionHeader} from "../question-components/QuestionHeader";
import {QuestionProgress} from "../question-components/QuestionProgress";
import {QuestionExplanation} from "../question-components/QuestionExplanation";
import {Question} from "../question-components/Question";
import {QuestionOptions} from "../question-components/QuestionOptions";

class QuizWrapper extends Component {
    render() {

        const questionDemoObject = {
            explanation: 'Test Explanation',
            prompt: 'What is the output?',
            options: [
                {
                    id: 'A',
                    markdown: '678910'
                },
                {
                    id: 'B',
                    markdown: '5'
                },
                {
                    id: 'C',
                    markdown: '4'
                },
                {
                    id: 'D',
                    markdown: '3'
                },
                {
                    id: 'E',
                    markdown: 'Compilation fails'
                },
            ],
            codeString: `public class Whiz {
 static int x = 4;

 public static void main(String[] args) {

  for (int x = 5; x < 10; x++)
   x++;
  System.out.print(x--);
 }
}`,
            answerExplanation: `Option C is the correct answer. At line 6 we have created a for loop since we haven’t
                                use the brackets there,
                                the printing statement is not in the scope of the for loop block. So the for loop
                                variable scope ends by line
                                7. At line 8 printing statement prints the value of the static variable x, which is 4.
                                There we have used post
                                decrement operator which has no effect on that line hence option C is correct.`
        };

        const {explanation, prompt, options, codeString, answerExplanation} = questionDemoObject;

        return (
            <div className="quizWrapper">
                <div className="container">
                    {/*// @TODO: QuestionHeader Component */}
                    <div className="row">
                        <QuestionHeader title={'Title'} name={"Name"}/>
                    </div>
                    {/*// @TODO: QuestionProgress Component */}
                    <div className="row m-3">
                        <div className="col-12">
                            <QuestionProgress percent={40}/>
                        </div>
                    </div>
                    {/*// @TODO: QuestionExplanation Component */}
                    <div className="row m-3">
                        <QuestionExplanation explanation={explanation}/>
                    </div>
                    {/*// @TODO: QuestionBody Component */}
                    <div className="row m-4">
                        <div className="col-10 offset-1">
                            <CodeHighlighter codeString={codeString}/>
                        </div>
                    </div>
                    {/*// @TODO: Question Component */}
                    <div className="row mx-2">
                        <div className="col-10 offset-1 text-left">
                            <Question prompt={prompt}/>
                        </div>
                    </div>
                    {/*// @TODO: QuestionOptions Component */}
                    <div className="row m-3">
                        <div className="col-12">
                            <QuestionOptions options={options}/>
                        </div>
                    </div>
                    {/*// @TODO: QuestionExplanation Component */}
                    <div className="row m-3">
                        <div className="col-12">
                            <div className="alert alert-primary" role="alert">
                                {answerExplanation}
                            </div>
                        </div>
                    </div>
                    {/*// @TODO: QuestionNavigation Component */}
                    <div className="row m-3">
                        <div className="col-6">
                            <button type="button" className="btn btn-success">Review</button>
                        </div>
                        <div className="col-6">
                            <button type="button" className="btn btn-primary mx-1">Submit</button>
                            <button type="button" className="btn btn-primary">Next</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default QuizWrapper;

QuizWrapper.propTypes = {
    text: PropTypes.string
};
