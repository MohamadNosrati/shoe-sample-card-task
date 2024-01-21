import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {useState} from "react";
import Details from "./Details";
import Card from "./Card";

const SingleShoe=({elem})=>{
    let [isActive,setIsActive]=useState(false)
    return (
        <>
            <div className={"lg:py-2.5 md:py-2"}>
                <Card elem={elem} isActive={isActive} setIsActive={setIsActive}/>
                <Details elem={elem} isActive={isActive} setIsActive={setIsActive}/>
                <div className={"h-[1px] bg-[#2B2C23]"}></div>
            </div>
        </>
    )
}
export default SingleShoe;