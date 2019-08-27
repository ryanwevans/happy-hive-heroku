import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import { withRouter } from 'react-router-dom';


const NavBar = (props) => {
    
    const checkForAchiever = (name) => {
        const isAchiever = props.achievers.find( achiever => achiever.name === name)
        if (isAchiever && isAchiever.name.length > 0) {
            return isAchiever
        } return false
    }

    const handleOnSubmit = (event) => {
        event.preventDefault();
        const nameInput = event.target.elements.name.value;

        if (checkForAchiever(nameInput) !== false) {
            const foundAchiever = checkForAchiever(nameInput)
            sessionStorage.setItem('current_user_name', foundAchiever.name)
            sessionStorage.setItem('current_user_id', foundAchiever.id)
            sessionStorage.setItem('current_user_points', foundAchiever.points_earned)
        } else {
            props.createAchiever({name: nameInput, points_earned: 0})
        }
        props.history.push('/chores')
    }

    const handleOnLogout = event => {
        event.preventDefault();
        sessionStorage.clear();
        props.history.push('/')
    }

    return (
        <Navbar fixed="top" bg="dark" variant="dark" size="xs" style={{ height: '74px', minWidth: '716px' }}>

            <Navbar.Brand className="HappyHiveBrand" href="/">Happy Hive</Navbar.Brand>

            <Navbar size="xs" className="mr-auto" style={{ /*width: '60%'*/ }}>
                <NavLink style={{ marginRight: '20px' }} to='/chores'>Chores</NavLink>
                <NavLink style={{ marginRight: '20px' }} to='/rewards'>Rewards</NavLink>
                <NavLink style={{ marginRight: '20px' }} to='/achievers'>Achievers</NavLink>
                {/* <NavLink style={{ marginRight: '20px' }} to='/chores/new'><em>Add Chore</em></NavLink>
                <NavLink style={{ marginRight: '20px' }} to='/rewards/new'><em>Add Reward</em></NavLink> */}
            </Navbar>
             
            {/* Load 'sign in' form or display signed in user and 'log out' button */}
            { sessionStorage.current_user_name
            ? <React.Fragment>
                <Navbar bg="dark" variant="dark" style={{ /*width: '30%',*/ height: '70px' }}>
                <Form inline onSubmit={handleOnLogout}>
                    <InputGroup style={{ height: '70px' }} size="xs" variant="dark">
                        
                        <Navbar className="justify-content">
                            <React.Fragment>
                                <Navbar.Text>
                                <div className="welcome">
                                    Welcome, <strong>{sessionStorage.current_user_name}</strong><br/>
                                    <em className="points">You have  {sessionStorage.current_user_points} points</em>
                                </div>
                                </Navbar.Text>
                            </React.Fragment>
                        </Navbar>
                        <Button style={{ height: '25px', marginTop: '21px', padding: '1px' }} size="sm" variant="outline-info" type="submit">Sign out</Button>
                    </InputGroup>
                </Form>
                </Navbar>
             </React.Fragment>
            : <Navbar style={{ /*width: '30%',*/ height: '70px' }} bg="dark" variant="dark">
                <Form inline onSubmit={handleOnSubmit}>
                    <InputGroup style={{ height: '70px' }} size="sm">
                        <FormControl
                            style={{ height: '25px', marginTop: '21px', marginRight: '3px' }}
                            type="text"
                            name="name"
                            placeholder="Username"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                        />
                        <Button style={{ height: '25px', marginTop: '21px', padding: '1px'  }} size="sm" variant="outline-info" type="submit">Sign In</Button>
                    </InputGroup>
                </Form>
            </Navbar>
            }

        </Navbar>
    )
}

export default withRouter(NavBar);