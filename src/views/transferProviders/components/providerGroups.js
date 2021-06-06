import {Column} from "../../../components/column/Column";
import {DataTable} from "../../../components/datatable/DataTable";
import React, {useEffect, useState} from "react";
import {Actions} from "../../../core";
import {ProgressBar} from "../../../components/progressbar/ProgressBar";
import {confirmDialog} from "../../../components/confirmdialog/ConfirmDialog";
import {Dialog} from "../../../components/dialog/Dialog";
import {Button} from "../../../components/button/Button";
import {InputText} from "../../../components/inputtext/InputText";
import {Dropdown} from "../../../components/dropdown/Dropdown";

export const ProviderGroups = ({onSelect,onEvent}) =>{
    const [data,setData]=useState(null)
    const [selected,setSelected]=useState(null)
    const [type,setType]=useState(null)
    const [current,setCurrent]=useState({
        name:"",
        note:"",
        disabled:0
    })
    useEffect(()=>{
        loadData()
    },[])
    useEffect(()=>{
        if(selected){
            setCurrent({...selected})
            onSelect(selected)
        }else{
            setCurrent({
                name:"",
                note:"",
                disabled:0
            })
        }
    },[selected])
    const loadData = async () => {
        const response = await Actions.Providers.ProviderGroups();
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
                    const response = await Actions.Providers.DeleteProviderGroup(selected.id)
                    parseResponse(response)
                },
                reject: ()=>console.log("reject")
            });
        }

    }
    const parseResponse = (response) =>{
        if(response.status){
            if(response.data.data===1){
                loadData();
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
            response = await Actions.Providers.InsertProviderGroup(current)
            parseResponse({
                status:response.status,
                data:response.status? {data:1}:{data:0}
            })
        } else {
            response = await Actions.Providers.UpdateProviderGroup({id:current.id,data:{ name:current.name,note:current.note,disabled:current.disabled}})
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
        return  type==="insert"? "New Group":"Update Group"
    };
    const visible=()=>{
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
                 <div className="p-fluid" style={{height:"270px"}}>
                    <div className="p-field">
                        <label htmlFor="gName">Group Name</label>
                        <InputText id="gName" type="text"  value={current.name} onChange={event => setCurrent({...current,name:event.target.value})}/>
                    </div>
                    <div className="p-field">
                        <label htmlFor="note">Note</label>
                        <InputText id="note" type="text" value={current.note} onChange={event => setCurrent({...current,note:event.target.value})} />
                    </div>
                    <div className="p-field">
                        <label htmlFor="disabled">On/Off</label>
                        <Dropdown inputId="disabled" optionValue={"id"} value={current.disabled} options={[{id:1,name:"On"},{id:0,name: "Off"}]} onChange={event=>setCurrent({...current,disabled:event.value})} placeholder="Select" optionLabel="name"/>
                    </div>
                </div>
            </Dialog>
            <div className="flex-box call" style={{flex:'1'}}>
                <div className="title">
                    <div>Provider Groups</div>
                    <i className="pi pi-plus" onClick={()=>{
                        setSelected(null)
                        setType("insert")}
                    }/>
                    <i className="pi pi-pencil" onClick={()=>setType("update")}/>
                    <i className="pi pi-trash" onClick={onDelete}/>
                </div>
                <div className="flex-cont grid bg">
                    {!data && <ProgressBar style={{ height: '6px' }} mode="indeterminate" />}
                    <DataTable
                        selection={selected} onSelectionChange={e => setSelected(e.value)} selectionMode="single" dataKey="id"
                        scrollable value={data}  className="p-datatable-gridlines" rowClassName={data => {
                        return {
                            'bg-red': data.disabled === 1
                        }
                    }}>
                        <Column field="id" header="ID" />
                        <Column field="name" header="Group Name" filter  filterPlaceholder="Search by name"/>
                        <Column field="disabled" header="On/Off"/>
                    </DataTable>
                </div>
            </div>
        </>
    )
}
