import React, {useEffect, useRef, useState} from "react";

import "./transferProviders.scss"
import {Button} from "../../components/button/Button";
import {Column} from "../../components/column/Column";
import {DataTable} from "../../components/datatable/DataTable";
import {Actions} from "../../core";
import moment from "moment";
import {ProviderGroups} from "./components/providerGroups";
import {ProvidersTable} from "./components/providersTable";
import {ProviderActions} from "./components/providerActions";
import {ProviderCashiers} from "./components/providerCashiers";
import {Toast} from "../../components/toast/Toast";
const TransferProviders = ()=>{
    const [pGroup,setPGroup]=useState(null)
    const [pId,setPId]=useState(null)
    const toast = useRef();

    return (
        <div id="transferProviders" className="content-section implementation">
            <Toast ref={toast} />
            <div className="flex-box call" style={{maxHeight: 'calc(100vh - 489px)'}}>
                <div className="flex-box row">
                    <ProviderGroups onSelect={(selected)=>{ setPGroup(selected); setPId(null)}} onEvent={event=>toast.current.show(event)}/>
                    <ProvidersTable group={pGroup} onSelect={(selected)=>setPId(selected)} onEvent={event=>toast.current.show(event)}/>
                    <ProviderActions provider={pId} onEvent={event=>toast.current.show(event)}/>
                </div>
                <ProviderCashiers provider={pId} onEvent={event=>toast.current.show(event)}/>
            </div>
        </div>
    )
}
export default TransferProviders;
