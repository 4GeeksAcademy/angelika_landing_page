import React from "react";

const CardBtn = () => {
    const contentBtn = "Find Out More!";
    return (
        <div className="card alert alert-secondary mb-0 p-0">
            <div className="card-body d-flex justify-content-center">
                <a href="#" className="btn btn-primary">{contentBtn}</a>
            </div>
        </div>
    )
}

export default CardBtn;