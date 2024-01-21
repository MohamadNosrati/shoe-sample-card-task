import { Link } from "react-router-dom";
import Media from "./Media";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { useState } from "react";
const SIDEBAR_ITEMS = [
    {
        title: "پیشخوان",
        "icon":"fa-solid fa-square"
    },
    {
        title: "سفارش ها",
        "icon":"fa-solid fa-box"
    },
    {
        title: "لیست های من",
        "icon":"fa-solid fa-list"
    },
    {
        title: "دیدگاه ها",
        "icon":"fa-solid fa-message"
    },
    {
        "title":"آدرس ها",
        "icon":"fa-location-dot"
    },
    {
        "title":"حساب کاربری",
        "icon":"fa-solid fa-user"
    },
    {
        "title":"دعوت به همکاری",
        "icon":"fa-solid fa-hand"
    }
]

const Menu = () => {
    let [activeNav,setActiveNav]=useState(false)
    return (
        <div className={"xl:w-[20%] lg:w-[18%] md:w-[20%] sm:w-full md:h-[100%] md:min-h-[100vh] sm:h-[80px] relative xl:pr-[22px] lg:pr-[18px] md:pr-[16px] sm:p-0 bg-[#2B2C23] "}>
            <section className={"md:block w-full h-full md:sticky md:right-0 md:top-0 md:min-h-screen sm:flex sm:justify-around md:px-0 sm:items-center sm:h-ful"}>
                <div className={"h-[88px] flex justify-center items-center md:w-full sm:w-[20%]"}>
                    <img className={"md:block md:w-[60%]  xl:h-[46px] lg:w-[110px] lg:h-[40px] md:h-[36px] sm:w-full sm:h-9"} src={require("../images/Group 159.png")} alt="logo" />
                </div>
                <div className="md:hidden sm:block sm:w-[20%] sm:order-first">
                <FontAwesomeIcon onClick={()=>setActiveNav(!activeNav)} icon="fa-solid fa-bars" className="text-[#7E8167] text-5" />
                </div>
                <nav className={"xl:mt-[42px] lg:mt-[40px] md:mt-[26px] md:mb-[150px] sm:order-2"}>
                    <ul className={`md:block ${activeNav?"sm:absolute sm:w-full sm:h-[534px] sm:top-full sm:left-0 sm:pr-[26px] sm:bg-[#2B2C23] ":"sm:hidden"}`}>
                        {
                            SIDEBAR_ITEMS.map(i => (
                                <li key={i.title} className={"xl:px-[20px] lg:px-[16px] md:px-[12px] flex h-[50px] items-center lg:text-[14px] md:text-[12px] sm:text-3 font-bold text-[#7E8167] group border-[#EF9E54] border-solid lg:hover:border-l-[6px] md:hover:border-l-1 sm:hover:border-l-4"}>
                                    <FontAwesomeIcon className="text-[#7E8167] lg:ml-2 md:ml-1.5 sm:ml-2 group-hover:text-[#EF9E54]" icon={i.icon}/>
                                    <Link
                                        className={"block group-hover:text-[#EF9E54]"}>{i.title}</Link>
                                </li>)
                            )
                        }

                    </ul>
                </nav>
                <Media />
            </section>
        </div>
    )
}
export default Menu;
