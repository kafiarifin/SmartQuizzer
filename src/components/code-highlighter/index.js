import React from 'react';
import Highlight from "react-highlight";
import 'highlight.js/styles/arduino-light.css'
import PropTypes from 'prop-types'

export const CodeHighlighter = ({codeString}) => {
    return (
        <div style={{textAlign : 'justify'}}>
            {/*<h1 className="col-12">Question Body Component</h1>*/}
            <Highlight className='java'>
                {codeString}
            </Highlight>
        </div>
    )
};

CodeHighlighter.propTypes = {
    codeString: PropTypes.string
};