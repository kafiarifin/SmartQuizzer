import React from 'react';
import PropTypes from 'prop-types'
import {Light as SyntaxHighlighter} from "react-syntax-highlighter";
import {docco} from 'react-syntax-highlighter/dist/styles/hljs';

export const CodeHighlighter = ({codeString}) => {
    return (
        <div className="row m-4">
            <div className="col-10 offset-1">
                <div style={{
                    textAlign: 'justify', borderRadius: '5px',
                    padding: '4px 4px 0px',
                    background: 'rgb(248, 248, 255)'
                }}>
                    <SyntaxHighlighter language='java' showLineNumbers={true} lineNumberStyle={{marginRight: '20px'}}
                                       style={docco}>{codeString}</SyntaxHighlighter>
                </div>
            </div>
        </div>
    )
};

CodeHighlighter.propTypes = {
    codeString: PropTypes.string
};