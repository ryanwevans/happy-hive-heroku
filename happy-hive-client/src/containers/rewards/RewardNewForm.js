import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from  'react-router-dom';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { createReward } from '../../actions/rewards';
import { updateRewardFormData } from '../../actions/rewardForm';

class RewardForm extends Component {

    handleOnChange = event => {
        const {name, value} = event.target;
        const currentRewardFormData = Object.assign({}, this.props.rewardFormData, 
            {[name]: value});
        this.props.updateRewardFormData(currentRewardFormData);
    }
    
    handleOnSubmit = event => {
        event.preventDefault();
        this.props.createReward(this.props.rewardFormData);
        this.props.history.push('/rewards')
    } 
    
    render() {
        const { name, description, value } = this.props.rewardFormData 
        return (
            <div>
                <div className="RewardFormContainer">
                    <br/>
                    <h3 className="NewRewardFormTitle">New Reward</h3>
                    <br/>
                    <Form onSubmit={this.handleOnSubmit} className="RewardForm">
                        <div>
                        <Form.Group controlId="formGroupRewardName">
                            <Form.Label className="FormLabels">Reward Name</Form.Label>
                            <Form.Control autoFocus size="sm" as="textarea" rows="1" name="name" value={name} onChange={this.handleOnChange} placeholder="Enter reward name" />
                        </Form.Group>
                        </div>
                        <div>
                        <Form.Group controlId="ControlTextareaDescription">
                            <Form.Label className="FormLabels">Description</Form.Label>
                            <Form.Control size="sm" as="textarea" rows="3" name="description" value={description} 
                                onChange={this.handleOnChange} placeholder="Enter description" />
                        </Form.Group>
                        </div>
                        <div>
                        <Form.Group controlId="formGroupPointsValue">
                            <Form.Label className="FormLabels">Value</Form.Label>
                            <br/>
                            <Form.Control className="ValueInput" size="sm" type="text" name="value" value={value} onChange={this.handleOnChange} placeholder="Points value" />
                        </Form.Group>
                        </div>
                        <br/>
                        <Button size="xs" variant="outline-info" type="submit">
                            Add Reward
                        </Button>

                    </Form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        rewardFormData: state.rewardFormData
    }
}

export default connect(mapStateToProps, { createReward, updateRewardFormData })(withRouter(RewardForm));