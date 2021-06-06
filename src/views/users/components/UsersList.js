import React, {useEffect, useState} from "react";
import {Button} from "../../../components/button/Button";
import {Column} from "../../../components/column/Column";
import {DataTable} from "../../../components/datatable/DataTable";
import {Dropdown} from "../../../components/dropdown/Dropdown";
import UserDetailsModal from "./userDetailsModal";
import {Actions} from "../../../core";

export const UsersList = ({data,onUserEdit}) =>{
    const [selected, setSelected] = useState(null);
    const [paginator,setPaginator]=useState({
        first: 0,
        row: 10
    })
    const [detailsDialog,setDetailsDialog] = useState(false)

    //useEffect(()=>{
    //    onSelectUser(selected);
    //},[selected])
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

    // edit template
    const actionBodyTemplate = (userDat) => {
        return (
            <React.Fragment>
                <Button icon="pi pi-pencil" className="p-button-rounded p-button-success p-mr-2" onClick={() => editProduct(userDat)} />
                {/*<Button icon="pi pi-trash" className="p-button-rounded p-button-warning" onClick={() => confirmDeleteProduct(rowData)} />*/}
            </React.Fragment>
        );
    }
    const editProduct = (userDat) => {
        //console.log(userDat);
        onUserEdit(userDat);
        //setProduct({...product});
        //setProductDialog(true);
    }
    // End edit template

    return (

        data.length>0?
           <>
               <DataTable
                   paginator
                   paginatorTemplate={template2}
                   onSelectionChange={e => setSelected(e.value)}
                   selection={selected}
                   dataKey="id"
                   onRowSelect={(e)=>console.log("selection",e)} onRowUnselect={(e)=>console.log("unselection",e)}

                   selectionMode="single"
                   value={data}
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
                   paginatorClassName="p-jc-end"
                   className="p-datatable-gridlines"
               >
                   <Column field="id" header="#"  style={{width:'30px'}}/>
                   <Column field="name" header="სახელი"  style={{width:'10%'}}/>
                   <Column field="lastname" header="გვარი"  style={{width:'10%'}}/>
                   <Column field="personalId" header="პ/ნ"  style={{width:'10%'}}  />
                   <Column body={actionBodyTemplate}  style={{width:'30px'}}/>
               </DataTable>
               {detailsDialog && <UserDetailsModal user={selected} onClose={setDetailsDialog}/>}
           </> :
            <>
                <DataTable
                    paginator
                    paginatorTemplate={template2}
                    onSelectionChange={e => setSelected(e.value)}
                    selection={selected}
                    dataKey="id"
                    onRowSelect={(e)=>console.log("selection",e)} onRowUnselect={(e)=>console.log("unselection",e)}

                    selectionMode="single"
                    value={data}
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
                >
                    <Column field="id" header="#"  style={{width:'30px'}}/>
                    <Column field="name" header="სახელი"  style={{width:'10%'}}/>
                    <Column field="lastname" header="გვარი"  style={{width:'10%'}}/>
                    <Column field="personalId" header="პ/ნ"  style={{width:'10%'}}/>
                    <Column style={{width:'30px'}}/>
                </DataTable>

            </>

    )
}

