import {TabPanel, TabView} from "../../../components/tabview/TabView";
import React, {useEffect, useState} from "react";
import {Column} from "../../../components/column/Column";
import {DataTable} from "../../../components/datatable/DataTable";
import {Actions, Request} from "../../../core";
import moment from "moment";
import {Calendar} from "../../../components/calendar/Calendar";
import {ProgressSpinner} from "../../../components/progressspinner/ProgressSpinner";
import {Button} from "../../../components/button/Button";

export const UserTabs = ({selectedUser}) =>{
    const [selectedTab,setSelectedTab]=useState(0)
    const [authHistory,setAuthHistory]=useState([])
    const [profileHistory,setProfileHistory]=useState([])
    const [personalInfo,setPersonalInfo]=useState([])
    const [authDateRange,setAuthDateRange] = useState([moment(new Date()).subtract(7,'d').toDate(),new Date()])
    const [authHistoryLoader,setAuthHistoryLoader] = useState(false)
    useEffect(()=>{
        Request.subscribeLoader("auth-history-loader",(e)=>setAuthHistoryLoader(e))
       return ()=>{
           Request.unsubscribeLoader("auth-history-loader",()=>setAuthHistoryLoader(false))
       }
    },[])
    useEffect(()=>{
        if(selectedUser){
            loadData({index:selectedTab})
        }
    },[selectedUser])




    const loadData = async (event) => {
        setSelectedTab(event.index)
        if(!selectedUser){
            return;
        }
        let response;
        switch (event.index) {

            case 1:
                 response = await Actions.Users.authHistory({
                    id: selectedUser.id,
                    //id: 861,
                    dateFrom: authDateRange && authDateRange[0]? moment(authDateRange[0]).format("YYYY-MM-DD"):"",
                    dateTo: authDateRange && authDateRange[1]? moment(authDateRange[1]).format("YYYY-MM-DD"):"",
                })
                     setAuthHistory(response.status?response.data.data:[])
                break;
                case 2:
                    response = await Actions.Users.profileHistory(selectedUser.id)
                     setProfileHistory(response.status?response.data.data:[])
                break;
                 case 3:
                    response = await Actions.Users.userOptions(selectedUser.id)
                     setPersonalInfo(response.status?response.data.data:[])
                break;
            default:
                break;
        }
    }

    return (
        <TabView onTabChange={loadData} activeIndex={selectedTab}>

            {/*<TabPanel header="Transaction History">
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                    architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                    voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.</p>
            </TabPanel>*/}
            <TabPanel header="Authorization history" >
                <div className="p-fluid p-formgrid p-grid" style={{padding:"10px"}}>
                    <div className="p-field p-col-12 p-md-4">
                        <label htmlFor="auth-date-range">აირჩიეთ პერიოდი</label>
                        <Calendar id="auth-date-range"
                                  value={authDateRange}
                                  onChange={(e) => {
                                      setAuthDateRange(e.value)
                                  }}
                                  selectionMode="range" />
                    </div>
                    <div className="p-field p-col-12 p-md-4">
                        <label htmlFor="">&nbsp;</label>
                        <div style={{width:"150px", display:'flex'}}>
                            <div style={{width:"40px"}}>
                                {
                                    authHistoryLoader && <ProgressSpinner style={{width:"30px",padding:0,height:"30px"}}/>

                                }
                            </div>
                            <div style={{width:"100px"}}>
                                <Button label="Search" disabled={authHistoryLoader} className="p-button-outlined" onClick={()=>loadData({index:1})} />
                            </div>
                        </div>
                    </div>
                </div>


                <DataTable value={authHistory}  className="p-datatable-gridlines">
                    <Column field="entryDate" header="თარიღი"/>
                    <Column field="ip" header="Ip"/>
                    <Column field="oauthClient" header="კლიენტი"/>
                    <Column field="authApp" header="აპლიკაცია"/>
                    <Column field="authResult" header="მცდელობა" body={e => {
                        return <span style={{color: `${e.authResult ? 'green' : 'red'}`}}>{e.authResult === 1 ? 'წარმატებული' : 'წარუმატებელი'}</span>
                    }}/>
                </DataTable>
            </TabPanel>
            <TabPanel header="Profile History" >
                <DataTable value={profileHistory}  className="p-datatable-gridlines">
                    <Column field="entryDate" header="თარიღი"/>
                    <Column field="item" header="item"/>
                    <Column field="itemField" header="ველი"/>
                    <Column field="oldValue" header="ძველი მნიშვნელობა"  body={(e)=><span style={{color:'red'}}>{e.oldValue}</span>}/>
                    <Column field="newValue" header="ახალი მნიშვნელობა" body={(e)=><span style={{color:'green'}}>{e.newValue}</span>}/>
                </DataTable>
            </TabPanel>
            <TabPanel header="Personal Info" >
                <DataTable value={personalInfo}  className="p-datatable-gridlines">
                    <Column field="key" header="key"/>
                    <Column field="value" header="value"/>
                </DataTable>
            </TabPanel>
        </TabView>
    )
}

