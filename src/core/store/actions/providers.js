import {Config} from "../../index";
import Request from "../../http/http";
import {query_string} from "../../utils";

const ProviderGroups = () =>{
    return   Request.setEvents().get(Config.Providers.Groups)
}
const GetProviders = (id) =>{
    return   Request.setEvents().post(Config.Providers.Providers,query_string({"groupId":id}))
}
const Actions = (id) =>{
    return   Request.setEvents().get(Config.Providers.Actions.replace("{providerId}",id))
}
const Cashiers = (id) =>{
    return   Request.setEvents().get(Config.Providers.Cashiers.replace("{providerId}",id))
}

const DeleteProviderGroup=(id)=>{
    return Request.setEvents().get(Config.Providers.DeleteProviderGroup.replace("{groupId}",id));
}
const InsertProviderGroup=(data)=>{
    return Request.setEvents().post(Config.Providers.InsertProviderGroup,query_string(data));
}

const UpdateProviderGroup=({id,data})=>{
    return Request.setEvents().post(Config.Providers.UpdateProviderGroup.replace("{groupId}",id),query_string(data));
}

const DeleteProvider=(id)=>{
    return Request.setEvents().get(Config.Providers.DeleteProvider.replace("{providerId}",id));
}
const InsertProvider=(data)=>{
    return Request.setEvents().post(Config.Providers.InsertProvider,query_string(data));
}

const UpdateProvider=({id,data})=>{
    return Request.setEvents().post(Config.Providers.UpdateProvider.replace("{providerId}",id),query_string(data));
}

const DeleteAction=({providerId,actionId})=>{
    return Request.setEvents().get(Config.Providers.DeleteAction.replace("{providerId}",providerId).replace("{actionId}",actionId));
}
const InsertAction=({providerId,actionId,name})=>{
    return Request.setEvents().post(Config.Providers.InsertAction.replace("{providerId}",providerId).replace("{actionId}",actionId),query_string({name:name}));
}

const UpdateAction=({providerId,actionId,name})=>{
    return Request.setEvents().post(Config.Providers.UpdateAction.replace("{providerId}",providerId).replace("{actionId}",actionId),query_string({name:name}));
}

const DeleteCashier=({providerId,cashierId})=>{
    return Request.setEvents().get(Config.Providers.DeleteCashier.replace("{providerId}",providerId).replace("{cashierId}",cashierId));
}
const InsertCashier=(providerId,data)=>{
    return Request.setEvents().post(Config.Providers.InsertCashier.replace("{providerId}",providerId),query_string(data));
}

const UpdateCashier=(providerId,actionId,data)=>{
    return Request.setEvents().post(Config.Providers.UpdateCashier.replace("{providerId}",providerId).replace("{cashierId}",actionId),query_string(data));
}


export default {
    ProviderGroups,
    GetProviders,
    Actions,
    Cashiers,
    DeleteProviderGroup,
    InsertProviderGroup,
    UpdateProviderGroup,
    DeleteProvider,
    InsertProvider,
    UpdateProvider,
    InsertAction,
    UpdateAction,
    DeleteAction,
    InsertCashier,
    UpdateCashier,
    DeleteCashier
}
