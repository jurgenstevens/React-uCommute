import React from 'react';
import './App.css';
// import StationContainer from './StationContainer';
// import StationList from './StationList';
import TripContainer from './TripContainer';
import LoginRegisterForm from './LoginRegisterForm'



class App extends React.Component {
  constructor(){
    super()
    console.log(process.env.REACT_APP_API_URL);
    this.state = {
        loggedIn: false,
        loggedInUserEmail: null
    } 
  }

  login = async (loginInfo) => {
    const response = await fetch(process.env.REACT_APP_API_URL + '/api/v1/users/login',{
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify(loginInfo),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const parsedLoginResponse = await response.json()
    if(parsedLoginResponse.status.code === 200){
      this.setState({
        loggedIn: true,
        loggedInUserEmail: parsedLoginResponse.data.email
      })
    } else {
      console.log("Login Failed");
      console.log(parsedLoginResponse);
    }
  }


  register = async (registerInfo) => {
    const response = await fetch(process.env.REACT_APP_API_URL + '/api/v1/users/register', {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify(registerInfo),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const parsedRegisterResponse = await response.json()

    if(parsedRegisterResponse.status.code === 201){
      this.setState({
        loggedIn: true,
        loggedInUserEmail: parsedRegisterResponse.data.email
      })
    } else {
      console.log("Registration failed:");
      console.log(parsedRegisterResponse);
    }
  }

  render(){
    return (
      <div className="App">
        {
          this.state.loggedIn
          ?
          <TripContainer />
          // <TripContainer /> //within the trip container is the CRUD for trips
                            // including the stations container and list
          :
          <LoginRegisterForm login={this.login} register={this.register} />
        }
      </div>
    )
  }
}

export default App;
