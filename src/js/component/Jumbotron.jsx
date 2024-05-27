import React from "react";
import CallToAction from "./CallToAction";

const Jumbotron = () => {
    return (
        <div className="alert alert-secondary p-5 mt-3 m-3" role="alert">
            <h1>A Warm Welcome</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto, corporis minima exercitationem dolores ut enim suscipit explicabo praesentium esse porro ullam harum eveniet necessitatibus id, deserunt ipsam accusamus saepe ab.</p>
            <CallToAction />
        </div>
    )
}

export default Jumbotron;