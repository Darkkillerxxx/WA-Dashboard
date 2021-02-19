import React from 'react';

class VCReport extends React.Component {

    render() {
        return(
            <div className="Base-Back">
                <div className="row">
                    <div className="col-12 Common-Headline mb-3">
                        <span><h3>Voice Delivery Report</h3></span>
                    </div>
                    <div className="col-12 mt-3">
                        <div className="w-100 p-2 bg-primary rounded-top">
                            <p className="text-white mb-0">Delivery List</p>
                        </div>
                        <div className="card">
                            <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Campaign Name</th>
                                            <th>Username</th>
                                            <th>Date</th>
                                            <th>RequestId</th>
                                            <th>CallerId</th>
                                            <th>No Of Msg</th>
                                            <th>Content</th>
                                            <th>DLR</th>
                                            <th>Export</th>
                                            <th>Status</th>
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

export default VCReport;