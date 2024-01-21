import Menu from "../../components/Menu";
import AllShoes from "../../components/AllShoes";
import {useEffect, useState} from "react";
const Shoes=()=>{
    return (
        <div className="w-full h-auto md:flex items-stretch">
            <Menu/>
            <AllShoes/>
        </div>
    )
}
export default Shoes;