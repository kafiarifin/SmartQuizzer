import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './index.css';

class QuizWrapper extends Component {
    render() {
        return (
            <div className={'quizWrapper'}>
                <div className="container">
                    <div className="row">
                        <h3 className="col-6">Quiz Title</h3>
                        <h3 className="col-6">Quiz Title</h3>
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
