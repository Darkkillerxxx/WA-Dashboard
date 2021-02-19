import logo from './logo.svg';
import './App.css';
import React from 'react';
import { withRouter } from "react-router-dom";
import '../src/styles/CustomStyle.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars} from '@fortawesome/free-solid-svg-icons';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import SideMenu from './Components/SideMenu';
import { connect }from 'react-redux';
import {setLogin} from './Store/Actions/ActionMain';
import SendWA from './Components/SendWA';
import WAReport from './Components/WAReport';
import Scrub from './Components/Scrub';
import Invoice from './Components/Invoice';
import VCapi from './Components/VCapi';
import VCReport from './Components/VCReport';
import SendVoice from './Components/SendVoice';
import TransactionLogs from './Components/TransactionalLogs';
import AddContacts from './Components/AddContact'
import AddGroup from './Components/AddGroup';
import ManageContact from './Components/ManageContact';
import ManageGroup from './Components/ManageGroup';
import BulkContact from './Components/BulkContacts';

class App extends React.Component {
    constructor()
    {
      super();
      this.state={
        isLoggedIn: false,
        SideMenuCollapsed:false
      };
      localStorage.setItem("IsLoggedIn", false);
    }

    setLogin=()=>{
      this.setState({isLoggedIn: !this.state.isLoggedIn},()=>{
        localStorage.setItem("IsLoggedIn", true);
        this.props.onSetLogin(this.state.isLoggedIn)
      });
    }

    TriggerMenu=()=>{
      this.setState({SideMenuCollapsed:!this.state.SideMenuCollapsed})
    }

    componentDidMount(){
      let IsLoggedIn = localStorage.getItem("IsLoggedIn")
      if(IsLoggedIn)
      {
        this.props.onSetLogin(true)
        this.setState({isLoggedIn:true})
      }
    }

  render() {
    return (
        <>
        <Router>
          {this.state.isLoggedIn ? 
          <nav className="navbar navbar-dark bg-success">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <FontAwesomeIcon icon={faBars} />
                </a>
              </li>
            </ul>
          </nav>:null}
            
            <div className="row">
              {this.state.isLoggedIn ? 
              <div className="col-lg-3 col-xl-2">
                <div className="bg-dark dashboard-menu" style={{height:'100vh'}}>
                  <SideMenu />
                </div>
              </div>:null}

              <div className={this.state.isLoggedIn ? "col-lg-9 col-xl-10":"col-12"}>
                
                  <Switch>
                    <Route exact path="/">
                      <Login Login={this.setLogin}/>
                    </Route>
                    <Route exact path="/dashboard">
                      <Dashboard />
                    </Route>
                    <Route exact path="/sendWA">
                      <SendWA />
                    </Route>
                    <Route exact path="/WAReport">
                      <WAReport />
                    </Route>
                    <Route exact path="/Scrub">
                      <Scrub />
                    </Route>
                    <Route exact path="/Invoice">
                      <Invoice />
                    </Route>
                    <Route exact path="/Vcapi">
                      <VCapi />
                    </Route>
                    <Route exact path="/VCReport">
                      <VCReport />
                    </Route>
                    <Route exact path="/SendVoice">
                      <SendVoice />
                    </Route>
                    <Route exact path="/TransactionalLogs">
                      <TransactionLogs />
                    </Route>
                    <Route exact path="/AddContacts">
                      <AddContacts />
                    </Route>
                    <Route exact path="/AddGroup">
                      <AddGroup />
                    </Route>
                    <Route exact path="/ManageContact">
                      <ManageContact />
                    </Route>
                    <Route exact path="/ManageGroup">
                      <ManageGroup />
                    </Route>
                    <Route exact path="/BulkImportContacts">
                      <BulkContact />
                    </Route>
                  </Switch>
                
              </div>
            </div>
            </Router>
        </>
    );
  }  
}


const mapStateToProps= state =>{
  return{
      Login:state.Main.IsLoggedIn
  }
}

const mapDispatchToProps = dispatch =>{
  return{
      onSetLogin:(response)=>dispatch(setLogin(response))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
