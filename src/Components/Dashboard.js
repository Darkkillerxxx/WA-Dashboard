import React from 'react';
import { withRouter } from "react-router-dom";
import '../styles/CustomStyle.css'

class Dashboard extends React.Component {
    constructor() {
        super();
        this.state={

        };
    }

    render() {
        return (
            <div className="Base-Back">
                <div className="row">
                    <div className="col-12 Common-Headline mb-3">
                        <span><h3>Your Dashboard</h3></span>
                    </div>

                    <div className="col-3">
                        <div className="card">
                            <div className="card-body">
                                <div className="d-flex flex-wrap align-items-center">
                                    <div className="mr-auto">
                                        <p className="text-uppercase text-dark font-weight-bold mb-1">Whatsapp API Credit</p>
                                        <p className="text-gray mb-0" style={{opacity:0.7}}>Your Remaining Credits</p>
                                    </div>
                                    <p className="text-success font-weight-bold font-size-36 mb-0">1500</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-3">
                        <div className="card">
                            <div className="card-body">
                                <div className="d-flex flex-wrap align-items-center">
                                    <div className="mr-auto">
                                        <p className="text-uppercase text-dark font-weight-bold mb-1">New Message</p>
                                        <p className="text-gray mb-0" style={{opacity:0.7}}>New Messages Received</p>
                                    </div>
                                    <p className="text-success font-weight-bold font-size-36 mb-0">12</p>
                                </div>
                            </div>
                        </div>    
                    </div>

                    <div className="col-3">
                        <div className="card">
                            <div className="card-body">
                                <div className="d-flex flex-wrap align-items-center">
                                    <div className="mr-auto">
                                        <p className="text-uppercase text-dark font-weight-bold mb-1">Registered Users</p>
                                        <p className="text-gray mb-0" style={{opacity:0.7}}>Your Total Registered Users</p>
                                    </div>
                                    <p className="text-success font-weight-bold font-size-36 mb-0">65</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-3">
                        <div className="card">
                            <div className="card-body">
                                <div className="d-flex flex-wrap align-items-center">
                                    <div className="mr-auto">
                                        <p className="text-uppercase text-dark font-weight-bold mb-1">GSM SMS</p>
                                        <p className="text-gray mb-0" style={{opacity:0.7}}>Total GSM SMS Sent</p>
                                    </div>
                                    <p className="text-success font-weight-bold font-size-36 mb-0">48</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-7 mt-3">
                        <div className="w-100 p-2 bg-primary rounded-top">
                            <p className="text-white mb-0">Campaign Status</p>
                        </div>
                        <div className="card">
                            <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Request Number</th>
                                            <th>E.T.A</th>
                                            <th>Numbers</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                            </table> 
                            <div className="w-100">
                                <p className="text-center" style={{opacity:0.5}}>No Data To Display</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-5 mt-3">
                        <div className="w-100 p-2 bg-primary rounded-top">
                            <p className="text-white mb-0">Latest News</p>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                    <div className="mr-auto">
                                        <p className="text-uppercase text-dark font-weight-bold mb-1">Whatsapp Voice Calls</p>
                                        <p className="text-gray mb-0" style={{opacity:0.7,fontSize:14}}>It gives us immense pleasure to introduce BULK WHATSAPP VOICE CALLS, first time ever as a service. Please contact your administrator for early access to this service.</p>
                                    </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-7 mt-3">
                        <div className="w-100 p-2 bg-primary rounded-top">
                            <p className="text-white mb-0">Reply Of Report Problems</p>
                        </div>
                        <div className="card">
                            <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Message</th>
                                            <th>Solution</th>
                                            <th>Date</th>
                                        </tr>
                                    </thead>
                            </table> 
                            <div className="w-100">
                                <p className="text-center" style={{opacity:0.5}}>No Data To Display</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Dashboard);