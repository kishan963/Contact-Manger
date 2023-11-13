import React, { useState } from "react";
import {v4} from "uuid"
import { Outlet, Link, withRouter, useNavigate } from "react-router-dom";


const AddContact = (props) => {
    
    const navigate= useNavigate();
    const [contact, setContact] = useState({
        id: 0,
        name: '',
        email: ''
      });

    const add = (e) => {
        //setContact((contact) => ({ ...contact, id: v4() }));
        e.preventDefault();
        if(contact.name === "" && contact.email === "" )
        {
            alert("All the fields are mandatory");
            return;
        }

        props.AddContactHandler(contact);
         navigate("/");
      
    }


    
        return (
            <div className="ui man">
                <h2>Add Contact</h2>
                <form className="ui form" onSubmit={add}>
                    <div className="field">
                        <label>Name</label>
                        <input value={contact.name} type="text" name="name" placeholder="Name" onChange={(e) => setContact({...contact,[e.target.name]: e.target.value,id: v4()})}/>

                    </div>
                    <div className="field">
                        <label>Email</label>
                        <input value={contact.email} type="text" name="email" placeholder="Email" onChange={(e) => setContact({...contact,[e.target.name]: e.target.value}) }  />

                    </div>
                    <div>
                    <button className="ui button blue" >Add</button>
                    </div>
                </form>
            </div>
        );
    
}
export default  AddContact;