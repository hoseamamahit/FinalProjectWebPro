import React from 'react';
import {useHistory} from "react-router-dom";

const Menu = () => {

    let history = useHistory();

    return (
        <div className="p-5 bg-light">
            <h3 className="text-center mt-5">Hello, What Are You Looking For?</h3>
            <button 
                className="btn btn-primary d-grid gap-5 col-4 mx-auto mt-5"
                onClick={()=> history.push("/List")}>
                Your Requested Concert City
            </button><br/><br/>
            <button 
                className="btn btn-primary d-grid gap-5 col-4 mx-auto mt-3"
                onClick={()=> history.push("/Request")}>
                Place To Input Your Request
            </button><br/><br/>
            <button 
                className="btn btn-primary d-grid gap-5 col-4 mx-auto mt-3"
                onClick={()=> history.push("/AboutUs")}>
                About Us
            </button><br/><br/><br/><br/>
            <h4 className="text-end mt-5">
                <button 
                    className="btn btn-danger"
                    onClick={()=> history.push("/")}>
                    = EXIT =
                </button>
            </h4>

        </div>
    )
}

export default Menu;
