import React, { Component } from 'react';

class Travel extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div>
                <h1>
                {this.props.destination} 
                {this.props.country} 
                </h1>
                <p>Cette destination est à une distance de {this.props.distance}</p>
                <img src={this.props.photo} />
                
            </div>
        );
    }
};


export default Travel;