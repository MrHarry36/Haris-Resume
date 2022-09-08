import React from "react";

export default function Work1(props){
    return(
        <div className={`${props.Portfolio.color} rounded-2xl mx-2`}>
            <div className="overflow-hidden mx-10">
            <img src={props.Portfolio.pic}
            className="px-10 py-8 rounded hover:scale-110 duration-100 " 
            />
            </div>
            <p className="px-12 text-gray-500">{props.Portfolio.para}</p>
            <p className="px-12 font-bold text-2xl">{props.Portfolio.h1}</p>

        </div>
    )
}