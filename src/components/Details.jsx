import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
const Details=({elem,isActive})=>
{
    let [counter,setCounter]=useState(elem.packs)
    return (
        <div className={`bg-[#2B2C23] ${isActive?"block":"hidden"} w-full h-auto px-[36px] pt-[30px] mb-[40px]`}>
        <h4 className={"text-[#7E8167] lg:text-[16px] md:text-[14px] min-[320px]:text-[14px] font-bold mb-[8px]"}>سایزهای موجود</h4>
        <div>
            <div className={"flex justify-between sm:items-center h-[66px] mb-[26px]"}>
                <div className={"flex h-full w-auto sm:w-[50%] "}>
                    {elem.sizes.map((item,index)=>{
                        return (
                            <div key={index} className={"lg:w-[60px] lg:h-[66px] md:w-[50px] md:h-[54px] sm:w-[60px] sm:h-[60px] min-[320px]:w-[56px] min-[320px]:h-[56px] bg-[#4A4B3C] text-center pt-[8px] ml-[4px]"}>
                                <span className={"block text-center lg:text-[18px] md:text-[16px] sm:text-3 min-[320px]:text-[12px] font-bold text-[#CCCEB4]"}>{item.title}</span>
                                <div className={"flex justify-center flex-wrap mt-[4px]"}>
                                    {item.counts.map((record,recordIndex)=>{
                                        return (
                                            <FontAwesomeIcon key={recordIndex} icon="fa-solid fa-cube" className="inline m-[2px] lg:text-[10px] md:text-[8px] min-[320px]:text-[8px] text-[#EF9E54]" />
                                        )
                                    })}
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className={"flex flex-between item-center"}>
                    <div>
                        <span
                            style={{
                                fontFamily:"yekan-bakh"
                            }}
                            className={"lg:text-[16px] md:text-[14px] min-[320px]:text-[14px]  font-bold text-[#7E8167] leading-[40px]"}>تعداد بسته:</span>
                    </div>
                    <div className={"bg-[#393A30] flex flex-between h-10 sm:h-9 items-center mr-[26px] px-[6px] py-[4px]"}>
                    <FontAwesomeIcon icon="fa-solid fa-plus" onClick={()=>setCounter(counter=>counter+1)} className="block lg:text-[18px] md:text-[14px] min-[320px]:text-[12px] text-[#EF9E54]" />
                        <div className={"mx-[10px] h-[30px] w-[30px] rounded-full bg-[#2B2C23] text-center leading-[30px] text-[#CCCEB4] lg:text-[18px] min-[320px]:text-[14px]"}>
                            {counter}
                        </div>
                        <FontAwesomeIcon icon="fa-solid fa-minus" onClick={()=>setCounter(counter=>counter-1)} className="block lg:text-[18px] md:text-[14px] min-[320px]:text-[12px] text-[#EF9E54]" />
                    </div>
                </div>
            </div>
            <div className={"flex justify-between flex-wrap"}>
                {elem.data.map((dataRecord,dataRecordIndex)=>{
                    return (
                        <div key={dataRecordIndex}
                        style={{
                            fontFamily:"yekan-bakh"
                        }}
                        className={`flex justify-between ${dataRecordIndex+1==elem.data.length?"md:w-full sm:w-full":"md:w-[44%] sm:w-[48%]"} ${dataRecordIndex+1==elem.data.length?"md:w-full min-[320px]:w-full":"md:w-[48%] min-[320px]:w-[46%]"} mb-[16px]`}>
                        <p className={"text-[#7E8167] lg:text-[14px] min-[320px]:text-[12px]"}>{dataRecord.key}</p>
                        <p className={"text-[#CCCEB4] lg:text-[14px] min-[320px]:text-[12px] font-bold"}>{dataRecord.value}</p>
                    </div>
                    )
                })}
            </div>
        </div>
    </div>
    )
}
export default Details;