import React from 'react'
import '../../../style.css'
export default function Slidemenu(props) {
    return (
        <div>
            <div id="mySidenav" className="sidenav px-4">
                <p className="text-light h4  ms-3">
                    Properties
                </p>
                <div className="h5 text-light mt-5 pb-2  border-bottom ">
                    <span className="mx-3">Data</span>
                    <span className="mx-3">Alerts</span>
                    <span className="mx-3 ">Logs</span>
                </div>
                <div className="text-light" id="subsidebar">
                    <p className="float-left ">Select Database</p>
                </div>
                <p className="closebtn" onClick={() => { props.setslidingMenu(false) }}>&times;</p>
                <div className="btn btn-info w-75 float-bottom" onClick={() => { props.setNodeObject([]) }}>Delete</div>
            </div>
        </div>
    )
}