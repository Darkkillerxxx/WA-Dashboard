import React from 'react';

class BulkContact extends React.Component {

    constructor() {
        super();
        this.state={
            UploadType:1
        };
    }

    changeUploadType=(e)=>{
        console.log(e.target.value);
    }

    render() {
        return (
            <div className="Base-Back">
                <div className="row">
                    <div className="col-12 Common-Headline mb-3">
                        <span><h3>Import Contacts in Bulk</h3></span>
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
                                    <label>Upload From</label>
                                    <select onChange={(e)=>this.setState({UploadType:e.target.value},()=>console.log(this.state.UploadType))} className="form-select form-control w-100"  aria-label="Default select example">
                                        <option value="1">CSV</option>
                                        <option value="2">Mobile No.</option>
                                    </select>
                                </div>

                                {parseInt(this.state.UploadType) === 1 ? 
                                <div className="form-group">
                                    <label for="exampleFormControlFile1">Upload CSV</label>
                                    <input type="file" class="form-control-file" id="exampleFormControlFile1" />
                                </div>:
                                parseInt(this.state.UploadType) === 2 ? 
                                <div className="form-group">
                                    <label>Mobile Numbers</label>
                                    <textarea className="form-control" placeholder="Enter Multiple Mobile Numbers Seperated By A Comma" />
                                </div>:null
                                }
                                

                                <div className="w-100" style={{textAlign:'right'}}>
                                    <button className="btn btn-primary">Add Contacts</button>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default BulkContact;