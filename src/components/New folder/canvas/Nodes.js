import React from 'react';
import ReactFlow, { Background, addEdge } from 'react-flow-renderer';
import Nodecreater from './Nodecreater';
import '../../../style.css'
const style = {
    width: '100%',
    height:'100%',
    position: "fixed",
    top: 100,
    left: 400,
    background:"#1a192b"
};


export default ({ triggers, loggers, action, nodes, setNodeObject, setslidingMenu, elements, setelements }) => {

    const dropContent = (e) => {
        let title = e.dataTransfer.getData("id");
        let block;
        block = triggers.filter((ele) => {
            if (title === ele.title) {
                return ele;
            }
        });
        if (block.length < 1) {
            block = loggers.filter((ele) => {
                if (title === ele.title) {
                    return ele;
                }
            });
        }
        if (block.length < 1) {
            block = action.filter((ele, index) => {
                if (title === ele.title) {
                    return ele;
                }
            });
        }
       
        setNodeObject(nodeObject => [...nodeObject, {
            id: nodeObject.length.toString(),
            
            data: { label: <Nodecreater node={block[0]} setslidingMenu={setslidingMenu}/> },
            position: { x: 250, y: 25 },
            className:"  nodewidth w-25 ps-5 pt-5 border-danger",
            style: ""

        }])

    }

    
    const onConnect = (params) => setNodeObject((els) => addEdge(params, els));
    return (
        <div className=" bg-light">
            {
                <ReactFlow onDragOver={(e) => { e.preventDefault() }} onDrop={dropContent}
                    elements={nodes} style={style} 
                    onConnect={onConnect}>
                    {/* <Background 
                        variant="dots"
                        gap={16}
                        size={1}
                    /> */}
                </ReactFlow>
            }

        </div>
    )
}
