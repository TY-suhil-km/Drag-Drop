import React from 'react';
import '../../../style.css';

export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">

                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav mb-0" >
                            <span className="nav-item me-3"><i className="fas fa-arrow-circle-left fa-3x"></i></span>
                            <span className="nav-item">
                                <h5>Your automation pipeline</h5>
                                <p className="mb-0">Marketing automation</p>
                            </span>
                            <div className=" btn-group " id="centerelement">
                                <span className="btn border  ">Diagram view</span>
                                <span className="btn border ">Code editor</span>
                            </div>
                            <div className="btn border disabled" style={{ alignSelf: "center", marginLeft: "600px" }} id="rightElement"><span >Discard</span></div>
                            <div className="btn btn-primary ms-2" style={{ alignSelf: "center" }} id="rightElement"><span >Publish to site</span></div>
                          
                        </div>
                    </div>
                </div>
            </nav>

            

        </>


    )
}
