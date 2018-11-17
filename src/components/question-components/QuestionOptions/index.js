import React from 'react';
import PropTypes from 'prop-types'
import ReactMarkdown from "react-markdown";

export const QuestionOptions = ({options}) => {
    const renderOptions = () => {
        return options.map(option => (
            <li className="list-group-item list-group-item-action">
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
    return (
        <div className="card text-left">
            <ul className="list-group list-group-flush">
                {renderOptions()}
            </ul>
        </div>
    )
};

QuestionOptions.propTypes = {
    options: PropTypes.object
};