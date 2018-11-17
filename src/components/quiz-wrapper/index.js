import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {CodeHighlighter} from "../code-highlighter";
import ReactMarkdown from 'react-markdown';

class QuizWrapper extends Component {
    render() {
        const codeString =
            `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
`;
        return (
            <div className="quizWrapper">
                <div className="container">
                    <div className="row">
                        <h6 className="col-6">Quiz Title Component</h6>
                        <h6 className="col-6">Question Title Component</h6>
                    </div>
                    <div className="row m-3">
                        <div className="col-12">
                            <div className="progress">
                                <div className="progress-bar progress-bar-striped bg-info"
                                     role="progressbar"
                                     style={{width: "50%"}}
                                     aria-valuenow="50"
                                     aria-valuemin="0" aria-valuemax="100"/>
                            </div>
                        </div>
                    </div>
                    <div className="row m-3">
                        <div className="col-12 text-left">
                           <p>Explanation</p>
                        </div>
                    </div>
                    <div className="row m-4">
                        <div className="col-10 offset-1 card">
                            <CodeHighlighter codeString={codeString}/>
                        </div>
                    </div>
                    <div className="row m-3">
                        <div className="col-12">
                            <div className="card">
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item list-group-item-action">
                                        <div className="row">
                                            <div className="col-1">A</div>
                                            <div className="col-11">
                                                <ReactMarkdown escapeHtml={false}
                                                               source={'This is `public class Main` code and here some rando text'}/>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item list-group-item-action">
                                        <div className="row">
                                            <div className="col-1">B</div>
                                            <div className="col-11">
                                                <ReactMarkdown escapeHtml={false}
                                                               source={'This is `public class Main` code and here some rando text'}/>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item list-group-item-action">
                                        <div className="row">
                                            <div className="col-1">C</div>
                                            <div className="col-11">
                                                <ReactMarkdown escapeHtml={false}
                                                               source={'This is `public class Main` code and here some rando text'}/>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item list-group-item-action">
                                        <div className="row">
                                            <div className="col-1">D</div>
                                            <div className="col-11">
                                                <ReactMarkdown escapeHtml={false}
                                                               source={'This is `public class Main` code and here some rando text'}/>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item list-group-item-action">
                                        <div className="row">
                                            <div className="col-1">E</div>
                                            <div className="col-11">
                                                <ReactMarkdown escapeHtml={false}
                                                               source={'This is `public class Main` code and here some rando text'}/>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="row m-3">
                        <div className="col-12">
                            <div className="alert alert-primary" role="alert">
                                This is a primary alert—check it out!
                            </div>
                        </div>
                    </div>
                    <div className="row m-3">
                        <div className="col-6">
                            <button type="button" className="btn btn-success">Review</button>
                        </div>
                        <div className="col-6">
                            <button type="button" className="btn btn-primary">Submit</button>
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
