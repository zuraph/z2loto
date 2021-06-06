import React, {useState} from "react";
import StatisticFilter from "../statistics/components/StatisticFilter";
import {Column} from "../../components/column/Column";
import {DataTable} from "../../components/datatable/DataTable";
import "./statistics.scss"
const Statistics = ()=>{
    const [data,setData]=useState([])
    return (
        <div id="statistics" className="content-section implementation">
            <div className="flex-box row">
                <div className="flex-box call" style={{flex:'1',border: '1px solid #0aa9f2'}}>
                    <div className="flex-box call" >
                        <div className="title">Internal Transaction</div>
                        <StatisticFilter setData={setData}/>
                        <div className="myTable flex-box call">
                            <div className="tb-head">
                                <table cellpadding="0" cellspacing="0" border="1">
                                    <thead>
                                        <tr>
                                            <th rowSpan="2" width="50%">ოპერატორი</th>
                                            <th colspan="2" width="200px">თამაშშის გადარიცხვა</th>
                                            <th colspan="2" width="200px">თამაშიდან გადმორიცხვა</th>
                                            <th rowSpan="2" width="120px">ბალანსი</th>
                                            <th rowSpan="2" width="70px">%</th>
                                        </tr>
                                        <tr>
                                            <th>თანხა</th>
                                            <th>რაოდ</th>
                                            <th>თანხა</th>
                                            <th>რაოდ</th>
                                        </tr>
                                    </thead>
                                </table>
                            </div>
                            <div className="tb-cont">
                                <table cellPadding="0" cellSpacing="0" border="0">
                                    <tbody>

                                    <tr>
                                        <td width="50%">1</td>
                                        <td width="100px">1</td>
                                        <td width="100px">1</td>
                                        <td width="100px">1</td>
                                        <td width="100px">1</td>
                                        <td width="120px">1</td>
                                        <td width="70px">1</td>
                                    </tr>
                                    <tr>
                                        <td width="50%">1</td>
                                        <td width="100px">1</td>
                                        <td width="100px">1</td>
                                        <td width="100px">1</td>
                                        <td width="100px">1</td>
                                        <td width="120px">1</td>
                                        <td width="70px">1</td>
                                    </tr>

                                    <tr>
                                        <td width="50%">1</td>
                                        <td width="100px">1</td>
                                        <td width="100px">1</td>
                                        <td width="100px">1</td>
                                        <td width="100px">1</td>
                                        <td width="120px">1</td>
                                        <td width="70px">1</td>
                                    </tr>
                                    <tr>
                                        <td width="50%">1</td>
                                        <td width="100px">1</td>
                                        <td width="100px">1</td>
                                        <td width="100px">1</td>
                                        <td width="100px">1</td>
                                        <td width="120px">1</td>
                                        <td width="70px">1</td>
                                    </tr>
                                    <tr>
                                        <td width="50%">1</td>
                                        <td width="100px">1</td>
                                        <td width="100px">1</td>
                                        <td width="100px">1</td>
                                        <td width="100px">1</td>
                                        <td width="120px">1</td>
                                        <td width="70px">1</td>
                                    </tr>
                                    <tr>
                                        <td width="50%">1</td>
                                        <td width="100px">1</td>
                                        <td width="100px">1</td>
                                        <td width="100px">1</td>
                                        <td width="100px">1</td>
                                        <td width="120px">1</td>
                                        <td width="70px">1</td>
                                    </tr>
                                    <tr>
                                        <td width="50%">1</td>
                                        <td width="100px">1</td>
                                        <td width="100px">1</td>
                                        <td width="100px">1</td>
                                        <td width="100px">1</td>
                                        <td width="120px">1</td>
                                        <td width="70px">1</td>
                                    </tr>
                                    <tr>
                                        <td width="50%">1</td>
                                        <td width="100px">1</td>
                                        <td width="100px">1</td>
                                        <td width="100px">1</td>
                                        <td width="100px">1</td>
                                        <td width="120px">1</td>
                                        <td width="70px">1</td>
                                    </tr>
                                    <tr>
                                        <td width="50%">1</td>
                                        <td width="100px">1</td>
                                        <td width="100px">1</td>
                                        <td width="100px">1</td>
                                        <td width="100px">1</td>
                                        <td width="120px">1</td>
                                        <td width="70px">1</td>
                                    </tr>
                                        <tr>
                                            <td width="50%">1</td>
                                            <td width="100px">1</td>
                                            <td width="100px">1</td>
                                            <td width="100px">1</td>
                                            <td width="100px">1</td>
                                            <td width="120px">1</td>
                                            <td width="70px">1</td>
                                        </tr>
                                        <tr>
                                            <td width="50%">1</td>
                                            <td width="100px">1</td>
                                            <td width="100px">1</td>
                                            <td width="100px">1</td>
                                            <td width="100px">1</td>
                                            <td width="120px">1</td>
                                            <td width="70px">1</td>
                                        </tr>
                                        <tr>
                                            <td width="50%">1</td>
                                            <td width="100px">1</td>
                                            <td width="100px">1</td>
                                            <td width="100px">1</td>
                                            <td width="100px">1</td>
                                            <td width="120px">1</td>
                                            <td width="70px">1</td>
                                        </tr>
                                        <tr>
                                            <td width="50%">1</td>
                                            <td width="100px">1</td>
                                            <td width="100px">1</td>
                                            <td width="100px">1</td>
                                            <td width="100px">1</td>
                                            <td width="120px">1</td>
                                            <td width="70px">1</td>
                                        </tr>
                                        <tr>
                                            <td width="50%">1</td>
                                            <td width="100px">1</td>
                                            <td width="100px">1</td>
                                            <td width="100px">1</td>
                                            <td width="100px">1</td>
                                            <td width="120px">1</td>
                                            <td width="70px">1</td>
                                        </tr>
                                        <tr>
                                            <td width="50%">1</td>
                                            <td width="100px">1</td>
                                            <td width="100px">1</td>
                                            <td width="100px">1</td>
                                            <td width="100px">1</td>
                                            <td width="120px">1</td>
                                            <td width="70px">1</td>
                                        </tr>
                                        <tr>
                                            <td width="50%">1</td>
                                            <td width="100px">1</td>
                                            <td width="100px">1</td>
                                            <td width="100px">1</td>
                                            <td width="100px">1</td>
                                            <td width="120px">1</td>
                                            <td width="70px">1</td>
                                        </tr>
                                        <tr>
                                            <td width="50%">1</td>
                                            <td width="100px">1</td>
                                            <td width="100px">1</td>
                                            <td width="100px">1</td>
                                            <td width="100px">1</td>
                                            <td width="120px">1</td>
                                            <td width="70px">1</td>
                                        </tr>
                                        <tr>
                                            <td width="50%">1</td>
                                            <td width="100px">1</td>
                                            <td width="100px">1</td>
                                            <td width="100px">1</td>
                                            <td width="100px">1</td>
                                            <td width="120px">1</td>
                                            <td width="70px">1</td>
                                        </tr>
                                        <tr>
                                            <td width="50%">1</td>
                                            <td width="100px">1</td>
                                            <td width="100px">1</td>
                                            <td width="100px">1</td>
                                            <td width="100px">1</td>
                                            <td width="120px">1</td>
                                            <td width="70px">1</td>
                                        </tr>
                                        <tr>
                                            <td width="50%">1</td>
                                            <td width="100px">1</td>
                                            <td width="100px">1</td>
                                            <td width="100px">1</td>
                                            <td width="100px">1</td>
                                            <td width="120px">1</td>
                                            <td width="70px">1</td>
                                        </tr>
                                        <tr>
                                            <td width="50%">1</td>
                                            <td width="100px">1</td>
                                            <td width="100px">1</td>
                                            <td width="100px">1</td>
                                            <td width="100px">1</td>
                                            <td width="120px">1</td>
                                            <td width="70px">1</td>
                                        </tr>
                                        <tr>
                                            <td width="50%">1</td>
                                            <td width="100px">1</td>
                                            <td width="100px">1</td>
                                            <td width="100px">1</td>
                                            <td width="100px">1</td>
                                            <td width="120px">1</td>
                                            <td width="70px">1</td>
                                        </tr>
                                        <tr>
                                            <td width="50%">1</td>
                                            <td width="100px">1</td>
                                            <td width="100px">1</td>
                                            <td width="100px">1</td>
                                            <td width="100px">1</td>
                                            <td width="120px">1</td>
                                            <td width="70px">1</td>
                                        </tr>
                                        <tr>
                                            <td width="50%">1</td>
                                            <td width="100px">1</td>
                                            <td width="100px">1</td>
                                            <td width="100px">1</td>
                                            <td width="100px">1</td>
                                            <td width="120px">1</td>
                                            <td width="70px">1</td>
                                        </tr>
                                        <tr>
                                            <td width="50%">1</td>
                                            <td width="100px">1</td>
                                            <td width="100px">1</td>
                                            <td width="100px">1</td>
                                            <td width="100px">1</td>
                                            <td width="120px">1</td>
                                            <td width="70px">1</td>
                                        </tr>
                                        <tr>
                                            <td width="50%">1</td>
                                            <td width="100px">1</td>
                                            <td width="100px">1</td>
                                            <td width="100px">1</td>
                                            <td width="100px">1</td>
                                            <td width="120px">1</td>
                                            <td width="70px">1</td>
                                        </tr>
                                        <tr>
                                            <td width="50%">1</td>
                                            <td width="100px">1</td>
                                            <td width="100px">1</td>
                                            <td width="100px">1</td>
                                            <td width="100px">1</td>
                                            <td width="120px">1</td>
                                            <td width="70px">1</td>
                                        </tr>
                                        <tr>
                                            <td width="50%">1</td>
                                            <td width="100px">1</td>
                                            <td width="100px">1</td>
                                            <td width="100px">1</td>
                                            <td width="100px">1</td>
                                            <td width="120px">1</td>
                                            <td width="70px">1</td>
                                        </tr>
                                        <tr>
                                            <td width="50%">1</td>
                                            <td width="100px">1</td>
                                            <td width="100px">1</td>
                                            <td width="100px">1</td>
                                            <td width="100px">1</td>
                                            <td width="120px">1</td>
                                            <td width="70px">1</td>
                                        </tr>
                                        <tr>
                                            <td width="50%">1</td>
                                            <td width="100px">1</td>
                                            <td width="100px">1</td>
                                            <td width="100px">1</td>
                                            <td width="100px">1</td>
                                            <td width="120px">1</td>
                                            <td width="70px">1</td>
                                        </tr>
                                        <tr>
                                            <td width="50%">1</td>
                                            <td width="100px">1</td>
                                            <td width="100px">1</td>
                                            <td width="100px">1</td>
                                            <td width="100px">1</td>
                                            <td width="120px">1</td>
                                            <td width="70px">1</td>
                                        </tr>
                                        <tr>
                                            <td width="50%">1</td>
                                            <td width="100px">1</td>
                                            <td width="100px">1</td>
                                            <td width="100px">1</td>
                                            <td width="100px">1</td>
                                            <td width="120px">1</td>
                                            <td width="70px">1</td>
                                        </tr>
                                        <tr>
                                            <td width="50%">1</td>
                                            <td width="100px">1</td>
                                            <td width="100px">1</td>
                                            <td width="100px">1</td>
                                            <td width="100px">1</td>
                                            <td width="120px">1</td>
                                            <td width="70px">1</td>
                                        </tr>
                                        <tr>
                                            <td width="50%">1</td>
                                            <td width="100px">1</td>
                                            <td width="100px">1</td>
                                            <td width="100px">1</td>
                                            <td width="100px">1</td>
                                            <td width="120px">1</td>
                                            <td width="70px">1</td>
                                        </tr>
                                        <tr>
                                            <td width="50%">1</td>
                                            <td width="100px">1</td>
                                            <td width="100px">1</td>
                                            <td width="100px">1</td>
                                            <td width="100px">1</td>
                                            <td width="120px">1</td>
                                            <td width="70px">1</td>
                                        </tr>
                                        <tr>
                                            <td width="50%">1</td>
                                            <td width="100px">1</td>
                                            <td width="100px">1</td>
                                            <td width="100px">1</td>
                                            <td width="100px">1</td>
                                            <td width="120px">1</td>
                                            <td width="70px">1</td>
                                        </tr>
                                        <tr>
                                            <td width="50%">1</td>
                                            <td width="100px">1</td>
                                            <td width="100px">1</td>
                                            <td width="100px">1</td>
                                            <td width="100px">1</td>
                                            <td width="120px">1</td>
                                            <td width="70px">1</td>
                                        </tr>
                                        <tr>
                                            <td width="50%">1</td>
                                            <td width="100px">1</td>
                                            <td width="100px">1</td>
                                            <td width="100px">1</td>
                                            <td width="100px">1</td>
                                            <td width="120px">1</td>
                                            <td width="70px">1</td>
                                        </tr>
                                        <tr>
                                            <td width="50%">1</td>
                                            <td width="100px">1</td>
                                            <td width="100px">1</td>
                                            <td width="100px">1</td>
                                            <td width="100px">1</td>
                                            <td width="120px">1</td>
                                            <td width="70px">1</td>
                                        </tr>
                                        <tr>
                                            <td width="50%">1</td>
                                            <td width="100px">1</td>
                                            <td width="100px">1</td>
                                            <td width="100px">1</td>
                                            <td width="100px">1</td>
                                            <td width="120px">1</td>
                                            <td width="70px">1</td>
                                        </tr>
                                        <tr>
                                            <td width="50%">1</td>
                                            <td width="100px">1</td>
                                            <td width="100px">1</td>
                                            <td width="100px">1</td>
                                            <td width="100px">1</td>
                                            <td width="120px">1</td>
                                            <td width="70px">1</td>
                                        </tr>
                                        <tr>
                                            <td width="50%">1</td>
                                            <td width="100px">1</td>
                                            <td width="100px">1</td>
                                            <td width="100px">1</td>
                                            <td width="100px">1</td>
                                            <td width="120px">1</td>
                                            <td width="70px">1</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="tb-foot">
                                <table cellPadding="0" cellSpacing="0" border="0">
                                    <tbody>
                                    <tr>
                                        <td width="50%"></td>
                                        <td width="100px">1</td>
                                        <td width="100px">1</td>
                                        <td width="100px">1</td>
                                        <td width="100px">1</td>
                                        <td width="120px">1</td>
                                        <td width="70px">1</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="flex-box call" >
                        <div className="myTable flex-box call">
                            <div className="tb-head">
                                <table cellPadding="0" cellSpacing="0" border="1">
                                    <thead>
                                    <tr>
                                        <th rowSpan="2" width="50%">სერვისები</th>
                                        <th colSpan="2" width="200px">ჩარიცხვა</th>
                                        <th colSpan="3" width="300px">ჩამოჭრა</th>
                                        <th rowSpan="2" width="120px">ბალანსი</th>
                                    </tr>
                                    <tr>
                                        <th>თანხა</th>
                                        <th>რაოდ</th>
                                        <th>თანხა</th>
                                        <th>საკომისიო</th>
                                        <th>რაოდ</th>
                                    </tr>
                                    </thead>
                                </table>
                            </div>
                            <div className="tb-cont">
                                <table cellPadding="0" cellSpacing="0" border="0">
                                    <tbody>

                                    <tr>
                                        <td width="50%">1</td>
                                        <td width="100px">1</td>
                                        <td width="100px">1</td>
                                        <td width="100px">1</td>
                                        <td width="100px">1</td>
                                        <td width="100px">1</td>
                                        <td width="120px">1</td>
                                    </tr>
                                    <tr>
                                        <td width="50%">1</td>
                                        <td width="100px">1</td>
                                        <td width="100px">1</td>
                                        <td width="100px">1</td>
                                        <td width="100px">1</td>
                                        <td width="100px">1</td>
                                        <td width="120px">1</td>
                                    </tr>
                                    <tr>
                                        <td width="50%">1</td>
                                        <td width="100px">1</td>
                                        <td width="100px">1</td>
                                        <td width="100px">1</td>
                                        <td width="100px">1</td>
                                        <td width="100px">1</td>
                                        <td width="120px">1</td>
                                    </tr>
                                    <tr>
                                        <td width="50%">1</td>
                                        <td width="100px">1</td>
                                        <td width="100px">1</td>
                                        <td width="100px">1</td>
                                        <td width="100px">1</td>
                                        <td width="100px">1</td>
                                        <td width="120px">1</td>
                                    </tr>
                                    <tr>
                                        <td width="50%">1</td>
                                        <td width="100px">1</td>
                                        <td width="100px">1</td>
                                        <td width="100px">1</td>
                                        <td width="100px">1</td>
                                        <td width="100px">1</td>
                                        <td width="120px">1</td>
                                    </tr>
                                    <tr>
                                        <td width="50%">1</td>
                                        <td width="100px">1</td>
                                        <td width="100px">1</td>
                                        <td width="100px">1</td>
                                        <td width="100px">1</td>
                                        <td width="100px">1</td>
                                        <td width="120px">1</td>
                                    </tr>
                                    <tr>
                                        <td width="50%">1</td>
                                        <td width="100px">1</td>
                                        <td width="100px">1</td>
                                        <td width="100px">1</td>
                                        <td width="100px">1</td>
                                        <td width="100px">1</td>
                                        <td width="120px">1</td>
                                    </tr>
                                    <tr>
                                        <td width="50%">1</td>
                                        <td width="100px">1</td>
                                        <td width="100px">1</td>
                                        <td width="100px">1</td>
                                        <td width="100px">1</td>
                                        <td width="100px">1</td>
                                        <td width="120px">1</td>
                                    </tr>

                                    </tbody>
                                </table>
                            </div>
                            <div className="tb-foot">
                                <table cellPadding="0" cellSpacing="0" border="0">
                                    <tbody>
                                    <tr>
                                        <td width="50%"></td>
                                        <td width="100px">1</td>
                                        <td width="100px">1</td>
                                        <td width="100px">1</td>
                                        <td width="100px">1</td>
                                        <td width="100px">1</td>
                                        <td width="120px">1</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-box call" style={{flex:'1',border: '1px solid #0aa9f2',marginLeft:'10px'}}>
                    <div className="title">External Transaction</div>
                    <StatisticFilter setData={setData}/>
                    <div className="myTable flex-box call">
                        <div className="tb-head">
                            <table cellPadding="0" cellSpacing="0" border="1">
                                <thead>
                                <tr>
                                    <th rowSpan="2" width="50%">ოპერატორი</th>
                                    <th colSpan="2" width="200px">შემოტანა</th>
                                    <th colSpan="4" width="400px">გატანა</th>
                                    <th rowSpan="2" width="120px">ბალანსი</th>
                                </tr>
                                <tr>
                                    <th>თანხა</th>
                                    <th>რაოდ</th>

                                    <th>თანხა</th>
                                    <th>ბ/ს სსკ.</th>
                                    <th>საკ.</th>
                                    <th>რაოდ</th>
                                </tr>
                                </thead>
                            </table>
                        </div>

                        <div className="tb-toggle">
                            <div className="tb-toggle-head">
                                <i className="pi pi-minus"></i> Bank Name
                            </div>
                            <div className="tb-cont">
                                <table cellPadding="0" cellSpacing="0" border="0">
                                    <tbody>

                                    <tr>
                                        <td width="50%">1</td>
                                        <td width="100px">1</td>
                                        <td width="100px">1</td>
                                        <td width="100px">1</td>
                                        <td width="100px">1</td>
                                        <td width="100px">1</td>
                                        <td width="100px">1</td>
                                        <td width="120px">1</td>
                                    </tr>
                                    <tr>
                                        <td width="50%">1</td>
                                        <td width="100px">1</td>
                                        <td width="100px">1</td>
                                        <td width="100px">1</td>
                                        <td width="100px">1</td>
                                        <td width="100px">1</td>
                                        <td width="100px">1</td>
                                        <td width="120px">1</td>
                                    </tr><tr>
                                        <td width="50%">1</td>
                                        <td width="100px">1</td>
                                        <td width="100px">1</td>
                                        <td width="100px">1</td>
                                        <td width="100px">1</td>
                                        <td width="100px">1</td>
                                        <td width="100px">1</td>
                                        <td width="120px">1</td>
                                    </tr><tr>
                                        <td width="50%">1</td>
                                        <td width="100px">1</td>
                                        <td width="100px">1</td>
                                        <td width="100px">1</td>
                                        <td width="100px">1</td>
                                        <td width="100px">1</td>
                                        <td width="100px">1</td>
                                        <td width="120px">1</td>
                                    </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="tb-toggle">
                            <div className="tb-toggle-head">
                                <i className="pi pi-minus"></i> Bank Name
                            </div>
                            <div className="tb-cont">
                                <table cellPadding="0" cellSpacing="0" border="0">
                                    <tbody>

                                    <tr>
                                        <td width="50%">1</td>
                                        <td width="100px">1</td>
                                        <td width="100px">1</td>
                                        <td width="100px">1</td>
                                        <td width="100px">1</td>
                                        <td width="100px">1</td>
                                        <td width="100px">1</td>
                                        <td width="120px">1</td>
                                    </tr>
                                    <tr>
                                        <td width="50%">1</td>
                                        <td width="100px">1</td>
                                        <td width="100px">1</td>
                                        <td width="100px">1</td>
                                        <td width="100px">1</td>
                                        <td width="100px">1</td>
                                        <td width="100px">1</td>
                                        <td width="120px">1</td>
                                    </tr><tr>
                                        <td width="50%">1</td>
                                        <td width="100px">1</td>
                                        <td width="100px">1</td>
                                        <td width="100px">1</td>
                                        <td width="100px">1</td>
                                        <td width="100px">1</td>
                                        <td width="100px">1</td>
                                        <td width="120px">1</td>
                                    </tr><tr>
                                        <td width="50%">1</td>
                                        <td width="100px">1</td>
                                        <td width="100px">1</td>
                                        <td width="100px">1</td>
                                        <td width="100px">1</td>
                                        <td width="100px">1</td>
                                        <td width="100px">1</td>
                                        <td width="120px">1</td>
                                    </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="tb-toggle">
                            <div className="tb-toggle-head">
                                <i className="pi pi-minus"></i> Bank Name
                            </div>
                            <div className="tb-cont">
                                <table cellPadding="0" cellSpacing="0" border="0">
                                    <tbody>

                                    <tr>
                                        <td width="50%">1</td>
                                        <td width="100px">1</td>
                                        <td width="100px">1</td>
                                        <td width="100px">1</td>
                                        <td width="100px">1</td>
                                        <td width="100px">1</td>
                                        <td width="100px">1</td>
                                        <td width="120px">1</td>
                                    </tr>
                                    <tr>
                                        <td width="50%">1</td>
                                        <td width="100px">1</td>
                                        <td width="100px">1</td>
                                        <td width="100px">1</td>
                                        <td width="100px">1</td>
                                        <td width="100px">1</td>
                                        <td width="100px">1</td>
                                        <td width="120px">1</td>
                                    </tr><tr>
                                        <td width="50%">1</td>
                                        <td width="100px">1</td>
                                        <td width="100px">1</td>
                                        <td width="100px">1</td>
                                        <td width="100px">1</td>
                                        <td width="100px">1</td>
                                        <td width="100px">1</td>
                                        <td width="120px">1</td>
                                    </tr><tr>
                                        <td width="50%">1</td>
                                        <td width="100px">1</td>
                                        <td width="100px">1</td>
                                        <td width="100px">1</td>
                                        <td width="100px">1</td>
                                        <td width="100px">1</td>
                                        <td width="100px">1</td>
                                        <td width="120px">1</td>
                                    </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="tb-toggle">
                            <div className="tb-toggle-head">
                                <i className="pi pi-minus"></i> Bank Name
                            </div>
                            <div className="tb-cont">
                                <table cellPadding="0" cellSpacing="0" border="0">
                                    <tbody>

                                    <tr>
                                        <td width="50%">1</td>
                                        <td width="100px">1</td>
                                        <td width="100px">1</td>
                                        <td width="100px">1</td>
                                        <td width="100px">1</td>
                                        <td width="100px">1</td>
                                        <td width="100px">1</td>
                                        <td width="120px">1</td>
                                    </tr>
                                    <tr>
                                        <td width="50%">1</td>
                                        <td width="100px">1</td>
                                        <td width="100px">1</td>
                                        <td width="100px">1</td>
                                        <td width="100px">1</td>
                                        <td width="100px">1</td>
                                        <td width="100px">1</td>
                                        <td width="120px">1</td>
                                    </tr><tr>
                                        <td width="50%">1</td>
                                        <td width="100px">1</td>
                                        <td width="100px">1</td>
                                        <td width="100px">1</td>
                                        <td width="100px">1</td>
                                        <td width="100px">1</td>
                                        <td width="100px">1</td>
                                        <td width="120px">1</td>
                                    </tr><tr>
                                        <td width="50%">1</td>
                                        <td width="100px">1</td>
                                        <td width="100px">1</td>
                                        <td width="100px">1</td>
                                        <td width="100px">1</td>
                                        <td width="100px">1</td>
                                        <td width="100px">1</td>
                                        <td width="120px">1</td>
                                    </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>


                        <div className="tb-foot">
                            <table cellPadding="0" cellSpacing="0" border="0">
                                <tbody>
                                <tr>
                                    <td width="50%">1</td>
                                    <td width="100px">1</td>
                                    <td width="100px">1</td>
                                    <td width="100px">1</td>
                                    <td width="100px">1</td>
                                    <td width="100px">1</td>
                                    <td width="100px">1</td>
                                    <td width="120px">1</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                {/*<StatisticFilter setData={setData}/>
                <div className="flex-cont bg tr-grid" style={{flex:'1'}}>
                    <div className="p-grid">
                        <div className="p-col-10">
                            <DataTable value={[]} header="ტრანზაქციები"  className="p-datatable-gridlines">
                                <Column field="entryDate" header="ID"/>
                                <Column field="entryDate" header="დრო"/>
                                <Column field="entryDate" header="დასრულების დრო"/>
                                <Column field="entryDate" header="პინი"/>
                                <Column field="entryDate" header="Username"/>
                                <Column field="entryDate" header="მომხ.ჯგუფი"/>
                                <Column field="entryDate" header="ოპერატორი"/>
                                <Column field="entryDate" header="Tax"/>
                                <Column field="entryDate" header="იდენტიფიკატორი"/>
                                <Column field="entryDate" header="განმარტება"/>
                                <Column field="entryDate" header="თანხა"/>
                                <Column field="entryDate" header="ანგ"/>
                                <Column field="entryDate" header="მანამდე"/>
                                <Column field="entryDate" header="შემდეგ"/>
                                <Column field="entryDate" header="Desc"/>
                                <Column field="entryDate" header="სტატუსი"/>
                            </DataTable>
                        </div>
                        <div className="p-col-2">
                            <DataTable value={[]} header="მოქმედებები"  className="p-datatable-gridlines">
                                <Column field="oldValue" header="name"  body={(e)=><span style={{color:'red'}}>{e.oldValue}</span>}/>
                                <Column field="newValue" header="value" body={(e)=><span style={{color:'green'}}>{e.newValue}</span>}/>
                            </DataTable>
                        </div>
                    </div>
                </div>
                <div className="flex-cont bg tr-grid" style={{minHeight:'400px'}}>
                    <div className="p-grid">
                        <div className="p-col-2">
                            <DataTable value={[]} header="მომხმარებელის ინფორმაცია"  className="p-datatable-gridlines">
                                <Column field="entryDate" />
                                <Column field="item"/>
                            </DataTable>
                        </div>
                        <div className="p-col-5">
                            <DataTable value={[]} header="ტრანზაქციის ისტორია"  className="p-datatable-gridlines">
                                <Column field="entryDate" header="დასახელება"/>
                                <Column field="oldValue" header="ძველი მნიშვნელობა"  body={(e)=><span style={{color:'red'}}>{e.oldValue}</span>}/>
                                <Column field="newValue" header="ახალი მნიშვნელობა" body={(e)=><span style={{color:'green'}}>{e.newValue}</span>}/>
                            </DataTable>
                        </div>
                        <div className="p-col-5">
                            <DataTable value={[]} header="ტრანზაქციის დეტალები"  className="p-datatable-gridlines">
                                <Column field="oldValue" header="ID"  body={(e)=><span style={{color:'red'}}>{e.oldValue}</span>}/>
                                <Column field="newValue" header="Time" body={(e)=><span style={{color:'green'}}>{e.newValue}</span>}/>
                                <Column field="newValue" header="Host" body={(e)=><span style={{color:'green'}}>{e.newValue}</span>}/>
                                <Column field="newValue" header="Name" body={(e)=><span style={{color:'green'}}>{e.newValue}</span>}/>
                                <Column field="newValue" header="Result" body={(e)=><span style={{color:'green'}}>{e.newValue}</span>}/>
                            </DataTable>
                        </div>
                    </div>
                </div>*/}
            </div>
        </div>
    )
}
export default Statistics;
