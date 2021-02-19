import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars,faHome,faPaperPlane,faDownload,faCloudDownloadAlt,faCreditCard,faBook } from '@fortawesome/free-solid-svg-icons';

class SideMenu extends React.Component {
constructor() {
    super();
    this.state={
        MenuContent:[
            {
                Title:"Dashboard",
                Icon:faHome,
                SubMenu:[],
                IsExpanded:false
            },
            {
                Title:"Whatsapp Bulk",
                Icon:faPaperPlane,
                SubMenu:[
                    {
                        Title:"Send WhatsApp",
                        Icon:faDownload,
                    },
                    {
                        Title:"WhatsApp Report",
                        Icon:faDownload,
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
                Title:"Transactions",
                Icon:faCreditCard,
                IsExpanded:false,
                SubMenu:[]
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
                SubMenu:[]
            },
            {
                Title:"Bulk Voice Call",
                Icon:faBook,
                IsExpanded:false,
                SubMenu:[]
            },
            {
                Title:"Voice Call API",
                Icon:faBook,
                IsExpanded:false,
                SubMenu:[]
            },
            {
                Title:"Scrub",
                Icon:faBook,
                IsExpanded:false,
                SubMenu:[]
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
                            <div className="w-100 pr-5" style={{textAlign:'right'}}>
                                <p className="text-white">{SubResult.Title}</p>
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


export default SideMenu;