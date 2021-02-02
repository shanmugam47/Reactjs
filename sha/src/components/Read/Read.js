import React from 'react';
import  { useContext } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../UserContext/UserContext";
import { Link } from "react-router-dom";



const Read =()=>
{
    const[users,setUsers]=useContext(UserContext);
    const { id } = useParams();
    const user = users.filter((user) => user.id == id);

    return (
        <div  className="container py-4">
              <div className="container py-4">
      <Link className="btn btn-primary" to="/">
        back to Home
      </Link>
      <h1 className="display-4">User Id:{id}</h1>
     
          <ul className="list-group w-50">
        <li className="list-group-item">Name:{user[0].Name}</li>
        <li className="list-group-item">LastName:{user[0].LastName}</li>
        <li className="list-group-item"> Address:{user[0].Address}</li>
        <li className="list-group-item"> PhoneNumber:{user[0].PhoneNumber}</li>
       
          </ul>
    </div>
    </div>
  );

};
          
export default Read;