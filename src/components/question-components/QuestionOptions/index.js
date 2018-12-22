import React, {Component} from 'react';
import PropTypes from 'prop-types'
import ReactMarkdown from "react-markdown";
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {updateSelection} from '../../../actions'

class QuestionOptions extends Component {

    handleSelected(id) {
        this.props.updateSelection(id, this.props.isMultiAnswer);
    }

    renderOptions() {
        let {
            props: {
                options
            }
        } = this;

        return options.map(option => (
            <li key={option.id} onClick={() => !this.props.complete && this.handleSelected(option.id)}
                className={`list-group-item list-group-item-action ${this.props.questionData.selectedQuestionID && this.props.questionData.selectedQuestionID.includes(option.id) ? 'active' : ''} ${this.props.complete ? 'disabled' : null}`}>
                <div className="row">
                    {this.props.complete && <div className="col-1"><b>{option.id}</b></div>}
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
                    <div className="card bg-dark text-white text-left">
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