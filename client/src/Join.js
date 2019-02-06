import React from 'react';
import { FieldGroup, BasicHeader } from './Utilities.js';
import { Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import './App.css';
class Join extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            foundBy: '',
            reason: ''
        };
    }

    handleSubmit = () => {
        
    }

    handleOnChange = (event) => {
        this.setState({[event.target.id]: event.target.value});
    }

    render() {
        return (
            <section className="container">
                <BasicHeader title="Join" />

                <p>Intersting in joining the SIBA as the general manager of your own basketball team? Fill out the form below and the commissioner
                will contact you with more information on the available teams and other important steps.
                </p>
                
                <form>
                    <FieldGroup
                    id="name"
                    type="text"
                    label="Name:"
                    value={this.state.name}
                    onChange={e => this.handleOnChange(e)}
                    />
                    
                    <FieldGroup 
                    id="email"
                    type="email"
                    label="Email:"
                    value={this.state.email}
                    onChange={e => this.handleOnChange(e)}
                    />
                    
                    <FormGroup controlId="foundBy">
                    <ControlLabel>Found SIBA by:</ControlLabel>
                        <FormControl 
                        onChange={e => this.handleOnChange(e)} 
                        componentClass="select" placeholder="Choose one">
                            <option value="">Choose one</option>
                            <option value="referral">Friend/Family</option>
                            <option value="google">Google</option>
                            <option value="fb">Facebook</option>
                            <option value="twitter">Twitter</option>
                            <option value="other">Other</option>
                        </FormControl>
                    </FormGroup>
                    
                    <FormGroup controlId="reason">
                        <ControlLabel>Reason for Joining:</ControlLabel>
                        <FormControl 
                        componentClass="textarea" placeholder="Optional" 
                        value={this.state.reason} 
                        onChange={e => this.handleOnChange(e)} />
                    </FormGroup>
                    
                    <Button type="submit" onClick={this.handleSubmit()}>Submit</Button>
                </form>
            </section>
        );
    }
}

export default Join;