import React from 'react'

import './Form.css'

function Form()
{
    // return(<Form>
    //     <label>Enter email: </label>
    //     <input type='text'></input>

    //     <label>Enter first name: </label>
    //     <input type='text'></input>

    //     <label>Enter last name: </label>
    //     <input type='text'></input>

    // </Form>);

    return (<div class='container'>
        <form>
             <label >Enter email: </label>
            <input type='text'></input>
            <br></br>
            <label>Enter first name: </label>
           <input type='text'></input>
           <br></br>
             <label>Enter last name: </label>
             <input type='text'></input><br></br>
            <button type='submit'>Submit</button>
         </form>
    </div>);
}


export default Form;