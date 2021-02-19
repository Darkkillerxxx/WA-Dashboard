import React from 'react';

class TransactionalLogs extends React.Component {
    render() {
        return(
            <div className="Base-Back">
                <div className="row">
                    <div className="col-12 Common-Headline mb-3">
                        <span><h3>Transactional Logs</h3></span>
                    </div>

                    <div className="col-12 mt-3">
                        <div className="w-100 p-2 bg-primary rounded-top">
                            <p className="text-white mb-0">Filters</p>
                        </div>
                        <div className="card p-3">
                            <div className="row">
                                <div className="col-3">
                                    <div className="form-group">
                                        <label>Show Last Transaction</label>
                                        <input type="text" className="form-control" placeholder="Enter Campaign Name" />
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="form-group">
                                        <label>Username</label>
                                        <input type="text" className="form-control" placeholder="Enter Username" />
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="form-group">
                                        <label>Reseller</label>
                                        <input type="text" className="form-control" placeholder="Enter Reseller" />
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="form-group">
                                        <label>Payment Type</label>
                                        <input type="text" className="form-control" placeholder="Enter Payment Type" />
                                    </div>
                                </div>

                                <div className="w-100 mr-3" style={{textAlign:'right'}}>
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 mt-3">
                        <div className="w-100 p-2 bg-primary rounded-top">
                            <p className="text-white mb-0">Your Transaction Logs</p>
                        </div>
                        <div className="card">
                            <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Id</th>
                                            <th>Time</th>
                                            <th>Transaction</th>
                                            <th>Reseller</th>
                                            <th>User</th>
                                            <th>Credits</th>
                                            <th>Price</th>
                                            <th>Amount</th>
                                            <th>Description</th>
                                            <th>Service</th>
                                            <th>Action</th>
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

export default TransactionalLogs;