import React, { useState } from "react";

const FormText = () => {

    const [state, setState ]= useState();

    return (

        <div>
             <input value={state}  type="text" name="Text" onChange={(e)=> setState(e.target.value) } />
        </div>

    );

}

export default FormText;