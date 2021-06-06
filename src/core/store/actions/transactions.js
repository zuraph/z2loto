import {Config} from "../../index";
import {PING, SIGN_IN} from "../actionTypes";
import Request from "../../http/http";
import {query_string} from "../../utils";

const filterBy = (filter) =>{
    return   Request.loader("filter-transaction-loader").post(Config.Transactions.FilterBy,query_string(filter))
}
const details = (id) =>{
    return   Request.post(Config.Transactions.Details.replace("{transferId}",id))
}
const logs = (id) =>{
    return   Request.post(Config.Transactions.Logs.replace("{transferId}",id))
}

const Connected = (id) =>{
    return   Request.get(Config.Transactions.Connected.replace("{transferId}",id))
}
export default {
    filterBy,
    details,
    logs,
    Connected
}
