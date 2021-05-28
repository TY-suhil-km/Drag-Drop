import React from 'react'
export default function Logger({ loggers }) {
    return (
        <div>

            <div className="border-top pt-3 create-flowy">

                {
                    loggers.map((ele, index) => {
                        return (
                            <div className="box" key={ele.title} draggable onDragStart={(e) => { e.dataTransfer.setData("id", ele.title) }}>
                                <div className="shadow p-3 mb-5 bg-white rounded me-2">
                                    <i className="fas fa-ellipsis-v fa-md me-4"></i>
                                    <span className="h4"><i className={ele.icon}></i></span>
                                    <span className="d-inline-block" style={{ width: "200px" }}>
                                        <dt className="fw-bold" >{ele.title}</dt>
                                        <dd className="text-dark">{ele.desc} </dd>
                                    </span>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}
