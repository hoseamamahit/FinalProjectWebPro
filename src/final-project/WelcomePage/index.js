import React from 'react';
import {useHistory} from "react-router-dom";

const WelcomePage = () => {

    let history = useHistory();

    const GoToLogin = () => {
        history.push("/LoginPage");
    }

    const GoToRegister = () => {
        history.push("/RegisterPage");
    }

    return (
        <div >
            <div className="p-5 mb-9 bg-info text-white">
                <br/><br/><br/><h1 className="text-center fw-bold">Hello Directioners</h1><br/>
                <h1 className="text-center fw-bold">ONE DIRECTION ARMY</h1><br/>
                <div className="card">
                    <div className="card-body">
                        <div className="card-text text-center text-dark ">
                        <h3 className="fw-lighter">This Website Aims to Make it Easier for You to Give a List of Which Countries Will be Visited Directly by ONE DIRECTION for their concerts</h3>
                        </div>
                    </div>
                </div> <br/><br/>
                <div className="d-grid gap-5 col-6 mx-auto">
                    <button 
                        className="btn btn-primary"
                        onClick={GoToLogin}>
                        Login
                    </button>
                    <button 
                        className="btn btn-primary"
                        onClick={GoToRegister}>
                        Register
                    </button>
                </div>
            </div>
        </div>
    )
}

export default WelcomePage;
