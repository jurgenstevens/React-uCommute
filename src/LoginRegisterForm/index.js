import React from 'react';
import { Form, Button, Label } from 'semantic-ui-react'; // for now
// will be using material instead

class LoginRegisterForm extends React.Component {
	constructor() {
		super()

		this.state = {
			username: '',
			email: '',
			password: '',
			action: 'login'
		}
	}

	loginRegister = () => {
		if(this.state.action === "login"){
			this.props.login({
				email: this.state.email,
				password: this.state.password
			})
		} else {
			this.props.register({
				username: this.state.username,
				email: this.state.email,
				password: this.state.password
			})
		}
	}

	switchForm = () => {
		if (this.state.action === "login"){
			this.setState({
				action: 'register'
			})
		} else {
			this.setState({
				action: 'login'
			})
		}
	}

	handleChange = e => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}


	handleSubmit = e => {
		e.preventDefault()
		this.loginRegister()
	}

	render() {
		return(
			<div className="loginRegisterForm">
				<img src={'https://66.media.tumblr.com/33bf268c2fb66b305b92c7a90b588ce0/tumblr_plaxesvk9o1tk3uvho1_400.png'} className='front-page-map'/>
				<Form onSubmit={this.handleSubmit}>
		        	{
		         		this.state.action === "register"
				        ?
				        <React.Fragment>
				        <Label>Username:</Label>
				        <Form.Input className="form-style"
				        	type="text" 
				        	name="username" 
				        	value={this.state.username}
				        	onChange={this.handleChange}
				        />
				        </React.Fragment>
				        :
				        null
			        }
		        <Label>Email:</Label>
		        <Form.Input className="form-style"
		            type="email" 
		            name="email" 
		            value={this.state.email}
		            onChange={this.handleChange}
		        />
		        <Label>Password:</Label>
		        <Form.Input className="form-style"
		            type="password" 
		            name="password" 
		            value={this.state.password}
		            onChange={this.handleChange}
		        />          
		        <Button type="Submit">{this.state.action === "register" ? "Register" : "Log in" }</Button>
		        </Form>
		        {
			        this.state.action === "register"
			        ?
			        <small>Already have an account? Log in <span onClick={this.switchForm}>here</span>.</small>
			        :
			        <small>Need an account? Sign up <span onClick={this.switchForm}>here</span>!</small>  
    			}
			</div>
		)
	}
}

export default LoginRegisterForm