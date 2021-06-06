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

const UserFilter = ({setData}) =>{
    const [currencies,setCurrencies]=useState([]);
    const [statusList,setStatusList]=useState([]);
    const [countries,setCountries]=useState([]);
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
        //getCurrencies();
        //getCountryList();
        //getVerifyStatus();
        Request.subscribeLoader("filter-user-loader",setFindUserLoader)
        return ()=>{
            Request.unsubscribeLoader("filter-user-loader",()=>setFindUserLoader(false))
        }
    },[])

    const getCurrencies=async () => {
        const response = await Actions.Config.Currencies();
        if(response.status){
            setCurrencies(response.data.data)
        }
    }
    const getVerifyStatus=async () => {
        const response = await Actions.Config.UserStatusList();
        if(response.status){
            setStatusList(response.data.data)
        }
    }
    const getCountryList = async () => {
        const response = await Actions.Config.CountryList();
        if (response.status) {
            setCountries(response.data.data)
        }
    }
    return (
        <div className="flex-cont filter bg">

            <div className="fl-row">
                <SearchUser/>
            </div>
        </div>
    )
}
export default UserFilter
