import React, {useEffect, useState} from "react";
import "./users.scss"
import {SearchUser} from "./components/filter/searchUser";
import {SearchIp} from "./components/filter/ipList";
import {Calendar} from "../../components/calendar/Calendar";
import {Dropdown} from "../../components/dropdown/Dropdown";
import {InputNumber} from "../../components/inputnumber/InputNumber";
import {InputText } from "../../components/inputtext/InputText";
import { FileUpload } from '../../components/fileupload/FileUpload';
import { Dialog } from '../../components/dialog/Dialog';
import {Button} from "../../components/button/Button";
import {UsersList} from "./components/UsersList";
import {UserTabs} from "./components/UserTabs";
import {Actions, Request} from "../../core";
import {useDispatch} from "react-redux";
import {ProgressSpinner} from "../../components/progressspinner/ProgressSpinner";
import moment from "moment";
import UserFilter from "./components/UserFilter";


const Users = () =>{
    const [userId,setUserId]=useState('');
    const [userPid,setUserPid]=useState('');
    const [data,setData]=useState([]);
    const [regDoctype,setRegDoctype]=useState({name: 'პირადობა', code: 1});
    const [editUserDoctype,setEditUserDoctype]=useState({name: 'პირადობა', code: 1});
    const [docTypes,setDocTypes]=useState([
        {name: 'პირადობა', code: 1},
        {name: 'პასპორტი', code: 2},
    ]);
    const [registration,setRegistration]=useState(
        {
            name :'',
            lastname :'',
            personal_id :'',
            document_number :'',
            document_type :1,
            birth_date :'',
        }
    );
    const [editUserData,setEditUserData]=useState(
        {
            id:'',
            name :'',
            lastname :'',
            personal_id :'',
            document_number :'',
            document_type :'',
            birth_date :'',
            birth_date_for_calendar:'',
            registrationDate:''
        }
    );
    const [userSearch, setUserSearch] = useState({
        id:'',
        personal_id:''
    })

    const docTypeMethod=(val,method)=>{

        if(method === 'userEdit'){
            setEditUserData({...editUserData,document_type:val.code})
            setEditUserDoctype(val);
        }else{
            setRegistration({...registration,document_type:val.code})
            setRegDoctype(val);
        }
    }
    const regBirthday=(val,method)=>{
        if(method === 'userEdit'){
            setEditUserData({...editUserData,birth_date_for_calendar:val.value});
            setEditUserData({...editUserData,birth_date:moment(val.value).format("DD/MM/yy")});
        }else{
            setRegistration({...registration,birth_date:moment(val.value).format("DD/MM/yy")});
        }

    }
    //useEffect(()=>{
    //    console.log(userSearch)
    //},[userSearch])


    const getUserList = async () => {
        const response = await Actions.Config.UserList()
        setData(response.status?response.data.users:[]);
    }

    useEffect(()=>{
        getUserList()
    },[])


    // dialog
    const [register, setRegister] = useState(false);
    const [userEdit, setUserEdit] = useState(false);
    const [position, setPosition] = useState('center');

    const dialogFuncMap = {
        'register': setRegister,
        'userEdit': setUserEdit,
    }

    const onClick = (name, position) => {
        dialogFuncMap[`${name}`](true);

        if (position) {
            setPosition(position);
        }
    }

    const onHide = (name) => {
        dialogFuncMap[`${name}`](false);
    }

    const submitMethod = (name) => {
        if(name === "register"){
            Actions.Config.RegUser(registration).then(response => {
                if(response.status && response.data.status === 1){
                    getUserList();
                    onHide(name);

                    setRegistration({
                        name :'',
                        lastname :'',
                        personal_id :'',
                        document_number :'',
                        document_type :1,
                        birth_date :'',
                    })
                }
            });
        }
        if(name === "userEdit"){
            //regBirthday(editUserData.birth_date,'userEdit');
            Actions.Config.EditUser(editUserData).then(response => {
                if(response.status && response.data.status === 1){
                    getUserList();
                    onHide(name);

                    setEditUserData({
                        id:'',
                        name :'',
                        lastname :'',
                        personal_id :'',
                        document_number :'',
                        document_type :'',
                        birth_date :'',
                        birth_date_for_calendar:'',
                        registrationDate:''
                    })
                }
            });
        }
    }

    const onSearch=()=>{
        if(userSearch.id === '' && userSearch.personal_id === ''){
            getUserList();
        }else{
            Actions.Config.SearchUser(userSearch).then(response => {
                if(response.status && response.data.status === 1){
                    setData(response.data.users)
                }else{

                }
                console.log('response',response)
            });
        }

    }

    const renderFooter = (name) => {
        if(name === 'register'){
            return (
                <div>
                    <Button label="გაუქმება" icon="pi pi-times" onClick={() => onHide(name)} className="p-button-text" />
                    <Button label="დამატება" icon="pi pi-plus" onClick={() => submitMethod(name)} autoFocus />
                </div>
            );
        }else if(name === 'userEdit'){
            return (
                <div>
                    <Button label="გაუქმება" icon="pi pi-times" onClick={() => onHide(name)} className="p-button-text" />
                    <Button label="რედაქტირება" icon="pi pi-pencil" onClick={() => submitMethod(name)} autoFocus />
                </div>
            );
        }
    }


    const onUserEditFunc=(data)=>  {
        console.log(data)

        setEditUserData({
            id:data.id,
            name :data.name,
            lastname :data.lastname,
            personal_id :data.personalId,
            document_number :data.documentNumber,
            document_type :data.documentType,
            birth_date : moment(data.birthDate).format("DD/MM/yy"),
            birth_date_for_calendar: new Date(moment(data.birthDate).format("DD/MM/yy")),
            registrationDate: moment(data.registrationDate).format("DD/MM/yy - HH:MM")
        });

        if(data.documentType === 1){
            setEditUserDoctype({name: 'პირადობა', code: 1});
        }else{
            setEditUserDoctype({name: 'პასპორტი', code: 2});
        }

        setUserEdit(true); // show dialog
    }
    // end dialog

    return (
         <div id="users" className="content-section implementation">
             <div className="flex-box call ">
                 {/*<UserFilter setData={setData}/>*/}
                 <div className="flex-cont bg reg-box">
                     <div className="flex-box row">
                         <div className="flex-box row" style={{flex:'1'}}>
                             <div className="p-field">
                                 <label htmlFor="userId" className="p-d-block">#</label>
                                 <InputText value={userSearch.id} onChange={(e) => setUserSearch({...userSearch,id:e.target.value})} id="userId" aria-describedby="userId-help" className=" p-d-block" />
                                 {/*<small id="username2-help" className="p-error p-d-block">Username is not available.</small>*/}
                             </div>
                             <div className="p-field">
                                 <label htmlFor="userPid" className="p-d-block">პ/ნ</label>
                                 <InputText value={userSearch.personal_id} onChange={(e) => setUserSearch({...userSearch,personal_id:e.target.value})} id="userPid" aria-describedby="userPid-help" className=" p-d-block" />
                                 {/*<small id="username2-help" className="p-error p-d-block">Username is not available.</small>*/}
                             </div>
                             <div className="p-field">
                                 <label htmlFor="" className="p-d-block">&nbsp;</label>
                                 <Button label="ძიება" onClick={() => onSearch()} />
                                 {/*<small id="username2-help" className="p-error p-d-block">Username is not available.</small>*/}
                             </div>
                         </div>

                         <Button label="რეგისტრაცია" icon="pi pi-user" onClick={() => onClick('register')} />
                     </div>
                 </div>
                 <div className="flex-cont grid bg">
                     <UsersList data={data} onUserEdit={onUserEditFunc}/>
                 </div>
             </div>

             <Dialog header="რეგისტრაცია" visible={register} style={{ width: '500px' }} footer={renderFooter('register')} onHide={() => onHide('register')}>
                <div className="registrationDialog flex-box call">

                    <div className="flex-cont row">
                        <div className="p-field">
                            <label htmlFor="birth_date">დაბადების თარიღი</label>
                            <Calendar monthNavigator yearNavigator yearRange="1940:2050" value={registration.birth_date} onChange={(e) => regBirthday(e)} id="birth_date"  dateFormat="dd/mm/yy"  />

                            {/*<small id="username1-help" className="p-d-block">Enter your username to reset your password.</small>*/}
                        </div>
                        <div className="p-field" style={{paddingLeft:'10px'}}>
                            <label htmlFor="birth_date">დაბადების თარიღი</label>
                            <Dropdown value={regDoctype} onChange={(e) => docTypeMethod(e.value)}  options={docTypes}  optionLabel="name" placeholder="დოკუმენტის ტიპი" />
                            {/*<small id="username1-help" className="p-d-block">Enter your username to reset your password.</small>*/}
                        </div>
                    </div>

                    <div className="flex-cont row">
                        <div className="p-field">
                            <label htmlFor="name" className="p-d-block">სახელი</label>
                            <InputText value={registration.name} onChange={(e) => setRegistration({...registration,name:e.target.value})} id="name" aria-describedby="name-help" className="p-d-block"/>
                            {/*<small id="username1-help" className="p-d-block">Enter your username to reset your password.</small>*/}
                        </div>
                        <div className="p-field" style={{paddingLeft:'10px'}}>
                            <label htmlFor="lastname" className="p-d-block">გვარი</label>
                            <InputText value={registration.lastname} onChange={(e) => setRegistration({...registration,lastname:e.target.value})} id="lastname" aria-describedby="lastname-help" className="p-d-block"/>
                            {/*<small id="username1-help" className="p-d-block">Enter your username to reset your password.</small>*/}
                        </div>
                    </div>
                    <div className="flex-cont row">
                        <div className="p-field">
                            <label htmlFor="personal_id" className="p-d-block">პირადი ნომერი</label>
                            <InputText value={registration.personal_id} onChange={(e) => setRegistration({...registration,personal_id:e.target.value})} id="personal_id" aria-describedby="personal_id-help" className="p-d-block"/>
                            {/*<small id="username1-help" className="p-d-block">Enter your username to reset your password.</small>*/}
                        </div>

                        <div className="p-field" style={{paddingLeft:'10px'}}>
                            <label htmlFor="document_number" className="p-d-block">დოკუმენტის ნომერი</label>
                            <InputText value={registration.document_number} onChange={(e) => setRegistration({...registration,document_number:e.target.value})} id="document_number" aria-describedby="document_number-help" className="p-d-block"/>
                            {/*<small id="username1-help" className="p-d-block">Enter your username to reset your password.</small>*/}
                        </div>
                    </div>

                    <div style={{height:'150px'}}/>

                </div>
             </Dialog>

             <Dialog header="მომხმარებლის რედაქტირება" visible={userEdit} style={{ width: '500px' }} footer={renderFooter('userEdit')} onHide={() => onHide('userEdit')}>
                 <div className="registrationDialog flex-box call">

                     <div className="flex-cont row">
                         <div className="p-field">
                             <label htmlFor="birth_date">დაბადების თარიღი</label>
                             <Calendar value={editUserData.birth_date_for_calendar} onChange={(e) => regBirthday(e,'userEdit')} monthNavigator yearNavigator yearRange="1940:2050"  id="birth_date"  dateFormat="dd/mm/yy"  />

                             {/*<small id="username1-help" className="p-d-block">Enter your username to reset your password.</small>*/}
                         </div>
                         <div className="p-field" style={{paddingLeft:'10px'}}>
                             <label htmlFor="birth_date">დაბადების თარიღი</label>
                             <Dropdown value={editUserDoctype} onChange={(e) => docTypeMethod(e.value,'userEdit')}  options={docTypes}  optionLabel="name" placeholder="დოკუმენტის ტიპი" />
                             {/*<small id="username1-help" className="p-d-block">Enter your username to reset your password.</small>*/}
                         </div>
                     </div>

                     <div className="flex-cont row">
                         <div className="p-field">
                             <label htmlFor="name" className="p-d-block">სახელი</label>
                             <InputText value={editUserData.name} onChange={(e) => setEditUserData({...editUserData,name:e.target.value})} id="name" aria-describedby="name-help" className="p-d-block"/>
                             {/*<small id="username1-help" className="p-d-block">Enter your username to reset your password.</small>*/}
                         </div>
                         <div className="p-field" style={{paddingLeft:'10px'}}>
                             <label htmlFor="lastname" className="p-d-block">გვარი</label>
                             <InputText value={editUserData.lastname} onChange={(e) => setEditUserData({...editUserData,lastname:e.target.value})} id="lastname" aria-describedby="lastname-help" className="p-d-block"/>
                             {/*<small id="username1-help" className="p-d-block">Enter your username to reset your password.</small>*/}
                         </div>
                     </div>
                     <div className="flex-cont row">
                         <div className="p-field">
                             <label htmlFor="personal_id" className="p-d-block">პირადი ნომერი</label>
                             <InputText value={editUserData.personal_id} onChange={(e) => setEditUserData({...editUserData,personal_id:e.target.value})} id="personal_id" aria-describedby="personal_id-help" className="p-d-block"/>
                             {/*<small id="username1-help" className="p-d-block">Enter your username to reset your password.</small>*/}
                         </div>

                         <div className="p-field" style={{paddingLeft:'10px'}}>
                             <label htmlFor="document_number" className="p-d-block">დოკუმენტის ნომერი</label>
                             <InputText value={editUserData.document_number} onChange={(e) => setEditUserData({...editUserData,document_number:e.target.value})} id="document_number" aria-describedby="document_number-help" className="p-d-block"/>
                             {/*<small id="username1-help" className="p-d-block">Enter your username to reset your password.</small>*/}
                         </div>
                     </div>

                     <div style={{height:'150px',paddingTop:'10px'}}>რეგისტრაციის თარიღი:&nbsp; {editUserData.registrationDate}</div>

                 </div>
             </Dialog>

        </div>
    )

}
export default Users;
