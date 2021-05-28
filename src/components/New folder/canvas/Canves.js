import React, { useState } from 'react'
import '../../../style.css';
import Slidemenu from '../sliding/Slidemenu'
import Nodes from './Nodes';


export default function Canves({ triggers, loggers, action, setNodeObject, nodeObject }) {
    const [slidingMenu, setslidingMenu] = useState(false);
    

    return (
        <>
            <div id="canvas" >
                {
                    // slidingMenu ? <Slidemenu setslidingMenu={setslidingMenu} setNodeObject={setNodeObject} /> : <></>,
                    // console.log(slidingMenu),
                    slidingMenu ? console.log("hello true"):console.log("hello false"),
                    slidingMenu ?  <></>:<Slidemenu setslidingMenu={setslidingMenu} setNodeObject={setNodeObject} />

                }
                <Nodes nodes={nodeObject} triggers={triggers} loggers={loggers} action={action} setNodeObject={setNodeObject} setslidingMenu={setslidingMenu}  />
            </div>

        </>
    )
}
