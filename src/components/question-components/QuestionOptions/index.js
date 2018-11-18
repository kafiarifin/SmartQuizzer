import React, {Component} from 'react';
import PropTypes from 'prop-types'
import ReactMarkdown from "react-markdown";
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {updateSelection} from '../../../actions'


class QuestionOptions extends Component {

    handleSelected(id) {
        this.props.updateSelection(id)
    }

    renderOptions() {
        let {
            props: {
                options
            }
        } = this;

        return options.map(option => (
            <li key={option.id} onClick={() => !this.props.complete && this.handleSelected(option.id)}
                className={`list-group-item list-group-item-action ${this.props.questionData.selectedQuestionID === option.id ? 'active' : ''} ${this.props.complete ? 'disabled' : null}`}>
                <div className="row">
                    <div className="col-1">{option.id}</div>
                    <div className="col-11">
                        <ReactMarkdown escapeHtml={false}
                                       source={option.markdown}/>
                    </div>
                </div>
            </li>
        ))
    };

    render() {
        return (
            <div className="row m-3">
                <div className="col-12">
                    <div className="card text-left">
                        <ul className="list-group list-group-flush">
                            {this.renderOptions()}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        updateSelection
    }, dispatch);
}

function mapStateToProps(state) {
    return {
        questionData: state.questionData
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionOptions);

QuestionOptions.propTypes = {
    options: PropTypes.array
};