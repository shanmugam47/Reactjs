import React from "react";
import  { useState } from "react";
import {createContext} from "react";


export const UserContext=createContext();

export const UserProvider =(props)=>
{
    const[users,setUsers]=useState([
        {id:1,Name:"shanmugam",LastName:" MN",PhoneNumber:"8688837649", Address:"2/117,kovil street"},
        {id:2,Name:"VenkataRamana",LastName:" S.A" , PhoneNumber:"7798837649",Address:"2/14,beri street"},
        {id:3,Name:"Sam Ebinazer",LastName:" S.K" , PhoneNumber:"8765837649",Address:"8/17,Gandhi street"},
        {id:4,Name:" Ebinazer",  LastName:" S.S"  , PhoneNumber:"8000837649",Address: "7/17,Rich street"},
        {id:5,Name:"Siva",       LastName:" S.O"   ,   PhoneNumber:"8658837649",Address:"6/17,mount street"},
        {id:6,Name:"kumar",     LastName:" S.I" ,   PhoneNumber:"6643837649",Address:"2/17,cheap street"},
        {id:7,Name:"Rmana" ,   LastName:" S.F" ,    PhoneNumber:"8985637649",Address:"5/17,best street"},
        {id:8,Name:"Sekar",    LastName:" S.E" ,    PhoneNumber:"7687837649",Address:"9/17,target street"},
        {id:9,Name:"vijay",     LastName:" o.D" ,    PhoneNumber:"7697837649",Address:"4/17,values street"},
        {id:10,Name:"Ajith",   LastName:" y.R" ,    PhoneNumber:"6788637649",Address:"9s/17,pain street"},
      
    ]);
    return(
        <UserContext.Provider value={[users, setUsers]}>
            {props.children}
        </UserContext.Provider>
    );
};

