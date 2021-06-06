import React, {useEffect, useRef, useState} from "react";
import UserFilter from "../users/components/UserFilter";
import {Column} from "../../components/column/Column";
import {DataTable} from "../../components/datatable/DataTable";
import "./transactions.scss"
import {Actions} from "../../core";
import _ from 'lodash'
import {ProgressBar} from "../../components/progressbar/ProgressBar";
import moment from "moment";
import {Dropdown} from "../../components/dropdown/Dropdown";
import {TabPanel, TabView} from "../../components/tabview/TabView";
const Transactions = ()=>{
    const [filter,setFilter]=useState([])
    const [data,setData]=useState([])
    const [logs,setLogs]=useState([])
    const [connected,setConnected]=useState([])
    const [details,setDetails]=useState([])
    const [loader,setLoader] = useState(false);
    const [selected,setSelected]= useState(null)
    const [activeTab,setActiveTab]=useState(0)
    const [expandedRows, setExpandedRows] = useState(null);
    const [paginator,setPaginator]=useState({
        first: 0,
        row: 10
    })
    const [connectedPaginator,setConnectedPaginator]=useState({
        first: 0,
        row: 10
    })
    useEffect(()=>{
            loadData()
    },[])
    useEffect(()=>{
        console.log(selected)
        if(selected){
            setExpandedRows(null)
            loadDetails(selected.id)
            loadLogs(selected.id)
            loadConnected(selected.id)
        }

    },[selected])
    const loadData = async () => {
        setLoader(true)
        const response = await Actions.Transactions.filterBy({});
        setData(response.status?response.data.data:[])
        setLoader(false)
    }
    const loadDetails=async (id) => {
        id="b644dcd4-37e3-4a35-9950-1b348f1f728a";
        const response = await Actions.Transactions.details(id)
        setDetails(response.status?response.data.data:[])
    }
    const loadLogs=async (id) => {
        id="b644dcd4-37e3-4a35-9950-1b348f1f728a";
        const response = await Actions.Transactions.logs(id)
        setLogs(response.status?response.data.data:[])
    }
    const loadConnected=async (id) => {
        id="b644dcd4-37e3-4a35-9950-1b348f1f728a";
        const response = await Actions.Transactions.Connected(id)
        setConnected(response.status?response.data.data:[])
    }
    const template2 = {
        layout: 'RowsPerPageDropdown CurrentPageReport PrevPageLink NextPageLink',
        'RowsPerPageDropdown': (options) => {
            const dropdownOptions = [
                { label: 10, value: 10 },
                { label: 20, value: 20 },
                { label: 50, value: 50 }
            ];

            return (
                <>
                    <span className="p-mx-1" style={{ color: 'var(--text-color)', userSelect: 'none' }}>Items per page: </span>
                    <Dropdown value={options.value} options={dropdownOptions} onChange={options.onChange} appendTo={document.body} />
                </>
            );
        },
        'CurrentPageReport': (options) => {
            return (
                <span style={{ color: 'var(--text-color)', userSelect: 'none', width: '120px', textAlign: 'center' }}>
                        {options.first} - {options.last} of {options.totalRecords}
                    </span>
            )
        }
    };
    return (
        <div id="transaction" className="content-section implementation">

            <div className="flex-box call ">
                <UserFilter setData={setFilter}/>
                {loader && <ProgressBar mode="indeterminate"  style={{ height: '6px' }}/>}

                <div className="flex-cont bg tr-grid" style={{flex:'1'}}>
                    <div className="p-grid">
                        <div className="p-col-12">
                            <DataTable
                                paginator
                                paginatorTemplate={template2}
                                resizableColumns
                                columnResizeMode="fit"
                                first={paginator.first}
                                rows={paginator.row}
                                onPage={(event)=>{
                                    setPaginator({
                                        ...paginator,
                                        first: event.first,
                                        row:event.rows
                                    })
                                }}
                                paginatorClassName="p-jc-end" className="p-mt-6"
                                selectionMode="single"
                                onSelectionChange={e => setSelected(e.value)}
                                selection={selected}
                                dataKey="id"
                                value={data} scrollable={true}  scrollHeight={"500px"} header="Transactions"  className="p-datatable-gridlines">
                                <Column field="id" header="ID" body={e=>e.id.substring(0,8)}/>
                                <Column field="startDate" header="StartDate" body={e=><span>{moment(e["startDate"]).format("YYYY-MM-DD HH:mm")}</span>}/>
                                <Column field="finishDate" header="FinishDate" body={e=><span>{moment(e["finishDate"]).format("YYYY-MM-DD HH:mm")}</span>}/>
                                <Column field="userId" header="User" body={ e=>(e.userId+" "+e.user.username+" ("+e.user.firstName+" "+e.user.lastName+")") }/>
                                <Column field="user.userGroup.name" header="User Group"/>
                                <Column field="provider" header="Provider" body={e=>e.provider.providerGroup.name+' - '+e.provider.name}/>
                                <Column field="providerTrId" header="Provider Trans.ID" body={e=>e.providerTrId.substring(0,8)}/>
                                <Column field="tax" header="Tax"/>
                                <Column field="amount" header="Amount"/>
                                <Column field="userAccount.currency.iso3" header="Currency"/>
                                <Column field="providerAction.name" header="Action"/>
                                <Column field="balanceAfter" header="After"/>
                                <Column field="note" header="Note" />
                                <Column field="status" header="Status" body={e=>{
                                    switch (e.status){
                                        case 1:   return <span style={{color:`green`}}>Success</span>
                                        case 0:   return <span style={{color:`gray`}}>Progress</span>
                                        default:   return <span style={{color:`red`}}>Cancel</span>
                                }}}/>
                            </DataTable>
                        </div>
                        {/*<div className="p-col-2">
                            <DataTable value={[]} header="მოქმედებები"  className="p-datatable-gridlines">
                                <Column field="oldValue" header="name"  body={(e)=><span style={{color:'red'}}>{e.oldValue}</span>}/>
                                <Column field="newValue" header="value" body={(e)=><span style={{color:'green'}}>{e.newValue}</span>}/>
                            </DataTable>
                        </div>*/}
                    </div>
                </div>
                <div className="flex-cont bg tr-grid" style={{minHeight:'400px'}}>
                    <div className="p-grid">
                        <div className="p-col-4">

                            <DataTable scrollable={true} scrollHeight={"700px"} value={selected?_.map(selected.user,(v,k)=>{
                               if(v){
                                   switch (k){
                                       case "userGroup":
                                       case "verifyStatus":return {
                                           key:k,
                                           value:v.name
                                       }
                                       default: return {
                                           key:k,
                                           value:v
                                       }
                                   }
                               }
                            }).filter(v=>v):[]} header="მომხმარებელის ინფორმაცია"  className="p-datatable-gridlines">
                                <Column field="key" />
                                <Column field="value"/>
                            </DataTable>
                        </div>
                        <div className={"p-col-8"}>

                            <TabView activeIndex={activeTab} onTabChange={(e) => setActiveTab( e.index )}>
                                <TabPanel header="ტრანზაქციის ლოგები">
                                    <div className="p-grid" >
                                        <div className="p-col-6">
                                            <DataTable scrollable={true} scrollHeight={"340px"} value={logs} header="ტრანზაქციის ისტორია"  className="p-datatable-gridlines">
                                                <Column field="field" header="დასახელება"/>
                                                <Column field="oldValue" header="ძველი მნიშვნელობა"  />
                                                <Column field="newValue" header="ახალი მნიშვნელობა" />
                                            </DataTable>
                                        </div>
                                        <div className="p-col-6">
                                            <DataTable
                                                expandedRows={expandedRows}
                                                onRowToggle={(e) => setExpandedRows(e.data)}
                                                scrollable={true}
                                                scrollHeight={"340px"}
                                                value={details}
                                                header="ტრანზაქციის დეტალები"
                                                className="p-datatable-gridlines"
                                                rowExpansionTemplate={(data)=>{
                                                        return (
                                                            <div className="orders-subtable">
                                                                {JSON.stringify(data.value)}
                                                            </div>
                                                        );

                                                }}
                                                dataKey="id"
                                            >
                                                <Column expander style={{ width: '3em' }} />
                                                <Column field="entryDate" header="Date"  body={e=>moment(e.entryDate).format("YYYY-MM-DD HH:mm")}/>
                                                <Column field="key" header="Name" />
                                                <Column field="result" header="Result" />
                                            </DataTable>
                                        </div>
                                    </div>

                                </TabPanel>
                                <TabPanel header="დაკავშირებული ტრანზაქციები">
                                    <div className="p-grid">
                                        <div className="p-col-12">
                                            <DataTable
                                                paginator
                                                paginatorTemplate={template2}
                                                resizableColumns
                                                columnResizeMode="fit"
                                                first={connectedPaginator.first}
                                                rows={connectedPaginator.row}
                                                onPage={(event)=>{
                                                    setConnectedPaginator({
                                                        first: event.first,
                                                        row:event.rows
                                                    })
                                                }}
                                                paginatorClassName="p-jc-end" className="p-mt-6"
                                                dataKey="id"
                                                value={connected} scrollable={true}  scrollHeight={"340px"} header="Transactions"  className="p-datatable-gridlines">
                                                <Column field="id" header="ID" body={e=>e.id.substring(0,8)}/>
                                                <Column field="startDate" header="StartDate" body={e=><span>{moment(e["startDate"]).format("YYYY-MM-DD HH:mm")}</span>}/>
                                                <Column field="finishDate" header="FinishDate" body={e=><span>{moment(e["finishDate"]).format("YYYY-MM-DD HH:mm")}</span>}/>
                                                <Column field="providerTrId" header="Provider Trans.ID" body={e=>e.providerTrId.substring(0,8)}/>
                                                <Column field="tax" header="Tax"/>
                                                <Column field="amount" header="Amount"/>
                                                <Column field="userAccount.currency.iso3" header="Currency"/>
                                                <Column field="providerAction.name" header="Action"/>
                                                <Column field="balanceAfter" header="After"/>
                                                <Column field="note" header="Note" />
                                                <Column field="status" header="Status" body={e=>{
                                                    switch (e.status){
                                                        case 1:   return <span style={{color:`green`}}>Success</span>
                                                        case 0:   return <span style={{color:`gray`}}>Progress</span>
                                                        default:   return <span style={{color:`red`}}>Cancel</span>
                                                    }}}/>
                                            </DataTable>
                                        </div>
                                    </div>
                                </TabPanel>
                            </TabView>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default Transactions;
