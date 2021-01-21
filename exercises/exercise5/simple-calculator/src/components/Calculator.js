import React, { Component } from 'react';
import './Calculator.css';
import Result from './Result';
import KeyPad from "./KeyPad";

class Calculator extends Component {

    render() {
        return (
            <div>
                <div className="calculator-body">
                    <h1>Basic Calculator</h1>
                    <Result />
                    <KeyPad />
                </div>
            </div>
        );
    }
}

export default Calculator;