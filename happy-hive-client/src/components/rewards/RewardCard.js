import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Rewards.css';

class RewardCard extends Component {

    render() {
        const { reward, achievers } = this.props;
    
        return (
            <div className="RewardCard">

                <Link to={{
                    pathname:`/rewards/${reward.id}`,
                    rewardProps: reward,
                    achieversProps: achievers
                    }}>
                    <div>
                        <h4><em>{reward.name}</em></h4>
                        <p>{reward.description}</p>
                        <p><em>Value: {reward.value}</em></p>
                    </div>
                </Link>
                
            </div>
        )
    }
}

export default RewardCard;