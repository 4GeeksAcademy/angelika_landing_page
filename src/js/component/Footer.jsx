import React from "react";

const Footer = () => {
    const txFooter ="Copyright © Your Webside 2024"
    return(
        <div className="container-fluid bg-dark d-flex justify-content-center p-3 mt-3">
            <p className="text-light m-0">{txFooter}</p>
        </div>
    )
}

export default Footer;