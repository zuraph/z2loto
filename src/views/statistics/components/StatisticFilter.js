import {SearchUser} from "./filter/searchUser";
import {SearchIp} from "./filter/ipList";
import {Dropdown} from "../../../components/dropdown/Dropdown";
import {Calendar} from "../../../components/calendar/Calendar";
import {InputNumber} from "../../../components/inputnumber/InputNumber";
import {ProgressSpinner} from "../../../components/progressspinner/ProgressSpinner";
import {Button} from "../../../components/button/Button";
import React, {useEffect, useState} from "react";
import moment from "moment";
import {Actions, Request} from "../../../core";

const StatisticFilter = ({setData}) =>{
    const [currencies,setCurrencies]=useState([]);
    const [statusList,setStatusList]=useState([]);
    const [filterForm,setFilterForm]=useState({
        regDateFrom:null,
        regDateTo:null,
        authDateFrom:null,
        authDateTo:null,
        moneyFrom:null,
        moneyTo:null,
        currency:null,
        verifyStatus:null,
        authPeriod:null,
        regPeriod:null
    });
    const [findUserLoader,setFindUserLoader]=useState(false)

    const filterBy=async () => {
        const filter={
            regDateFrom:filterForm.regDateFrom?moment(filterForm.regDateFrom).format("YYYY-MM-DD HH:mm"):"",
            regDateTo:filterForm.regDateTo?moment(filterForm.regDateTo).format("YYYY-MM-DD HH:mm"):"",
            authDateFrom:filterForm.authDateFrom?moment(filterForm.authDateFrom).format("YYYY-MM-DD HH:mm"):"",
            authDateTo:filterForm.authDateTo?moment(filterForm.authDateTo).format("YYYY-MM-DD HH:mm"):"",
            moneyFrom:filterForm.moneyFrom?filterForm.moneyFrom:"",
            moneyTo:filterForm.moneyTo?filterForm.moneyTo:"",
            currency:filterForm.currency?filterForm.currency.iso:"",
            verifyStatus:filterForm.verifyStatus?filterForm.verifyStatus.id:""
        }
        const response = await (Actions.Users.filterBy(filter))
        setData(response.status?response.data.data:[])
    }
    useEffect(()=>{
        Request.subscribeLoader("filter-user-loader",setFindUserLoader)
        return ()=>{
            Request.unsubscribeLoader("filter-user-loader",()=>setFindUserLoader(false))
        }
    },[])
    return (
        <div className="flex-cont filter">

            <div className="fl-row">
                <span className="space"></span>
                <Calendar placeholder={"Registration Date from"} readOnlyInput={true} showButtonBar id="timeFrom" value={filterForm.regDateFrom} showIcon onChange={(e) => setFilterForm({...filterForm,regDateFrom: e.value}) } showTime showSeconds />
                <span className="space"></span>
                <Calendar placeholder={"Registration Date To"} readOnlyInput={true} showButtonBar id="timeFrom" value={filterForm.regDateTo} showIcon onChange={(e) => setFilterForm({...filterForm,regDateTo: e.value}) } showTime showSeconds />
                <span className="space"></span>
                <Dropdown  id={"regPeriod"} value={filterForm.regPeriod} options={[
                    {"id":"1hour", name:"1 საათი"},
                    {"id":"1hour", name:"1 საათი"},
                    {"id":"1hour", name:"1 საათი"},
                ]} onChange={(e => setFilterForm({...filterForm,regPeriod: e.value}))} optionLabel="name" placeholder="Period" />
                <span className="space"></span>
                <Button label="Clear" disabled={findUserLoader} className="p-button-outlined" onClick={()=>filterBy()} />
                <span className="space"></span>
                <Button label="Reset" disabled={findUserLoader} className="p-button-outlined p-button-danger" onClick={()=>filterBy()} />
                <span className="space"></span>
                <Dropdown  id={"regPeriod"} value={filterForm.regPeriod} options={[
                    {"id":"1hour", name:"1 საათი"},
                    {"id":"1hour", name:"1 საათი"},
                    {"id":"1hour", name:"1 საათი"},
                ]} onChange={(e => setFilterForm({...filterForm,regPeriod: e.value}))} optionLabel="name" placeholder="Period" />
            </div>

        </div>
    )
}
export default StatisticFilter
