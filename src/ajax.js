import React from 'react';

import axios from 'axios';

//const get: () => Promise<AxiosResponse<any>>

//const uri="http://rancher.exaact.co:9090/Rancher";
const uri="http://shamba.exaact.co:8084/HumanFinder"

const headerBeforeLogin = {
    'Accept': 'application/json',
    'Content-Type': 'application/json' 
};

     const  headerAfterLogin={
        'Accept': 'application/json',
        'Content-Type': 'application/json', 
        "Authorization":this.userToken,   
         };

     

const get= (requesturi,headpic) => {
    
    if(headpic){
        return  axios.get(uri+requesturi,{ headers:headerAfterLogin});
    }
    else {
        return  axios.get(uri+requesturi,{ headers:headerBeforeLogin});   
    }
}

const post = (requesturi,headpic,data) => {

    let payload=JSON.stringify(data)

  if(headpic){
        return  axios.post(uri+requesturi,payload,{ headers:headerAfterLogin});
    }
    else {
        return  axios.post(uri+requesturi,payload,{ headers:headerBeforeLogin});   
    }

}






    export {get, post}