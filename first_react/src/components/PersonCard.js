import React, { Component } from 'react';
// functional component
const BdayBtn = (props) => {
    return (
        <button onClick={props.handleClick}>Birthday button! add 1 year</button>
    );
}
// class component
class PersonCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ageCount: this.props.age
            // grabbinge age from app.js
        }
    }
    handleClick = () => {
        this.setState({
            ageCount: this.state.ageCount + 1
        })
    }
    render() {
        // const {firstName, lastName, age, hair} = this.props; // you could also destructure and set equal to this.props// then you would only write {props.firstName} etc instead
        return (
            <div>
                <h1>My name is {this.props.firstName} {this.props.lastName}</h1>
                <p>age is {this.state.ageCount} with {this.props.hair} hair</p>
                {/* we use ageCount instaedf of this.props.age since that is being incremented*/}
                <BdayBtn handleClick={this.handleClick} />

            </div>
        );
    }
}

export default PersonCard;