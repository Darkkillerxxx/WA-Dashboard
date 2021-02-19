import React from 'react';

class ManageContact extends React.Component {

    render() {
        return (
            <div className="Base-Back">
                <div className="row">
                    <div className="col-12 Common-Headline mb-3">
                        <span><h3>Manage Contact</h3></span>
                    </div>
                </div>
                <div className="col-12 mt-3">
                        <div className="w-100 p-2 bg-primary rounded-top">
                            <p className="text-white mb-0">Your Contact List</p>
                        </div>
                        <div className="card">
                            <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Id</th>
                                            <th>Username</th>
                                            <th>Mobile No.</th>
                                            <th>Email</th>
                                            <th>Group</th>
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
        )
    }
}


export default ManageContact;