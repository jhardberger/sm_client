import React, { Component } from 'react';


class Login extends Component {
	constructor(){
		super();
		this.state = {
			username: '',
			password: ''
		}
	}
	dance = () => {
		console.log('bust a move by logging in');
	}
	handleChange = (e) => {
		this.setState({
			[e.currentTarget.name]: e.currentTarget.value
		});
	}
	handleSubmit = async (e) => {
		e.preventDefault();

		const loginResponse = await fetch('http://localhost:9000/auth', {
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
			this.props.history.push('/user')
		}
	}
	render(){
		return(
			
		)
	}
}
export default Login;
