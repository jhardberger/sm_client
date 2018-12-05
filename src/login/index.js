import React, { Component } from 'react';
import { Form, Label, Button } from 'semantic-ui-react';

class Login extends Component {
	constructor(){
		super();
		this.state = {
			username: '',
			password: ''
		}
	}
	
	colorChange = () => {
		console.log('the rest of the functions are now magically green');
	}

	handleChange = (e) => {
		this.setState({
			[e.currentTarget.name]: e.currentTarget.value
		});
	}
	handleSubmit = async (e) => {
		e.preventDefault();

		const loginResponse = await fetch('http://localhost:9000/login', {
			method: 'POST',
			credentials: 'include',
			body: JSON.stringify(this.state),
			headers: {
				'Content-Type': 'application/json'
			}
		});

		const parsedResponse = await loginResponse.json();

		if(parsedResponse.data === 'login successful'){
			console.log('logged in');
			this.props.history.push('/home')
		}
	}
	render(){
		return(
			<Form onSubmit={this.handleSubmit}>
				<Label> Username</Label>
				<Form.Input type='text' name='username' onChange={this.handleChange} />
				<Label> Password</Label>
				<Form.Input type='password' name='password' onChange={this.handleChange} />
				<Button type='submit' color='green'>Login</Button>
			</Form>
		)
	}
}
export default Login;
