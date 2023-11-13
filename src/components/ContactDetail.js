import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ContactDetail = ()=>{ 
    const location = useLocation();
    const navigate= useNavigate();
     
    const ClickHandler=()=> {
         navigate("/");
    }

    return (
         <div className="main" >
            <div className="ui card centered">
                <div className="image" >
             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1mmTwt_1_S54kdjC8pPl1Nj7-AhqMx4-63XwNOsY&s"></img>
             </div>
                <div className="content">

                    <div className="header">{location.state.Contact.name}</div>
                    <div className="description">{location.state.Contact.email}</div>
                   
                     
                </div>
                <button className="ui button blue" onClick={ClickHandler} >Back to Contact List</button>
            </div>
        </div> 
    );
};

export default ContactDetail;