import React  from "react";
import { Link } from "react-router-dom";

export default function Simplelinks({ title , link}){
    return(
        <div className="">
            <Link to={link} className={`hover:text-btnColors-Mailblue  hover:scale-[1.02] cursor-pointer transition-all durition-300  ${title === 'Client Area' ? "text-btnColors-Mailblue" : "text-textsColor-texts"} text-nameSize font-bold`}>
                {title}
            </Link>
        </div>
    )
}