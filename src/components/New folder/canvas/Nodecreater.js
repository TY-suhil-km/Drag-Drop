import React, {useState} from 'react'

export default function Nodecreater({node, setslidingMenu}) {
    const [nodes, setnodes] = useState(node);

    return (
        <div key={nodes.title} onDragStart={(e) => { e.dataTransfer.setData("id", nodes.title) }} style={{ height: "200px" }}>
        <div className="shadow   bg-white rounded" style={{ width: "380px", height: "180px" }}>
            <span className=" h3 text-info float-left ms-4 mt-4"  ><i className={node.icon} /></span>
            <span  style={{ width: "200px" }}>
                {/* <span className="fw-bold h4 " >{nodes.title}</span> */}
                <input type="text" className="fw-bold  " id="title-id" value={nodes.title} onChange={(e)=>{setnodes(nodes=>[nodes.title= e.target.value])}}/>
                <button style={{ border: "none", background: "white" }} className="h5 float-right me-4 mt-3" onClick={() => { setslidingMenu(true) }}><i className="fas fa-ellipsis-h "></i></button>
                <div className="border-top border-2 ms-5 " style={{width:"23em"}} >
                    <span className="text-dark fs-5 ">{node.desc} </span>
                </div>
            </span>
        </div>
    </div>
    )
}
