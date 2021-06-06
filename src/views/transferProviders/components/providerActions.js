import {Column} from "../../../components/column/Column";
import {DataTable} from "../../../components/datatable/DataTable";
import React, {useEffect, useState} from "react";
import {Actions} from "../../../core";
import {ProgressBar} from "../../../components/progressbar/ProgressBar";
import classNames from "classnames";
import {confirmDialog} from "../../../components/confirmdialog/ConfirmDialog";
import {Button} from "../../../components/button/Button";
import {Dialog} from "../../../components/dialog/Dialog";
import {InputText} from "../../../components/inputtext/InputText";
import {Dropdown} from "../../../components/dropdown/Dropdown";

export const ProviderActions = ({provider,onEvent}) =>{
    const [data,setData]=useState(null)
    const [loader,setLoader]=useState(false)
    const [type,setType]=useState(null)
    const [current,setCurrent]=useState({
        id:"",
        name:""
    })
    const [selected,setSelected]=useState(null)
    useEffect(()=>{
        if(provider){
            loadData(provider.id)
        }else {
            setData([])
        }
    },[provider])
    useEffect(()=>{
        if(selected){
            setCurrent({...selected})
        }
    },[selected])
    useEffect(()=>{
        if(type==="insert"){
            setCurrent({
                id:"",
                name:""
            })
        }

    },[type])
    const loadData = async (id) => {
        setLoader(true)
        const response = await Actions.Providers.Actions(id);
        setLoader(false)
        setData(response.status?response.data.data:[])
    }
    const onDelete=()=>{
        if(selected){
            confirmDialog({
                message: 'Do you want to delete this record?',
                header: 'Delete Confirmation',
                icon: 'pi pi-info-circle',
                acceptClassName: 'p-button-danger',
                accept: async () => {
                    const response = await Actions.Providers.DeleteAction({actionId:selected.id,providerId:provider.id})
                    parseResponse(response)
                },
                reject: ()=>console.log("reject")
            });
        }
    }
    const parseResponse = (response) =>{
        if(response.status){
            if(response.data.data===1){
                loadData(provider.id);
                onEvent({severity:'success', summary: 'Success Message', detail:'Message Content', life: 3000})
            }else{
                onEvent({ severity: 'info', summary: 'Rejected', detail: 'Maybe this already deleted', life: 3000 })
            }
        }else{
            onEvent({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 })
        }
    }
    const onAction=async () => {
        let response;
        if (type === "insert") {
            response = await Actions.Providers.InsertAction({actionId:current.id,providerId:provider.id,name:current.name})
            parseResponse({
                status:response.status,
                data:response.status? {data:1}:{data:0}
            })
        } else {
            response = await Actions.Providers.UpdateAction({actionId:current.id,providerId:provider.id,name:current.name})
            parseResponse({
                status:response.status,
                data:response.status? {data:1}:{data:0}
            })
        }
        if(response.status){
            setType(null)
        }
    }
    const renderFooter=()=>{
        return (
            <div>
                <Button label="No" icon="pi pi-times" onClick={() => {
                    setType(null);
                }} className="p-button-text" />
                <Button label="Yes" icon="pi pi-check" onClick={() =>onAction()} autoFocus />
            </div>
        );
    }
    const renderHeader=()=>{
        return  type==="insert"? `New Action(${provider.name})`:`Update Action (${provider.name})`
    };
    const visible=()=>{
        if(!provider){
            return;
        }
        if(type==="insert"){
            return true;
        }else if(type==="update" && selected){
            return true;
        }
        return false
    }
    return (
        <>
            <Dialog header={renderHeader} visible={visible()} style={{ width: '50vw' }} footer={renderFooter} onHide={() => setType(null)}>
                <div className="p-fluid" style={{height:`${type==="insert"?"140px":"70px"}`}}>
                    {
                        type==="insert" &&<div className="p-field">
                            <label htmlFor="id">Action Id</label>
                            <InputText id="id" type="number"  value={current.id} onChange={event => setCurrent({...current,id:event.target.value})}/>
                        </div>
                    }

                    <div className="p-field">
                        <label htmlFor="gName">Action Name</label>
                        <InputText id="gName" type="text"  value={current.name} onChange={event => setCurrent({...current,name:event.target.value})}/>
                    </div>
                </div>
            </Dialog>

            <div className="flex-box call" style={{flex:'1',marginLeft:'10px'}}>
                <div className="title">
                    <div>Provider Actions</div>
                    <i className="pi pi-plus" onClick={()=>{
                        setSelected(null)
                        setType("insert")}}/>
                    <i className="pi pi-pencil" onClick={()=>setType("update")}/>
                    <i className="pi pi-trash" onClick={onDelete}/>
                </div>
                <div className="flex-cont grid">
                    {loader && <ProgressBar style={{ height: '6px' }} mode="indeterminate" />}
                    <DataTable
                        selection={selected} onSelectionChange={e => setSelected(e.value)} selectionMode="single" dataKey="id"
                        scrollable value={data}  className="p-datatable-gridlines" rowClassName={data => {
                        return {
                            'bg-red': data.disabled === 1
                        }
                    }}>
                        <Column field="id" header="ID"/>
                        <Column field="name" header="Name" filter  filterPlaceholder="Search by name"/>
                    </DataTable>
                </div>

            </div>

        </>

    )
}
