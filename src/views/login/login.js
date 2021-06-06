import React, {useState} from "react";
import "./login.scss"
import {InputText} from "../../components/inputtext/InputText";
import {Button} from "../../components/button/Button";
import {Actions} from "../../core";
import {useDispatch} from "react-redux";
const Login = () =>{
    const dispatch = useDispatch()
    const [user, setUser]=useState({
        username:"",
        password:""
    })

    return <div className={"login"}>
        <div className="card login-card">
            <h5>Authorization</h5>
            <form onSubmit={async event => {
                event.preventDefault();
                if (user.username && user.password) {
                    const response = await dispatch(Actions.User.signIn(user))
                    if(response.status){
                        dispatch(Actions.User.ping())
                    }
                }

            }}>
                <div className="p-fluid">
                    <div className="p-field p-grid">
                        <label htmlFor="firstname4" className="p-col-12 p-mb-2 p-md-2 p-mb-md-0">Username</label>
                        <div className="p-col-12 p-md-10">
                            <InputText id="firstname4" type="text" value={user.username} onChange={event => setUser({...user,username: event.target.value})}/>
                        </div>
                    </div>
                    <div className="p-field p-grid">
                        <label htmlFor="lastname4" className="p-col-12 p-mb-2 p-md-2 p-mb-md-0">Password</label>
                        <div className="p-col-12 p-md-10">
                            <InputText id="lastname4" type="password" value={user.password} onChange={event => setUser({...user,password: event.target.value})}/>
                        </div>
                    </div>
                    <div>
                        <Button type="submit" label="Login"  className={"submit-button"}/>
                    </div>
                </div>
            </form>

        </div>
    </div>
}
export default Login;
