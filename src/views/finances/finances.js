import React, {useEffect, useState} from "react";
import "./finances.scss"
import {SearchUser} from "./components/filter/searchUser";
import {SearchIp} from "./components/filter/ipList";
import {Calendar} from "../../components/calendar/Calendar";
import {Dropdown} from "../../components/dropdown/Dropdown";
import {InputNumber} from "../../components/inputnumber/InputNumber";
import {AutoComplete } from "../../components/autocomplete/AutoComplete";
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
import {DataTable} from "../../components/datatable/DataTable";
import {Column} from "../../components/column/Column";
const Finances = () =>{
    const [userId,setUserId]=useState(null);
    const [userData,setUserData]=useState([]);
    const [data,setData]=useState([]);
    const [amount,setAmount]=useState(null);
    const [regDoctype,setRegDoctype]=useState({name: 'პირადობა', code: 1});
    const [docTypes,setDocTypes]=useState([
        {name: 'პირადობა', code: 1},
        {name: 'პასპორტი', code: 2},
    ]);
    const [registration,setRegistration]=useState(
        {
            id:'',
            name :'',
            lastname :'',
            personal_id :'',
            document_number :'',
            document_type :1,
            birth_date :'',
        }
    );

    const [userSearch, setUserSearch] = useState({
        id:'',
        personal_id:''
    })

    const [transSearch, setTransSearch] = useState({
        id:'',
        personal_id:''
    })

    const docTypeMethod=(val)=>{
        setRegistration({...registration,document_type:val.code})
        setRegDoctype(val);
    }
    const regBirthday=(val)=>{
        setRegistration({...registration,birth_date:moment(val.value).format("DD/MM/yy")})
    }
    //useEffect(()=>{
    //    console.log(userSearch)
    //},[userSearch])


    const getWithdrawals = async () => {
        const response = await Actions.Config.WithdrawalList();
        setData(response.status?response.data.withdrawals:[])
    }
    //const getUserList = async () => {
    //    const response = await Actions.Config.UserList()
    //    setUserData(response.data.users);
    //}

    useEffect(()=>{
        getWithdrawals();
        //getUserList();
    },[])


    // dialog
    const [withdraw, setWithdraw] = useState(false);
    const [position, setPosition] = useState('center');

    const dialogFuncMap = {
        'withdraw': setWithdraw,
    }

    const onClick = (name, position) => {
        dialogFuncMap[`${name}`](true);

        if (position) {
            setPosition(position);
        }
    }

    const onHide = (name) => {
        dialogFuncMap[`${name}`](false);
        if(name === "withdraw") {
            // reset withdraw info
            setRegistration({
                id: '',
                name: '',
                lastname: '',
                personal_id: '',
                document_number: '',
                document_type: 1,
                birth_date: '',
            });
            setAmount(null);
        }
    }

    const submitMethod = (name) => {
        if(name === "withdraw"){
            if(registration.id === '' || amount === null){

            }else{
                Actions.Config.Withdraw({user_id:registration.id,amount:amount}).then(response => {
                    if(response.status && response.data.status === 1){
                        getWithdrawals();
                        onHide(name);
                    }
                });
            }
        }
    }

    const onSearch=()=>{
        if(transSearch.id === ''){
            getWithdrawals();
        }else{
            Actions.Config.TransSearch(transSearch).then(response => {
                if(response.status && response.data.status === 1){
                    console.log('response',response)
                    setData(response.data.withdrawals)
                }
            });
        }

    }

    const renderFooter = (name) => {
        return (
            <div>
                <Button label="გაუქმება" icon="pi pi-times" onClick={() => onHide(name)} className="p-button-text" />
                <Button label="გაცემა" icon="pi pi-plus" onClick={() => submitMethod(name)} autoFocus />
            </div>
        );
    }
    // end dialog


    // AutoComplete
    const [countries, setCountries] = useState([]);
    const [selectedCountry1, setSelectedCountry1] = useState(null);
    const [selectedCountry2, setSelectedCountry2] = useState(null);
    const [selectedCountries, setSelectedCountries] = useState(null);

    const [filteredUsers, setFilteredUsers] = useState(null);
    const [selectedUser, setSelectedUser] = useState(null);

    //const countryservice = new CountryService();

    useEffect(() => {
        //countryservice.getCountries().then(data => setCountries(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const searchUser = (event) => {
        setTimeout(() => {
            let fillUsers;

            Actions.Config.SearchUserForWithdraw(event.query).then(response => {
                if(response.data.status === 1){
                    setUserData(response.data.users);

                    if (!event.query.trim().length) {
                        fillUsers = [response.data.users];
                    }
                    else {
                        fillUsers = response.data.users.filter((user) => {
                            return user.personalId.toLowerCase().startsWith(event.query.toLowerCase());
                        });
                    }

                    setFilteredUsers(fillUsers);
                }
            });

        }, 250);
    }

    const selectedUserForWithdraw = (e) => {
        setSelectedUser(e.value);
        setUserId(e.value.id);
        setRegistration({
            id:e.value.id,
            name :e.value.name,
            lastname :e.value.lastname,
            personal_id :e.value.personalId,
            document_number :e.value.documentNumber,
            document_type :1,
            birth_date :'',
        })

        console.log('SelectedUser',selectedUser)
    }

    const itemTemplate = (item) => {
        return (
            <div className="country-item">
                <img alt={item.name} src={`showcase/demo/images/flag_placeholder.png`} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} className={`flag flag-${item.code.toLowerCase()}`} />
                <div>{item.name}</div>
            </div>
        );
    }
    // end AutoComplete

    return (
         <div id="finances" className="content-section implementation">
             <div className="flex-box call ">
                 {/*<UserFilter setData={setData}/>*/}
                 <div className="flex-cont bg reg-box">
                     <div className="flex-box row">
                         <div className="flex-box row" style={{flex:'1'}}>
                             <div className="p-field">
                                 {/*<label htmlFor="userId" className="p-d-block">#</label>*/}
                                 <InputText value={transSearch.id} onChange={(e) => setTransSearch({...transSearch,id:e.target.value})} id="userId" aria-describedby="userId-help" className=" p-d-block" placeholder="#" />
                                 {/*<small id="username2-help" className="p-error p-d-block">Username is not available.</small>*/}
                             </div>
                        {/*     <div className="p-field">
                                 <label htmlFor="userPid" className="p-d-block">პ/ნ</label>
                                 <InputText value={userSearch.personal_id} onChange={(e) => setUserSearch({...userSearch,personal_id:e.target.value})} id="userPid" aria-describedby="userPid-help" className=" p-d-block" />
                                 <small id="username2-help" className="p-error p-d-block">Username is not available.</small>
                             </div>*/}
                             <div className="p-field">
                                 {/*<label htmlFor="" className="p-d-block">&nbsp;</label>*/}
                                 <Button label="ძიება" onClick={() => onSearch()} />
                                 {/*<small id="username2-help" className="p-error p-d-block">Username is not available.</small>*/}
                             </div>
                         </div>

                         <Button label="მოგების გაცემა" icon="pi pi-user" onClick={() => onClick('withdraw')} />
                     </div>
                 </div>
                 <div className="flex-cont grid bg">
                     <UsersList data={data}/>
                 </div>
             </div>


             <Dialog header="მოგების გაცემა" visible={withdraw} style={{ width: '500px' }} footer={renderFooter('withdraw')} onHide={() => onHide('withdraw')}>
                <div className="financesDialog flex-box call">

                    <div className="flex-cont row">
                        <div className="p-field">
                            <AutoComplete placeholder="პირადი ნომერი" value={selectedUser} suggestions={filteredUsers} completeMethod={searchUser} field="personalId" onChange={(e) => selectedUserForWithdraw(e)} />
                        </div>
                        <div className="p-field">
                            <InputNumber placeholder="თანხა" id="amount" value={amount} onValueChange={(e) => setAmount(e.target.value)} mode="decimal" minFractionDigits={2} />
                        </div>
                    </div>

                    <div className="identGrid">
                        <DataTable value={[registration]}>
                            <Column field="name" header="სახელი"></Column>
                            <Column field="lastname" header="გვარი"></Column>
                            <Column field="document_number" header="პირადი ნომერი"></Column>
                        </DataTable>
                    </div>

                </div>
             </Dialog>

        </div>
    )

}
export default Finances;
