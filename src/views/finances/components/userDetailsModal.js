import {Dialog} from "../../../components/dialog/Dialog";
import {Button} from "../../../components/button/Button";
import React, {useEffect, useState} from "react";
import {TabPanel, TabView} from "../../../components/tabview/TabView";
import {Column} from "../../../components/column/Column";
import {DataTable} from "../../../components/datatable/DataTable";
import {Accordion, AccordionTab} from "../../../components/accordion/Accordion";
import "./style/userDetails.scss"
import {Toolbar} from "../../../components/toolbar/Toolbar";
import {InputTextarea} from "../../../components/inputtextarea/InputTextarea";
import _ from "lodash"
import moment from "moment";
import {Actions} from "../../../core";
const UserDetailsModal = ({user,onClose}) =>{
    const [activeIndex,setActiveIndex]=useState(0)
    const [personalInfo,setPersonalInfo]=useState(null)
    const [accounts,setAccounts]=useState([
        {
            type:"GEL",
            deposit:"1500",
            frozen:"0",
            description:""
        },
        {
            type:"EGT",
            deposit:"122",
            frozen:"0",
            description:""
        }
    ])
    const [parameters,setParameters]=useState([
        {
            key:"test",
            value:"test"
        },{
            key:"test",
            value:"test"
        }
        ,{
            key:"test",
            value:"test"
        },
        {
            key:"test",
            value:"test"
        }
    ])
    const [comments,setComments]=useState([
        {
            id:1,date: moment(new Date()).format("YYYY-MM-DD"),operator:"lightnight",comment:"მაგარია "
        }
    ])
    const [comment,setComment]=useState({
        dialog:false,
        value:""
    })
    const onHide=(name)=>{
        onClose(false)
    }
   const  renderFooter=(name)=> {
        return (
            <div>
                <Button label="No" icon="pi pi-times" onClick={() => onHide(name)} className="p-button-text" />
                <Button label="Yes" icon="pi pi-check" onClick={() => onHide(name)} autoFocus />
            </div>
        );
    }
   const onChangeTab=(index)=> {
        setActiveIndex(index)
    }
   useEffect(()=>{
       loadData(activeIndex)
   },[activeIndex])

   const loadData=async (tab) => {
       let response;
       switch (tab) {
           case 0:
               response = await Actions.Users.personalInfo(user.id);

               setPersonalInfo(response.status?_.map(response.data.data, (v,k)=>{
                   switch (k){
                       case "country":
                           return {
                               key:k,
                               value:v.name
                           }
                       case "currency":
                           return {
                               key:k,
                               value:v.iso3
                           }
                      case "userGroup":
                           return {
                               key:k,
                               value:v.name
                           }
                      case "userVerifyStatus":
                           return {
                               key:k,
                               value:v.name
                           }
                       default:
                           return {
                               key:k,
                               value:v
                           }
                   }

               }):{})
               break
           case 1:
               response = await Actions.Users.accountsInfo(user.id);
               setAccounts(response.status?response.data.data:[])
               console.log(response)
               break
           case 2:
               response = await Actions.Users.optionsInfo(user.id);
               setParameters(response.status?response.data.data:[])
               break
       }

   }

    return (
        <>
            <Dialog
                header={user.username}
                visible={true}
                maximizable
                modal={false}
                style={{ width: '700px' }}
                footer={renderFooter('displayMaximizable')}
                onHide={() =>onHide('displayMaximizable')}>
                <TabView
                    activeIndex={activeIndex}
                    onTabChange={(e)=>onChangeTab(e.index)}
                    className="tabview-custom" style={{borderTop:'1px solid gray'}}>
                    <TabPanel header="პირადი" >
                        <DataTable value={personalInfo} scrollable={true} scrollHeight={"500px"}  className="p-datatable-gridlines">
                            <Column field="key" header="Information"/>
                            <Column field="value" header=""/>
                        </DataTable>
                    </TabPanel>
                    <TabPanel header="ანგარიშები" >
                        <DataTable value={accounts}  className="p-datatable-gridlines">
                            <Column field="amount" header="Amount"/>
                            <Column field="currency.iso3" header="Currency"/>

                            <Column field="lastAccessDate" header="Last Access Date"/>
                            <Column field="blocked" header="Blocked" body={e=>{
                                return  <span style={{color:`${e.blocked===1?'red':'green'}`}}>{e.blocked ===1?"yes":"no"}</span>
                            }}/>
                        </DataTable>
                    </TabPanel>
                    <TabPanel header="პარამეტრები" >
                        <DataTable  scrollable={true}  value={parameters}  className="p-datatable-gridlines">
                            <Column field="key" header="მომხმარებლის პარამეტრები"/>
                            <Column field="value" header=""/>
                        </DataTable>
                    </TabPanel>
                    <TabPanel header="შეზღუდვა" >
                        <Accordion className={"user-limit-accordion"} multiple={true}>
                            <AccordionTab header="ლაივის ბეთის დამოწმება">
                                <DataTable value={accounts}  className="p-datatable-gridlines">
                                    <Column field="type" header="ტიპი"></Column>
                                    <Column field="deposit" header="დეპოზიტი"></Column>
                                    <Column field="frozen" header="გაყინული"></Column>
                                    <Column field="description" header="განმარტება"></Column>
                                </DataTable>
                            </AccordionTab>
                            <AccordionTab header="ბილეთის დამოწმება">
                                <DataTable value={accounts}  className="p-datatable-gridlines">
                                    <Column field="type" header="ტიპი"></Column>
                                    <Column field="deposit" header="დეპოზიტი"></Column>
                                    <Column field="frozen" header="გაყინული"></Column>
                                    <Column field="description" header="განმარტება"></Column>
                                </DataTable>
                            </AccordionTab>
                            <AccordionTab header="ბილინგი">
                                <DataTable value={accounts}  className="p-datatable-gridlines">
                                    <Column field="type" header="ტიპი"></Column>
                                    <Column field="deposit" header="დეპოზიტი"></Column>
                                    <Column field="frozen" header="გაყინული"></Column>
                                    <Column field="description" header="განმარტება"></Column>
                                </DataTable>
                            </AccordionTab>
                        </Accordion>
                    </TabPanel>
                    <TabPanel header="კომენტარები" >
                        <Toolbar left={
                            <Button label="New" icon="pi pi-plus" className="p-button-success p-mr-2" onClick={()=>setComment({...comment, dialog: true})} />
                        } />
                        <DataTable value={comments} scrollable={true} scrollHeight={'500px'}  className="p-datatable-gridlines">
                            <Column field="date" header="თარიღი"/>
                            <Column field="operator" header="ოპერატორი"/>
                            <Column field="comment" header="კომენტარი"/>
                        </DataTable>
                    </TabPanel>
                </TabView>
            </Dialog>

            <Dialog
                visible={comment.dialog}
                style={{ width: '450px' }}
                header="კომენტარის დამატება"
                modal
                className="p-fluid"
                footer={
                    <>
                        <Button label="Cancel" icon="pi pi-times" className="p-button-text" onClick={()=>setComment({
                            ...comment,
                            dialog:false,
                            value:""
                        })} />
                        <Button label="Save" icon="pi pi-check" className="p-button-text" onClick={()=>{
                            setComments([
                                ...comments,
                                {
                                    id:1,date: moment(new Date()).format("YYYY-MM-DD"),operator:"lightnight",comment:comment.value
                                }
                            ])
                            setComment({
                                dialog: false,
                                value: ""
                            })
                        }} />
                    </>
                }
                onHide={()=>setComment({
                    ...comment,
                    dialog:false,
                    value:""
                })}>
                <div className="p-field">
                    <label htmlFor="description">კომენტარი</label>
                    <InputTextarea id="description" value={comment.value} onChange={(e) => setComment({...comment,value: e.target.value})} required rows={3} cols={20} />
                </div>
            </Dialog>
        </>
     )
}
export default UserDetailsModal;


