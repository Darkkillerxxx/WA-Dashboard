import React from 'react';
import '../styles/CustomStyle.css';
import { withRouter } from "react-router-dom";
class Login extends React.Component {
    constructor() {
        super();
        this.state={
            Username:"",
            Password:"",
            Error:0
        };
    }

    onUsernameChange=(e)=>{
        this.setState({Username: e.target.value});
    }

    onPasswordChange=(e)=>{
        this.setState({Password: e.target.value});
    }

    onLogin=()=>{
        if(this.state.Username === "Kanak" && this.state.Password === "123456")
        {
            this.setState({Error:0})
            this.props.Login();
            this.props.history.push('dashboard')
            console.log("Login")
        }
        else
        {
            this.setState({Error:1})
        }
    }

    componentDidMount(){
        let IsLoggedIn = localStorage.getItem('IsLoggedIn');
        if(IsLoggedIn)
        {
            this.props.history.push('dashboard');
        }
    }

    render() {
        return (
            <div className="w-100 base-color login-base">
                <div className="w-50 h-50 card login-card d-flex justify-content-center align-items-center">
                    <h3><b>LOGIN</b></h3>
                    {this.state.Error !== 0 ? 
                        <span className="text-danger">Your Username Or Password is Incorrect</span>
                        :
                        null}
                    <input onChange={this.onUsernameChange} type="text" className="form-control mt-2 mb-2 w-75" placeholder="Enter Username" />
                    <input onChange={this.onPasswordChange} type="password" className="form-control mt-2 mb-2 w-75" placeholder="Enter Password" />
                    <button onClick={()=>this.onLogin()} type="button" className="btn btn-primary w-25">Login</button>
                </div>
            </div>
        )
    }
}

export default withRouter(Login);