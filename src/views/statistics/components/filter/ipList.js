import {MultiSelect} from "../../../../components/multiselect/MultiSelect";
import React, {useState} from "react";

export const SearchIp = ()=>{
    const [selectedIps, setSelectedIps]=useState(null)
    const [selectedCountries, setSelectedCountries]=useState(null)
    const cities = [
        {name: 'New York', code: 'NY'},
        {name: 'Rome', code: 'RM'},
        {name: 'London', code: 'LDN'},
        {name: 'Istanbul', code: 'IST'},
        {name: 'Paris', code: 'PRS'}
    ];

    const countries = [
        {name: 'Australia', code: 'AU'},
        {name: 'Brazil', code: 'BR'},
        {name: 'China', code: 'CN'},
        {name: 'Egypt', code: 'EG'},
        {name: 'France', code: 'FR'},
        {name: 'Germany', code: 'DE'},
        {name: 'India', code: 'IN'},
        {name: 'Japan', code: 'JP'},
        {name: 'Spain', code: 'ES'},
        {name: 'United States', code: 'US'}
    ];

    const countryTemplate=(option)=> {
        return (
            <div className="country-item">
                <img alt={option.name} src="showcase/demo/images/flag_placeholder.png" onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} className={`flag flag-${option.code.toLowerCase()}`} />
                <div>{option.name}</div>
            </div>
        );
    }

    const selectedCountriesTemplate=(option) =>{
        if (option) {
            return (
                <div className="country-item country-item-value">
                    <img alt={option.name} src="showcase/demo/images/flag_placeholder.png" onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} className={`flag flag-${option.code.toLowerCase()}`} />
                    <div>{option.name}</div>
                </div>
            );
        }

        return "Select Countries";
    }

    const panelFooterTemplate=()=> {
        const selectedItems = selectedCountries;
        const length = selectedItems ? selectedItems.length : 0;
        return (
            <div className="p-py-2 p-px-3">
                <b>{length}</b> item{length > 1 ? 's' : ''} selected.
            </div>
        );
    }
    return  (
        <MultiSelect
            value={selectedIps}
            options={countries}
            onChange={(e) => console.log(e.value)}
            optionLabel="name"
            placeholder="Select Countries"
            filter
            className="multiselect-custom"
            itemTemplate={countryTemplate}
            panelHeaderTemplate={
                ()=><div className="p-py-2 p-px-3">
                    <b>test</b>dsadasd.
                </div>
            }
            selectedItemTemplate={selectedCountriesTemplate}
            panelFooterTemplate={panelFooterTemplate} />
    )
}
