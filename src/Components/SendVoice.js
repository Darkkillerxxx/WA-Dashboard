import React from 'react';

class SendVoice extends React.Component {
    render() {
        return (
            <div className="Base-Back">
                <div className="row">
                    <div className="col-12 Common-Headline mb-3">
                        <span><h3>Send Voice Mail</h3></span>
                    </div>

                    <div className="col-6">
                        <div className="card">
                            <div className="card-body">
                                <div className="form-group">
                                    <button className="btn btn-primary">Add Caller ID</button>
                                </div>

                                <div className="form-group">
                                    <label>Campaign Name</label>
                                    <input type="text" className="form-control" placeholder="Enter Campaign Name" />
                                </div>

                                <div className="form-group">
                                    <label>Mobile Numbers</label>
                                    <textarea className="form-control" placeholder="Enter Multiple Mobile Numbers Seperated By A Comma" />
                                </div>

                                <div className="form-group">
                                    <label for="exampleFormControlFile1">Upload Audio File</label>
                                    <input type="file" className="form-control-file" id="exampleFormControlFile1" />
                                </div>

                                <div className="w-100" style={{textAlign:'right'}}>
                                    <button className="btn btn-primary">Send</button>
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
                                                <p className="text-gray mb-0" style={{opacity:0.7}}>Your Remainig Credits</p>
                                            </div>
                                            <p className="text-success font-weight-bold font-size-36 mb-0">12</p>
                                        </div>
                                    </div>
                                </div>    
                            </div>

                            <div className="col-6">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="d-flex flex-wrap align-items-center">
                                            <div className="mr-auto">
                                                <p className="text-uppercase text-dark font-weight-bold mb-1">E.T.A</p>
                                                <p className="text-gray mb-0" style={{opacity:0.7}}>Estimated Time Remaining</p>
                                            </div>
                                            <p className="text-success font-weight-bold font-size-36 mb-0"> --/-- </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 mt-3">
                                <div className="w-100 p-2 bg-primary rounded-top">
                                    <p className="text-white mb-0">Last 5 Send Audio</p>
                                </div>
                                <div className="card">
                                    <table className="table">
                                            <thead>
                                                <tr>
                                                    <th>Audio FIle</th>
                                                    <th>Data Type</th>
                                                    <th>Type</th>
                                                    <th>Play Audio</th>
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

export default SendVoice;