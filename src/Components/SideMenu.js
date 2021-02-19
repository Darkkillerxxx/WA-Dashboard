import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars,faHome,faPaperPlane,faDownload,faCloudDownloadAlt,faCreditCard,faBook } from '@fortawesome/free-solid-svg-icons';
import { withRouter } from "react-router-dom";

class SideMenu extends React.Component {
constructor() {
    super();
    this.state={
        MenuContent:[
            {
                Title:"Dashboard",
                Icon:faHome,
                SubMenu:[],
                IsExpanded:false,
                Handle:"dashboard"
            },
            {
                Title:"Whatsapp Bulk",
                Icon:faPaperPlane,
                SubMenu:[
                    {
                        Title:"Send WhatsApp",
                        Icon:faDownload,
                        Handle:"sendWA"
                    },
                    {
                        Title:"WhatsApp Report",
                        Icon:faDownload,
                        Handle:"WAReport"
                    }
                ],
                IsExpanded:false
            },
            {
                Title:"Whatsapp API",
                Icon:faDownload,
                IsExpanded:false,
                SubMenu:[{
                    Title:"Campaign Wise",
                    Icon:faDownload,
                }]
            },
            {
                Title:"Whatsapp Buisness",
                Icon:faCloudDownloadAlt,
                IsExpanded:false,
                SubMenu:[]
            },
            {
                Title:"Transaction Logs",
                Icon:faCreditCard,
                IsExpanded:false,
                SubMenu:[],
                Handle:"TransactionalLogs"
            },
            {
                Title:"Manage SMS",
                Icon:faBook,
                IsExpanded:false,
                SubMenu:[]
            },
            {
                Title:"Contact",
                Icon:faBook,
                IsExpanded:false,
                SubMenu:[
                    {
                        Title:"Add Contact",
                        Icon:faDownload,
                        Handle:"AddContacts"
                    },
                    {
                        Title:"Add Group",
                        Icon:faDownload,
                        Handle:"AddGroup"
                    },
                    {
                        Title:"Manage Contact",
                        Icon:faDownload,
                        Handle:"ManageContact"
                    },
                    {
                        Title:"Manage Group",
                        Icon:faDownload,
                        Handle:"ManageGroup"
                    },
                    {
                        Title:"Bulk Import Contacts",
                        Icon:faDownload,
                        Handle:"BulkImportContacts"
                    }
                ]
            },
            {
                Title:"Bulk Voice Call",
                Icon:faBook,
                IsExpanded:false,
                SubMenu:[ {
                    Title:"Send Voice Call",
                    Icon:faDownload,
                    Handle:"SendVoice"
                },
                {
                    Title:"Voice Call Report",
                    Icon:faDownload,
                    Handle:"VCReport"
                }]
            },
            {
                Title:"Voice Call",
                Icon:faBook,
                IsExpanded:false,
                SubMenu:[
                    {
                        Title:"Voice Call API",
                        Icon:faDownload,
                        Handle:"VCapi"
                    }
                ],
            },
            {
                Title:"Invoice",
                Icon:faBook,
                IsExpanded:false,
                SubMenu:[],
                Handle:"Invoice"
            },
            {
                Title:"Scrub",
                Icon:faBook,
                IsExpanded:false,
                SubMenu:[],
                Handle:"Scrub"
            }
        ],
        SelectedId:0
    };
}

HandleMenuClick=(index)=>{
    if(this.state.MenuContent[index].SubMenu.length > 0)
    {
        let TempMenuContent=this.state.MenuContent;
        TempMenuContent[index].IsExpanded = ! TempMenuContent[index].IsExpanded; 
        this.setState({MenuContent:TempMenuContent})
    }
    else
    {
        this.props.history.push(this.state.MenuContent[index].Handle);
    }
}

render() {
    let ShowMenu=this.state.MenuContent.map((result,index)=>{
        return(
            <div className="w-100">
                <div onClick={()=>this.HandleMenuClick(index)} id={result.Title} className="d-flex justify-content-start mb-2 MenuLink">
                    <a className="nav-link" href="#">
                        <FontAwesomeIcon icon={result.Icon} color="#fff" />
                    </a>
                    <a className="nav-link" href="#">
                        <span className="text-white MenuLink">{result.Title}</span>
                    </a>
                </div>
                {result.IsExpanded ? 
                    result.SubMenu.map(SubResult=>{
                        return(    
                            <div className="w-100 mt-2 pr-5" style={{textAlign:'right'}}>
                                <a href={`/${SubResult.Handle}`} className="text-white">{SubResult.Title}</a>
                            </div>
                        )
                    })
                :
                null}
            </div>
        )
    })

        return(
            <div className="pt-5">
                {ShowMenu}
            </div>
        )
    }

}


export default withRouter(SideMenu);