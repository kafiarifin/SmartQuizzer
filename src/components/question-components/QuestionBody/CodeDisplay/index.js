import React from 'react';
import PropTypes from 'prop-types'
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { docco } from 'react-syntax-highlighter/dist/styles/hljs';

export const CodeHighlighter = ({codeString}) => {
    return (
        <div style={{textAlign : 'justify'}}>
            <SyntaxHighlighter language='java' showLineNumbers={true} lineNumberStyle={{marginRight: '20px'}} style={docco}>{codeString}</SyntaxHighlighter>
        </div>
    )
};

CodeHighlighter.propTypes = {
    codeString: PropTypes.string
};