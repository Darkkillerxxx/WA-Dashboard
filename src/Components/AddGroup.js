import React from 'react';

class AddGroup extends React.Component {

    render() {
        return (
            <div className="Base-Back">
                <div className="row">
                    <div className="col-12 Common-Headline mb-3">
                        <span><h3>Add Group</h3></span>
                    </div>
                </div>

                <div className="col-6 mt-3">
                    <div className="card">
                            <div className="card-body">
                              
                                <div className="form-group">
                                    <label>Contact Name</label>
                                    <input type="text" className="form-control" placeholder="Please Enter Contact Name" />
                                </div>

                                <div className="w-100" style={{textAlign:'right'}}>
                                    <button className="btn btn-primary">Add Group</button>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default AddGroup;