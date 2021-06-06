export const Config ={
   Config:{
       Currency:"/us/v1/api/secured/currencyList",
       VerifyStatusList:"/us/v1/api/secured/verifyStatusList",
       CountryList:"/us/v1/api/secured/countryList",
       UList: "/user/getList",
       RegUserUrl: "/user/save",
       SearchUser: "/user/getFiltered",
       WithdrawalList:"/withdrawals/getList",
       editUser:'/user/save',
   },
    Withdraw: {
        GetList:"/withdrawals/getList",
        SearchUrl:"/user/searchUserByPersonalId",
        add:"/withdrawals/add",
        transSearch:'/withdrawals/getByUserId'
    }

}
