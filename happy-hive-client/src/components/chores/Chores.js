import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import ChoreCard from './ChoreCard';

class Chores extends Component {

    render() {
        return (
            <div className="ChoreCardContainer">
                <h3 className="ChoresPageTitle">Chores</h3>
                <Button variant="outline-info" size="sm" href="/chores/new">New Chore</Button>
                <br/>
                <br/>
                { this.props.chores.filter( chore => chore.complete === false )
                    .map( chore => {
                        return (
                            <div key={chore.id}>
                                <ChoreCard chore={chore} chores={this.props.chores} achievers={this.props.achievers} />
                            </div>
                        )
                }) }
            </div>
        )
    }
}

export default Chores;