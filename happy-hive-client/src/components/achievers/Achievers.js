import React, { Component } from 'react';
import AchieverCard from './AchieverCard';

class Achievers extends Component {

    render() {
        const { achievers } = this.props;
        return (
            <div className="AchieverCardContainer">
                <h3 className="AchieversPageTitle">Achievers</h3>
                <br/>
                { achievers.map( achiever => {
                    return (
                        <div key={achiever.id}>
                            <AchieverCard achiever={achiever} />
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Achievers;