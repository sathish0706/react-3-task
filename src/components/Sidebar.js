import React from "react";
import Pages from "./pages";
import { useState } from "react";
import Components from "./component"
import Utilities from "./Utilities";
import Table from "./Table";
import { useNavigate,Link } from "react-router-dom";


function Sidebar () {
  const [page, setPage] = useState(false);
  const [component, setComponent] = useState(false)
  const [utilities, setUtilities] = useState(false)
    return(
        
        
<div id="wrapper">

<ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

    <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
        <div className="sidebar-brand-icon rotate-n-15">
            <i className="fas fa-laugh-wink"></i>
        </div>
        <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
    </a>

    <hr className="sidebar-divider my-0"/>

    <li className="nav-item">
        <Link className="nav-link" to={'/dashboard'}>
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard</span></Link>
    </li>

   
    <hr className="sidebar-divider"/>

   
    <div className="sidebar-heading">
        Interface
    </div>

    <li className="nav-item">
        <a onClick={() => setComponent(!component)} className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo"
            aria-expanded="true" aria-controls="collapseTwo">
            <i className="fas fa-fw fa-cog"></i>
            <span>Components</span>
        </a>
       { component ? <Components />: ""}
    </li>

    <li className="nav-item">
        <a onClick={() => setUtilities(!utilities)} className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities"
            aria-expanded="true" aria-controls="collapseUtilities">
            <i className="fas fa-fw fa-wrench"></i>
            <span>Utilities</span>
        </a>
        {utilities?<Utilities />:""}
        
    </li>

    <hr className="sidebar-divider"/>

    <div className="sidebar-heading">
        Addons
    </div>
    
    <li className="nav-item active">
        <a onClick={() => setPage(!page)} className="nav-link" href="#" data-toggle="collapse" data-target="#collapsePages" aria-expanded="true"
            aria-controls="collapsePages">
            <i className="fas fa-fw fa-folder"></i>
            <span >Pages</span>
        </a>
        {page?<Pages/>:""}
    </li>

    <li className="nav-item">
        <Link className="nav-link" to={'/charts'}>
            <i className="fas fa-fw fa-chart-area"></i>
            <span>Charts</span></Link>
    </li>

    <li className="nav-item">
        <Link className="nav-link" to={'/table'}>
            <i className="fas fa-fw fa-table"></i>
            <span>Tables</span></Link>
    </li>

    <hr className="sidebar-divider d-none d-md-block"/>

    <div className="text-center d-none d-md-inline">
        <button className="rounded-circle border-0" id="sidebarToggle"></button>
    </div>

</ul>
</div>
    
       
    )
}
export default Sidebar;