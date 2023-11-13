import React from "react";
import { Outlet, Link, withRouter, useNavigate } from "react-router-dom";

const CardContact = (props)=>{ 
    const {id, name, email} = props.Contact
    const navigate= useNavigate();
    const ClickHandler= ()=>{
        navigate("/ContactDetail" , {state:{Contact: props.Contact }} )
    }

    return (
         <div className="item" >
             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1mmTwt_1_S54kdjC8pPl1Nj7-AhqMx4-63XwNOsY&s" height={40}></img>
                <div className="content" onClick={ClickHandler}>
                    
                    <div className="header">{name}</div>
                    <div>{email}</div>

                     
                </div>
                  <i className="trash alternate outline icon"
                   onClick={() => props.deleteContact(id)}
                  ></i>
                
        </div> 
    );
};

export default CardContact;