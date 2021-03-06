import React, {Component} from 'react';
import QuizLogic from "./components/QuizLogic";
import Particles from 'react-particles-js';
import {Loader} from "./components/Loader";
import {connect} from 'react-redux';
import {retrieveData} from './actions'
import {bindActionCreators} from "redux";
import './index.css';
import {TestData} from './test-data'
import {updateTest} from './fireStoreLogicLayer';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            questionDataSet: undefined
        }
    }

    componentDidMount() {

        const transformedData = TestData.AWSCertifiedCloudPractitioner.map((item) => {
            return {
                ...item,
                answerExplanation: item.answerExplanation.split(" ").filter(item => !item.includes("https")).join(' ')
            }
        })

        //updateTest(transformedData);



        this.props.retrieveData()

    }

    render() {
        return (
            <div className="App" style={{overflow: 'hidden'}}>
                <Particles
                    params={{
                        particles: {
                            move: {
                                speed: 0.3,
                            }
                        }
                    }}
                    style={{
                        position: 'fixed',
                        width: '100vw',
                        height: '100vh',
                        backgroundColor: 'rgb(43, 48, 59)',
                        filter: 'blur(1px)'
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
