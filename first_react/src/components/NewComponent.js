import React, {Component} from 'react';

class NewComponent extends Component {
    render(){
        return(
            <div>
                <h1>My new Component!</h1>
                {this.props.someText}
            </div>
        );

    }
}

export default NewComponent;