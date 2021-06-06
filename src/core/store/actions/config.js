import {Config} from "../../index";
import {PING, SIGN_IN} from "../actionTypes";
import Request from "../../http/http";
import {query_string} from "../../utils";


const Currencies =  () =>{
    return Request.get(Config.Config.Currency);
}
const UserStatusList = () =>{
    return   Request.get(Config.Config.VerifyStatusList)
}
const CountryList = () =>{
    return   Request.setEvents(true).get(Config.Config.CountryList)
}

const UserList = () =>{
    return   Request.get(Config.Config.UList)
}

const RegUser = (data) =>{
    return   Request.post(Config.Config.RegUserUrl,query_string(data))
}
const SearchUser = (data) =>{
    let url = Config.Config.SearchUser + '?personal_id='+data.personal_id+'&id='+data.id
    return   Request.get(url)
}

const WithdrawalList = () =>{
    return   Request.get(Config.Withdraw.GetList)
}

const SearchUserForWithdraw = (val) =>{
    return   Request.get(Config.Withdraw.SearchUrl+'?personal_id='+val)
}
const Withdraw = (data) =>{
    return   Request.post(Config.Withdraw.add,query_string(data))
}
const EditUser = (data) =>{
    return   Request.post(Config.Config.editUser,query_string(data))
}


const TransSearch = (data) =>{
    let url = Config.Withdraw.transSearch + '?user_id='+data.id
    return   Request.get(url)
}


export default {
    Currencies,
    UserStatusList,
    CountryList,
    UserList,
    RegUser,
    SearchUser,
    WithdrawalList,
    SearchUserForWithdraw,
    Withdraw,
    EditUser,
    TransSearch,
}
