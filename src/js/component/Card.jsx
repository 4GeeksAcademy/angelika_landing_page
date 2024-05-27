import React from "react";
import CardBtn from "./CardBtn";

const Card = () => {
    const imgUrl = "https://www.pinturas.es/themes/pinturas/assets/img/office/our-office-8.jpg";
    const txCard = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda nemo est similique odit facere eius ullam fugiat dignissimos!";
    const titleCard = "Card title";
    return(
        <div className="card" style={{width: '18rem'}}>
            <img src={imgUrl} className="card-img-top" alt="..."/>
            <div className="card-body m-0 p-0">
                <h5 className="card-title text-center p-3 pb-0">{titleCard}</h5>
                <p className="card-text text-center p-3">{txCard}</p>
                <CardBtn />
            </div>
        </div>
    )
}

export default Card;