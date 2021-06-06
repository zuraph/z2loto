import {Config} from "../../index";
import {PING, SIGN_IN} from "../actionTypes";
import Request from "../../http/http";
import {query_string} from "../../utils";
const findBy = (query) =>{
  return   Request.get(Config.Users.FindBy+query)
}
const filterBy = (filter) =>{
    return   Request.loader("filter-user-loader").post(Config.Users.FilterBy,query_string(filter))
}
const authHistory=({id,dateFrom,dateTo})=>{
    return   Request.loader("auth-history-loader").post(Config.Users.AuthHistory.replace("{userId}",id),query_string({
        dateFrom:dateFrom,
        dateTo:dateTo
    }))
}
const profileHistory=(id)=>{
    return   Request.loader("profile-history-loader").get(Config.Users.ProfileHistory.replace("{userId}",id))
}
const userOptions=(id)=>{
    return   Request.loader("user-options-loader").get(Config.Users.UserOptions.replace("{userId}",id)+"/profile_document")
}

const personalInfo = (id) =>{
    return  Request.loader("user-personal-info-loader")
                    .get(Config.Users.PersonalInfo.replace("{userId}",id))

}

const accountsInfo = (id) =>{
    return  Request.loader("user-accounts-info-loader")
                    .get(Config.Users.AccountsInfo.replace("{userId}",id))

}
const optionsInfo = (id) =>{
    return  Request.loader("user-options-info-loader")
                    .get(Config.Users.UserOptions.replace("{userId}",id))
}
const userDocuments = (id) =>{
    return  Request.loader("user-documents-info-loader")
        .get(Config.Users.UserOptions.replace("{userId}",id))
}

export default {
    findBy,
    filterBy,
    authHistory,
    profileHistory,
    userOptions,
    personalInfo,
    accountsInfo,
    optionsInfo,
    userDocuments
}
