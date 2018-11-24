import React from 'react';
import PropTypes from 'prop-types'
import {Light as SyntaxHighlighter} from "react-syntax-highlighter";
import {ocean} from 'react-syntax-highlighter/dist/styles/hljs';

export const CodeHighlighter = ({codeString}) => {
    return (
        <div className="row m-4">
            <div className="col-10 offset-1 text-left">
                    <SyntaxHighlighter language='java' showLineNumbers={true} lineNumberStyle={{marginRight: '20px'}}
                                       style={ocean}>{codeString}</SyntaxHighlighter>
            </div>
        </div>
    )
};

CodeHighlighter.propTypes = {
    codeString: PropTypes.string
};