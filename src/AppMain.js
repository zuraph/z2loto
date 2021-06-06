import React, {useEffect, useState, Suspense, useRef} from "react";
import App from "./App";
import Login from "./views/login/login";
import {useUser} from "./core/hooks/useUser";
import {Actions, EventEmitter} from "./core";
import {useDispatch} from "react-redux";
import {Toast} from "./components/toast/Toast";

const AppMain =  () => {
    const {User} = useUser();
    const dispatch = useDispatch();
    const [loader,setLoader]=useState(true)
    const eventEmitter = new EventEmitter();
    const toast = useRef(null);
    useEffect(() => {
        if(toast){

            eventEmitter.on("httpError",e=>{
                console.log(e)
                toast.current.show(e)
            })
            //ping().then(r => {
            //    setLoader(false)
            //})
            setLoader(false) //
        }
        return ()=>{
            eventEmitter.removeListener("httpError",()=>console.log("removeListener"))
        }
    }, [])


    //const ping = async () => await dispatch(Actions.User.ping())

    const renderView=()=> {
        return <App/>;
        //return User.isLogged ? <App/> : <Login/>;
    }

    return  <>
        <Toast ref={toast} />
        {loader? null: renderView()}
    </>

}
export default AppMain;
