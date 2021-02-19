import React from 'react';


class WAReport extends React.Component {
    
    render() {
        return(
            <div className="Base-Back">
                <div className="row">
                    <div className="col-12 Common-Headline mb-3">
                        <span><h3>WhatsApp Delivery Report</h3></span>
                    </div>

                    <div className="col-12 mt-2">
                        <div className="w-100 p-2 bg-primary rounded-top">
                                <p className="text-white mb-0">WhatsApp Delivery Report</p>
                            </div>
                            <div className="card">
                                <table className="table">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>DLR / Request</th>
                                                <th>Export</th>
                                                <th>Username</th>
                                                <th>Date</th>
                                                <th>Request Id</th>
                                                <th>Status</th>
                                                <th>No .of Msg</th>
                                                <th>Message Text</th>
                                                <th>Details</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">1</th>
                                                <td>
                                                    <button type="button" className="btn btn-primary mb-2">DLR</button><br/>
                                                    <button type="button" className="btn btn-primary">Request DLR</button>
                                                </td>
                                                <td>
                                                    <button type="button" className="btn btn-primary mb-2">Export DLR</button>
                                                </td>
                                                <td>
                                                    <p>Earthlike</p>
                                                </td>
                                                <td>
                                                    <p>18 th Feb 2021</p>
                                                </td>
                                                <td>
                                                    <p>863669809602e329424fa1</p>
                                                </td>
                                                <td>
                                                    <p className="text-success">Sent</p>
                                                </td>
                                                <td>
                                                    <p className="text-success">170</p>
                                                </td>
                                                <td>
                                                    <textarea className="form-control" input="text"></textarea>
                                                </td> 
                                                <td>
                                                    <button type="button" className="btn btn-primary mb-2">View Details</button>
                                                </td> 
                                            </tr>
                                        </tbody>
                                </table> 
                               
                            </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default WAReport;