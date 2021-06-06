import React, {useEffect, useState} from "react";
import {AutoComplete} from "../../../../components/autocomplete/AutoComplete";
import {Actions} from "../../../../core";
import {Timeout} from "../../../../core/utils/timeout";
export const SearchUser = () =>{
    const [countries,setCountries]=useState([])
    const [value,setValue]=useState(null)
    const [filteredCountries, setFilteredCountries]=useState(null)
    const timeout= Timeout;
    const findByUser = async (query)=>{
        return await (Actions.Users.findBy(query))
    }
    //const response =
    const searchCountry = (event) => {
        if(event.query.length>2){
            timeout.set(()=>{
                findByUser(event.query).then((response)=>{
                    setFilteredCountries(response.status? response.data.data:[]);
                })
                timeout.clear()
            },500)
        }

    }

    const itemTemplate = (item) => {
        return (
            <div className="country-item">
{/*
                <img awaitlt={item.name} src={`showcase/demo/images/flag_placeholder.png`} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} className={`flag flag-${item.code.toLowerCase()}`} />
*/}
                <div>{item.id} - </div>
                <div>{item.username}</div>
            </div>
        );
    }

    return (
        <AutoComplete
            value={value}
            suggestions={filteredCountries}
            completeMethod={searchCountry}
            field="username"
            dropdown
            forceSelection
            placeholder={"username"}
            itemTemplate={itemTemplate}
            onChange={(e) => {
                setValue(e.target.value)
            }}
        />

    )

}
