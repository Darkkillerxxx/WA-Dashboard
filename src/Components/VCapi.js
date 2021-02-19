import React from 'react';

class VCapi extends React.Component {
    render() {
        return(
            <div className="Base-Back">
                <div className="row">
                    <div className="col-12 Common-Headline mb-3">
                        <span><h3>Voice Call API</h3></span>
                    </div>

                    <div className="col-12">
                        <div className="card">
                            <div className="card-body">
                            <ul class="nav nav-tabs">
                                <li class="nav-item">
                                    <a class="nav-link active" href="#">Understanding Api</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Voice Mail API</a>
                                </li>
                            </ul>
                            <div className="tab-content">
                                <div className="tab-pane active">
                                    <p className="mt-4">Send API</p>
                                    <div className="p-4 border rounded">
                                        http://wa2.nuke.co.in/test/admin/Voicecallapi/insert_voicecall_api?username=username&password=password&mobile_no=91975211111,9186023355&campaign_name=API&audio=audiopath

                                        pathtoaudio = Path of audio on your server with http:// (Example: http://xyz.com/audio/00001.mp3)
                                    </div>

                                    <p className="mt-4">Delivery API</p>
                                    <div className="p-4 border rounded">
                                        http://wa2.nuke.co.in/v2.0/html/voicecall_fetch_api.php?username=username&requestid=898986795981d8f826013
                                    </div>

                                    <p className="mt-4">Campaign Details API</p>
                                    <div className="p-4 border rounded">
                                    http://wa2.nuke.co.in/v2.0/html/voicecall_fetch_campaign.php?username=username&password=password&requestid=898986795981d8f826013
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


export default VCapi;