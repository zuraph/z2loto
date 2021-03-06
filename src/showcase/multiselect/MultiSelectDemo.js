import React, { Component } from 'react';
import { MultiSelect } from '../../components/multiselect/MultiSelect';
import { MultiSelectDoc } from './MultiSelectDoc';
import { AppInlineHeader } from '../../AppInlineHeader';
import './MultiSelectDemo.scss';

export class MultiSelectDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedCities1: null,
            selectedCities2: null,
            selectedCountries: null
        };

        this.cities = [
            {name: 'New York', code: 'NY'},
            {name: 'Rome', code: 'RM'},
            {name: 'London', code: 'LDN'},
            {name: 'Istanbul', code: 'IST'},
            {name: 'Paris', code: 'PRS'}
        ];

        this.countries = [
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

        this.countryTemplate = this.countryTemplate.bind(this);
        this.selectedCountriesTemplate = this.selectedCountriesTemplate.bind(this);
        this.panelFooterTemplate = this.panelFooterTemplate.bind(this);
    }

    countryTemplate(option) {
        return (
            <div className="country-item">
                <img alt={option.name} src="showcase/demo/images/flag_placeholder.png" onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} className={`flag flag-${option.code.toLowerCase()}`} />
                <div>{option.name}</div>
            </div>
        );
    }

    selectedCountriesTemplate(option) {
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

    panelFooterTemplate() {
        const selectedItems = this.state.selectedCountries;
        const length = selectedItems ? selectedItems.length : 0;
        return (
            <div className="p-py-2 p-px-3">
                <b>{length}</b> item{length > 1 ? 's' : ''} selected.
            </div>
        );
    }

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <AppInlineHeader changelogText="multiSelect" showInputStyle>
                        <h1>MultiSelect</h1>
                        <p>MultiSelect is used to select multiple items from a collection.</p>
                    </AppInlineHeader>
                </div>

                <div className="content-section implementation multiselect-demo">
                    <div className="card">
                        <h5>Basic</h5>
                        <MultiSelect value={this.state.selectedCities1} options={this.cities} onChange={(e) => this.setState({ selectedCities1: e.value })} optionLabel="name" placeholder="Select a City" />

                        <h5>Chips</h5>
                        <MultiSelect value={this.state.selectedCities2} options={this.cities} onChange={(e) => this.setState({ selectedCities2: e.value })} optionLabel="name" placeholder="Select a City" display="chip" />

                        <h5>Advanced with Templating and Filtering</h5>

                        <MultiSelect
                            value={this.state.selectedCountries}
                            options={this.countries}
                            onChange={(e) => this.setState({ selectedCountries: e.value })}
                            optionLabel="name"
                            placeholder="Select Countries"
                            filter className="multiselect-custom"
                            itemTemplate={this.countryTemplate}
                            selectedItemTemplate={this.selectedCountriesTemplate}
                            panelFooterTemplate={this.panelFooterTemplate} />
                    </div>
                </div>

                <MultiSelectDoc />
            </div>
        );
    }
}
