import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";

const Header=()=>{
    return (
        <header className={"h-[90px] border-b-[1px] border-b-[#2B2C23] flex justify-between align-center"}>
            <div className={"h-full flex items-center md:w-[50%]"}>
            <FontAwesomeIcon icon="fa-solid fa-diamond-turn-right" className="lg:text-4 md:text-3 xl:ml-2 md:ml-1.5 sm:ml-2 block text-[#7E8167]" />
                <Link className={"font-bold lg:text-[14px] md:text-[12px] md: w-full text-[#7E8167] leading-[12px]"}>بازگشت به صفحه اصلی</Link>
            </div>
            <div className={"h-full flex justify-end items-center md:w-[50%]"}>
                <div className={"w-11 h-11 rounded-full xl:ml-2 md:ml-1.5 sm:ml-2 flex justify-center items-center bg-[#2B2C23]"}>
                <FontAwesomeIcon icon="fa-solid fa-user" className="text-[22px] block text-[#CCCEB4]" />
                </div>
                <div className="flex flex-col justify-center items-center">
                    <h3 className={"text-[#EF9E54] lg:text-[14px] md:text-[12px] font-bold w-full leading-4"}>متین نوروزپور</h3>
                    <p className={"mt-1.5 text-[14px] font-normal text-[#7E8167] text-end  w-full"}>matin@gmail.com</p>
                </div>
                <div>
                <FontAwesomeIcon className="text-[#7E8167] lg:text-[16px] md:text-[14px] xl:mr-[52px] lg:mr-[40px] sm:mr-[34px]" icon="fa-solid fa-chevron-down"/>
                </div>
            </div>
        </header>
    )
}
export default Header;