import React, { Component } from 'react';
import './Achievers.css';
import Image from 'react-bootstrap/Image';
// import './HappyBee.png';

class AchieverCard extends Component {

    render() {
        const { achiever } = this.props;
    
        return (
            <div className="AchieverCard">

                <div>
                    <h4><em>{achiever.name}</em></h4>
                    <Image className="AchieverImage" src={require('../images/HoneyBee.png')} alt="Happy Bee" roundedCircle />
                    <br/><br/>
                    <p>Points: {achiever.points_earned}</p>
                </div>
                
            </div>
        )
    }
}

export default AchieverCard;