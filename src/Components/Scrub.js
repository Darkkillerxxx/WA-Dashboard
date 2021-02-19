import React from 'react';

class Scrub extends React.Component {
    render() {
        return (
            <div className="Base-Back">
                <div className="row">
                    <div className="col-12 Common-Headline mb-3">
                        <span><h3>Scrub Numbers</h3></span>
                    </div>

                    <div className="col-12 mt-3">
                        <div className="card">
                            <div className="card-body">
                                <div className="col-6">
                                    <div className="form-group">
                                        <label>Campaign Name</label>
                                        <input type="text" className="form-control" placeholder="Enter Campaign Name" />
                                    </div>

                                    <div className="form-group">
                                        <label>Mobile Number</label>
                                        <textarea type="text" className="form-control" placeholder="Enter Multiple Mobile Numbers Seperated By A Comma" rows="4" />
                                    </div>

                                    <div className="w-100" style={{textAlign:'right'}}>
                                        <button type="button" className="btn btn-primary">Submit</button>
                                    </div>
                                </div>

                                <div className="col-12 mt-4">
                                    <div className="w-100 p-2 bg-primary rounded-top">
                                        <p className="text-white mb-0">Scrub Report</p>
                                    </div>

                                    <div className="card">
                                        <table className="table">
                                                <thead>
                                                    <tr>
                                                        <th>Request Number</th>
                                                        <th>Username</th>
                                                        <th>Total Numbers</th>
                                                        <th>Request Id</th>
                                                        <th>Status</th>
                                                        <th>Date</th>
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
                    </div>
                </div>
            </div>
        )   
    }
}


export default Scrub; 