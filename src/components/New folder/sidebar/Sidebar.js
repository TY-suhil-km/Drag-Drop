import React, { useState } from 'react'
import '../../../style.css'
import Triggers from './Triggers';
import Action from './Action';
import Logger from './Logger'


export default function Sidebar({triggers, loggers, action}) {
    const [displayBlock, setdisplayBlock] = useState("Triggers")
    const onTrigger = ()=>{
        setdisplayBlock("Triggers");
        document.getElementById("triggers").classList.add("border-info");
        document.getElementById("actions").classList.remove("border-info");
        document.getElementById("loggers").classList.remove("border-info");
    }

    const onAction = ()=>{
        setdisplayBlock("Action");
        document.getElementById("triggers").classList.remove("border-info");
        document.getElementById("actions").classList.add("border-info");
        document.getElementById("loggers").classList.remove("border-info");
    }

    const onLoggers = ()=>{
        setdisplayBlock("Triggers");
        document.getElementById("triggers").classList.remove("border-info");
        document.getElementById("actions").classList.remove("border-info");
        document.getElementById("loggers").classList.add("border-info");
    }

    return (
        <>
            <div id="leftcard" >
                <p id="header">Blocks</p>

                <div className="input-group mb-3" id="search">
                    <span className="input-group-text" id="basic-addon1"><i className="fas fa-search" /></span>
                    <input type="text" className="form-control" placeholder="Search blocks" aria-label="Username" aria-describedby="basic-addon1" />
                </div>
                <div id="subnav">
                    <div id="triggers" className="btn d-inline-block me-2 border-info"  onClick={ onTrigger }>Triggers</div>
                    <div id="actions" className="btn d-inline-block me-2" onClick={onAction }>Actions</div>
                    <div id="loggers" className="btn d-inline-block me-2" onClick={onLoggers}>Loggers</div>
                </div>
                {
                   displayBlock === "Triggers" ? <Triggers triggers={triggers}/>:displayBlock === "Action" ?<Action action={action}/> : <Logger loggers={loggers}/>

                }
              <span >
                    GitHub · Twitter · Made by Suhil
             </span>
            </div>
        </>

    )
}


