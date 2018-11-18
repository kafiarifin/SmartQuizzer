import React, {Component} from 'react';
import QuizLogic from "./components/QuizLogic";
import Particles from 'react-particles-js';
import {Loader} from "./components/Loader";
import {connect} from 'react-redux';
import {retrieveData} from './actions'
import {bindActionCreators} from "redux";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            questionDataSet: undefined
        }
    }

    componentDidMount() {

        // db.collection('test').doc('test1').set({
        //     quiz1: questionDataSetTest
        // }, {merge: true}).then(function () {
        //     console.log("Document successfully written!");
        // }).catch((err) => {
        //     console.warn('ERROR', err);
        // });

        this.props.retrieveData()

    }

    render() {
        return (
            <div className="App">
                <Particles
                    params={{
                        particles: {
                            line_linked: {
                                shadow: {
                                    enable: true,
                                    color: "#777777",
                                    blur: 5
                                }
                            },
                            move: {
                                speed: 0.4,
                                bounce: true
                            }
                        }
                    }}
                    style={{
                        position: 'fixed',
                        width: '100vw',
                        height: '100vh'
                    }}
                />
                {this.props.testBank ? <QuizLogic quizData={this.props.testBank}/> : <Loader/>}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        testBank: state.testData.data
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        retrieveData
    }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
