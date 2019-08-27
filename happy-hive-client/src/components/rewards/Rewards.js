import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import RewardCard from './RewardCard';

class Rewards extends Component {

    render() {
        return (
            <div className="RewardCardContainer">
                <h3 className="RewardsPageTitle">Rewards</h3>
                <Button variant="outline-info" size="sm" href="/rewards/new">New Reward</Button>
                <br/>
                <br/>
                { this.props.rewards.filter( reward => reward.claimed === false )
                    .map( reward => {
                        return (
                            <div key={reward.id}>
                                <RewardCard reward={reward} rewards={this.props.rewards} achievers={this.props.achievers} />
                            </div>
                        )
                }) }
            </div>
        )
    }
}

export default Rewards;