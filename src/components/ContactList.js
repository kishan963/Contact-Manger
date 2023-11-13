import React from "react";
import ContactCard from "./ContactCard";
import { Outlet, Link } from "react-router-dom";


const ContactList = (props) => {
    console.log(props.Contacts);

    const renderContactList = props.Contacts.map((Contact)=>{
           return (
             <ContactCard Contact={Contact} deleteContact={props.deleteContact} ></ContactCard>
           );   
    } );

    return (
        <div className="ui celled list">{renderContactList}
         
         <Link to="/add"><button className="ui button blue"  >Add Contact</button></Link>
        </div>
  
    );
};
export default ContactList;