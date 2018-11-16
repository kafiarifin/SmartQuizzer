import React, {Component} from 'react';
import './App.css';
import QuizWrapper from './components/quiz-wrapper'

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="container m-5">
                    <div className="row">
                        <div className="col-12">
                            <QuizWrapper title={"test"}/>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default App;
