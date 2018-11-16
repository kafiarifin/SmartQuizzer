import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './index.css';

class QuizWrapper extends Component {
    render() {
        return (
            <div className="quizWrapper">
                <div className="container">
                    <div className="row">
                        <h3 className="col-6">Quiz Title Component</h3>
                        <h3 className="col-6">Question Title Component</h3>
                    </div>
                    <div className="row">
                        <h1 className="col-12">Progress Bar Component</h1>
                    </div>
                    <div className="row">
                        <h1 className="col-12">Question Body Component</h1>
                    </div>
                    <div className="row">
                        <h1 className="col-12">Multiple Choice Options Component</h1>
                    </div>
                    <div className="row">
                        <h1 className="col-12">Explanation Component</h1>
                    </div>
                    <div className="row">
                        <h1 className="col-12">Navigation Component</h1>
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
