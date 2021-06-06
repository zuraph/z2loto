import {Config} from "../../index";
import {PING, SIGN_IN} from "../actionTypes";
import Request from "../../http/http";
import {query_string} from "../../utils";
import http from "../../http/http";
const signIn = (data) =>async (dispatch)=>{
    const response = await Request.post(Config.User.SIGN_IN,query_string({
        "username":data.username,
        "password":data.password
    }),{
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        }
    });
    if(response.status){
        localStorage.setItem('access_token',response.data.access_token);

        dispatch({
            type: SIGN_IN,
            payload: {},
            status:response.status
        })
    }else{
        Request.event({
            name:"httpError",
            type:'error',
            details:"invalid credentials"
        })
        localStorage.removeItem('access_token');
    }
 return response;
}

const signOut = () => async (dispatch)=>{
  console.log("sign out")
  const response = await Request.get(Config.User.SIGN_OUT);
  if(response.status){
    dispatch({
      type: SIGN_IN,
      payload: {},
      status:false
    })
  }else {
    console.log("error")
  }
}

const ping = () =>async (dispatch)=>{
  const response = await Request.setEvents(false).get(Config.User.Ping)
  dispatch({
    type: PING,
      payload: response.status?response.data.data:{},
      status:response.status
  })
}

export default {
  signIn,
  signOut,
  ping
}
