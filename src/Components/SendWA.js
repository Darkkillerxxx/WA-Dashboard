import React from 'react';


class SendWA extends React.Component {

    constructor(){
        super();
        this.state={

        };
    }

    render()
    {
        return(
            <div className="Base-Back">
               
                <div className="row">
                    <div className="col-12 Common-Headline mb-3">
                        <span><h3>Send WhatsApp Message</h3></span>
                    </div>
    
                    <div className="col-6">             
                        <div className="card">
                            <div className="card-body">
                                <div className="d-flex">
                                    <p className="mr-5">Account Limits</p>
                                    <div>
                                        <p className="text-danger mb-0">Demo Limit (Daily) : 3 Remaining</p>
                                        <p className="text-danger">Campaign Limit (Daily) : 4 Remaining</p>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label>Campaign Name</label>
                                    <input type="text" className="form-control" placeholder="Enter Campaign Name" />
                                </div>

                                <div className="form-group">
                                    <label>Mobile Number</label>
                                    <textarea type="text" className="form-control" placeholder="You Can Enter Multiple Numbers Seperated By A Comma" rows="4"/>
                                </div>

                                <div className="form-group">
                                    <label>Message</label>
                                    <textarea type="text" className="form-control" placeholder="Enter Your Message" rows="4"/>
                                </div>

                                <div className="form-group">
                                    <label>Name</label>
                                    <input type="text" className="form-control" placeholder="Enter Name Without Any Special Characters" />
                                </div>

                                <div className="form-group">
                                    <label>Address</label>
                                    <input type="text" className="form-control" placeholder="Enter Your Address" />
                                </div>

                                <div className="form-group">
                                    <label>Contact Number</label>
                                    <input type="text" className="form-control" placeholder="Enter Contact Number" />
                                </div>

                                <div className="form-group">
                                    <label>Office name</label>
                                    <input type="text" className="form-control" placeholder="Enter Office Number" />
                                </div>

                                <div className="form-group">
                                    <label>Email Id</label>
                                    <input type="text" className="form-control" placeholder="Enter Your Email Id" />
                                </div>

                                <div className="form-group">
                                    <label>Cell Number</label>
                                    <input type="text" className="form-control" placeholder="Enter Cell Number" />
                                </div>

                                <div className="form-group">
                                    <label>Url</label>
                                    <input type="text" className="form-control" placeholder="Enter Url" />
                                </div>

                            </div>
                        </div>
                    </div>  

                    <div className="col-6">
                        <div className="row">
                            <div className="col-6">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="d-flex flex-wrap align-items-center">
                                            <div className="mr-auto">
                                                <p className="text-uppercase text-dark font-weight-bold mb-1">Credits</p>
                                                <p className="text-gray mb-0" style={{opacity:0.7}}>Your Remaining Credits</p>
                                            </div>
                                            <p className="text-success font-weight-bold font-size-36 mb-0">1500</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-6">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="d-flex flex-wrap align-items-center">
                                            <div className="mr-auto">
                                                <p className="text-uppercase text-dark font-weight-bold mb-1">Campaigns In Queue</p>
                                                <p className="text-gray mb-0" style={{opacity:0.7}}>Your Queued Campaigns</p>
                                            </div>
                                            <p className="text-success font-weight-bold font-size-36 mb-0">1</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 mt-2">
                                <div className="w-100 p-2 bg-primary rounded-top">
                                    <p className="text-white mb-0">Import From Contact Groups</p>
                                </div>

                                <div className="card">
                                    <table className="table">
                                            <thead>
                                                <tr>
                                                    <th>#</th>
                                                    <th>Group Name</th>
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
                </div>
            </div>
        )
    }
}

export default SendWA;