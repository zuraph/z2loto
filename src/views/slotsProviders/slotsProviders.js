import React, {useEffect, useState} from "react";

import "./slotsProviders.scss"
import {Button} from "../../components/button/Button";
import {Column} from "../../components/column/Column";
import {DataTable} from "../../components/datatable/DataTable";
import {TabPanel, TabView} from "../../components/tabview/TabView";
const SlotsProviders = ()=>{
    const [data,setData]=useState([]);
    const [selectedTab,setSelectedTab]=useState(0)
    const fakeData = [
        {"id": 1000,"name":'betSoft','enable':'1'},{"id": 1000,"name":'betSoft','enable':'1'},
        {"id": 1000,"name":'betSoft','enable':'1'},{"id": 1000,"name":'betSoft','enable':'1'},
        {"id": 1000,"name":'betSoft','enable':'1'},{"id": 1000,"name":'betSoft','enable':'1'},
        {"id": 1000,"name":'betSoft','enable':'1'},{"id": 1000,"name":'betSoft','enable':'1'},
        {"id": 1000,"name":'betSoft','enable':'1'},{"id": 1000,"name":'betSoft','enable':'1'},
        {"id": 1000,"name":'betSoft','enable':'1'},{"id": 1000,"name":'betSoft','enable':'1'},
        {"id": 1000,"name":'betSoft','enable':'1'},{"id": 1000,"name":'betSoft','enable':'1'},
        {"id": 1000,"name":'betSoft','enable':'1'},{"id": 1000,"name":'betSoft','enable':'1'},
        {"id": 1000,"name":'betSoft','enable':'1'},{"id": 1000,"name":'betSoft','enable':'1'},
        {"id": 1000,"name":'betSoft','enable':'1'},{"id": 1000,"name":'betSoft','enable':'1'},
        {"id": 1000,"name":'betSoft','enable':'1'},{"id": 1000,"name":'betSoft','enable':'1'},
        {"id": 1000,"name":'betSoft','enable':'1'},{"id": 1000,"name":'betSoft','enable':'1'},
        {"id": 1000,"name":'betSoft','enable':'1'},{"id": 1000,"name":'betSoft','enable':'1'},
        {"id": 1000,"name":'betSoft','enable':'1'},{"id": 1000,"name":'betSoft','enable':'1'},

        ]
    const loadData = async (event) => {
        setSelectedTab(event.index)
    }
        return (
        <div id="slotsProviders" className="content-section implementation">
            <div className="flex-box call" style={{maxHeight: 'calc(100vh)'}}>
                <div className="flex-cont slotsProvider">

                    <TabView onTabChange={loadData} activeIndex={selectedTab}>
                        <TabPanel header="Slot Providers">
                            <div className="flex-box call" style={{flex:'1'}}>
                                <div className="title">
                                    <div>Provider Groups</div>
                                    <i className="pi pi-plus"></i>
                                    <i className="pi pi-pencil"></i>
                                    <i className="pi pi-trash"></i>
                                </div>
                                <div className="flex-cont grid bg">
                                    <DataTable scrollable value={fakeData}  className="p-datatable-gridlines">
                                        <Column field="id" header="ID" />
                                        <Column field="name" header="Group Name" filter  filterPlaceholder="Search by name"/>
                                        <Column field="enable" header="On/Off"/>
                                    </DataTable>
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel header="Slot List">
                            <div className="flex-box row">
                                <div className="flex-box call" style={{flex:'1', maxWidth: '400px'}}>
                                    <div className="title">
                                        <div>Provider Groups</div>
                                    </div>
                                    <div className="flex-cont grid bg">
                                        <DataTable scrollable value={fakeData}  className="p-datatable-gridlines">
                                            <Column field="id" header="ID" />
                                            <Column field="name" header="Group Name" filter  filterPlaceholder="Search by name"/>
                                        </DataTable>
                                    </div>
                                </div>
                                <div className="flex-box call" style={{flex:'1',marginLeft:'10px'}}>
                                    <div className="title">
                                        <div>Provider</div>
                                        <i className="pi pi-plus"></i>
                                        <i className="pi pi-pencil"></i>
                                        <i className="pi pi-trash"></i>
                                    </div>
                                    <div className="flex-cont grid">
                                        <DataTable scrollable value={fakeData}  className="p-datatable-gridlines">
                                            <Column field="id" header="ID"/>
                                            <Column field="name" header="Name" filter  filterPlaceholder="Search by name"/>
                                            <Column field="enable" header="On/Off"/>
                                        </DataTable>
                                    </div>

                                </div>
                            </div>
                        </TabPanel>
                    </TabView>

                </div>

            </div>
        </div>
    )
}
export default SlotsProviders;
