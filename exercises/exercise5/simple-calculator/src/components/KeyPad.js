import React, {Component} from 'react';

class KeyPadComponent extends Component {

    render() {
        return (
            <div className="button">
                <button name="(">(</button>
                <button name="CE">CE</button>
                <button name=")">)</button>
                <button name="C">C</button><br/>
            </div>
        );
    }
}


export default KeyPadComponent;