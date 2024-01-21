import Header from "./Header";
import SingleShoe from "./SingleShoe";
import {useEffect,useState} from "react";

const AllShoes=()=>{
    let [orders,setOrders]=useState([])
    let fetchOrders=async ()=>{
        try {
            let data=await fetch("http://localhost:8000/orders")
            let res=await data.json()
            console.log(res)
            setOrders(res)
        }catch (err){
            console.log(err.message)
        }
    }
    useEffect(()=>{
        fetchOrders().catch((err)=>console.log(err))
    },[])
    return (
        <div className={"bg-[#393A30] xl:w-[80%] lg:w-[82%] md:w-[80%] xl:px-[50px] lg:px-[45px] md:px-[20px] sm:px-[18px] min-[320px]:px-[16px]"}>
            <Header/>
            {orders && orders.map((elem)=>{
                return (
                    <SingleShoe key={elem.id} elem={elem}/>
                )
            })}
        </div>
    )
}
export default AllShoes;