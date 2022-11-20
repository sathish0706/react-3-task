import { useState } from "react";
import { Link } from "react-router-dom";

function Pages () {
    return<>
    
    <div id="collapsePages" className="collapse show" aria-labelledby="headingPages"
            data-parent="#accordionSidebar">
            <div className="bg-white py-2 collapse-inner rounded">
                <h6 className="collapse-header">Login Screens:</h6>
                <Link className="collapse-item active" to={'/login'}>Login</Link>
                <Link className="collapse-item active" to={'register'} >Register</Link>
                <Link className="collapse-item active" to={'forgot-password'}>Forgot Password</Link>
                <div className="collapse-divider"></div>
                <h6 className="collapse-header">Other Pages:</h6>
                <Link className="collapse-item active" to={'/*'}>404 Page</Link>
                <Link className="collapse-item active" to={'blank'}>Blank Page</Link>
            </div>
        </div>
       
    
    </>
}
export default Pages;