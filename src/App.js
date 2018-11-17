import React, {Component} from 'react';
import QuizWrapper from './components/QuizWrapper'

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="container p-3 text-center">
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
