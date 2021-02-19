import React from 'react';

class AddContact extends React.Component {

    render() {
        return (
            <div className="Base-Back">
                <div className="row">
                    <div className="col-12 Common-Headline mb-3">
                        <span><h3>Add Contact</h3></span>
                    </div>
                </div>

                <div className="col-6 mt-3">
                    <div className="card">
                            <div className="card-body">
                                <div className="form-group">
                                    <label>Select Group</label>
                                    <select className="form-select form-control w-100"  aria-label="Default select example">
                                    
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label>Contact Name</label>
                                    <input type="text" className="form-control" placeholder="Please Enter Contact Name" />
                                </div>

                                <div className="form-group">
                                    <label>Contact Mobile</label>
                                    <input type="text" className="form-control" placeholder="Please Enter Contact Mobile" />
                                </div>

                                <div className="form-group">
                                    <label>EmailId</label>
                                    <input type="text" className="form-control" placeholder="Please Enter EmailId" />
                                </div>

                                <div className="w-100" style={{textAlign:'right'}}>
                                    <button className="btn btn-primary">Add Contact</button>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default AddContact;