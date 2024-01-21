import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
const Card=({elem,isActive,setIsActive})=>{
    let steps=[
        {
            title:"در حال آماده سازی",
            icon:"fa-solid fa-gear"
        },
        {
            title:"در حال ارسال",
            icon:"fa-solid fa-truck"
        },
        {
            title:"ارسال شده",
            icon:"fa-solid fa-check"
        }
    ]
    return (
        // xl:px-[14px]
        <>
                <div className={"xl:h-[140px] lg:h-[130px] md:h-[110px] sm:h-auto min-[320px]:h-auto flex md:justify-normal md:flex-nowrap sm:flex-wrap min-[320px]:flex-wrap min sm:justify-center xl:mt-6 lg:mt-5.5 md:mt-5 sm:mt-4 min-[320px]:mt-6"}>
                    <div className={"xl:w-[30%] lg:w-[35%] md:w-[30%] sm:w-[20%] min-[320px]:w-[45%] min-[320px]:h-[160px] bg-[#4A4B3C] flex justify-center items-center ml-4"}>
                        <img className={"block h-[70%] w-[70%]"} src={require("../images/infinityrn-4-road-running-shoes-mLRjcz 3.png")} alt="shoe"/>
                    </div>
                    <div className={"xl:ml-[70px] lg:ml-[15px] md:ml-0 lg:w-[30%] md:w-[30%] sm:w-[25%] min-[320px]:w-[45%] min-[320px]:h-[160px] flex flex-col justify-between"}>
                        <h3
                            style={{
                            fontFamily:"yekan-bakh"
                        }}
                            className={"mb-[8px] text-[#EF9E54]  lg:text-[14px] md:text-[12px] font-bold"}>{elem.title}</h3>
                        <div className={"flex items-center mb-[8px]"}>
                            <div className={`lg:h-[14px] lg:w-[14px] md:h-[12px] md:w-[12px] rounded-full ml-2 bg-red-400`}></div>
                            <h3
                                style={{
                                    fontFamily:"yekan-bakh"
                                }}
                                className={`text-[#7E8167] lg:text-[12px] sm:text-[14px] font-bold`}>{elem.colorTitle}</h3>
                        </div>
                        <div className={" xl:px-[6px] lg:px-[12px] md:px-[4px] py-[2px] lg:w-auto md:w-auto sm:w-auto"}>
                            <h1
                                style={{
                                    fontFamily:"yekan-bakh"
                                }}
                                className={"bg-[#432B15] xl:text-[12px] lg:text-[12px] sm:text-[10px] text-[#EF9E54] w-fit font-bold md:px-1 sm:px-2"}>خرید ارسالی به مشتری</h1>
                        </div>
                        <div className={"flex items-center mb-[18px] xl:mt-6 lg:mt-5 md:mt-4 sm:mt-3"}>
                        <FontAwesomeIcon icon="fa-solid fa-car" className="xl:ml-1 w-6 h-3 text-[#CCCEB4]" />
                            <h3
                                style={{
                                    fontFamily:"yekan-bakh"
                                }}
                                className={"text-[#CCCEB4] xl:text-[14px] lg:text-[12px] sm:text-[12px] font-bold"}>خرید سریع</h3>
                        </div>
                    </div>
                    <div className={"flex flex-col h-full md:grow sm:w-full min-[320px]:w-full sm:my-1 min-[320px]:mt-3 items-center"}>
                        <div className={"flex justify-between h-[22px] w-full xl:mb-[34px] lg:mb-[30px] md:mb-[28px] sm:mb-[32px] min-[320px]:mb-8"}>
                            <div>
                                <span className={"xl:ml-[34px] lg:ml-[30px] md:ml-[8px] sm:ml-3 text-[#7E8167] xl:text-[14px] lg:text-[12px] md:text-[10px] sm:text-[12px] min-[320px]:text-[14px]"}>کد پیگیری مرسوله:</span>
                                <span className={"text-[#CCCEB4] xl:text-[14px] md:text-[12px] sm:text-[12px] font-bold min-[320px]:text-[14px]"}>{elem.code}</span>
                            </div>
                            <div>
                                <span className={"xl:ml-[28px] lg:ml-[26px] md:ml-[8px] sm:ml-3 text-[#7E8167] xl:text-[14px] lg:text-[12px] md:text-[10px] sm:text-[12px] min-[320px]:text-[12px]"}>زمان ارسال:</span>
                                <span className={"text-[#CCCEB4] xl:text-[14px] md:text-[12px] sm:text-[12px] min-[320px]:text-[14px] font-bold"}>{elem.timing}</span>
                            </div>
                        </div>
                        <div className={"flex justify-end w-full h-[50px]"}>
                            {steps.map((step,stepIndex)=>{
                                return (
                                    <div key={stepIndex} className="xl:mr-[70px] lg:mr-[60px] md:mr-[45px] sm:mr-[50px] min-[320px]:mr-[40px]">
                                    <div className={"bg-[#2B2C23] rounded-full flex justify-center items-center xl:h-[50px] xl:w-[50px] lg:h-[45px] lg:w-[45px] md:h-[40px] md:w-[40px] sm:h-[50px] sm:w-[50px] min-[320px]:w-16 min-[320px]:h-16"}>
                                        <FontAwesomeIcon className={`text-6 ${elem.status>stepIndex?"text-[#EF9E54]":"text-[#CCCEB4]"}`}  icon={step.icon}/>
                                    </div>
                                    <p
                                        style={{
                                            fontFamily:"yekan-bakh"
                                        }}
                                        className={`xl:text-[14px] sm:text-[12px] font-bold xl:mt-[8px] lg:mt-[6px] sm:mt-[4px] min-[320px]:mt-1 text-center min-[320px]:text-[12px] ${elem.status>stepIndex?"text-[#EF9E54]":"text-[#CCCEB4]"}`}>{step.title}</p>
                                </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div className={"flex justify-between xl:w-full mt-[26px] sm:mt-[30px] min-[320px]:mt-[40px] mb-[10px] "}>
                    <div>
                        <FontAwesomeIcon icon={"fa-solid fa-tag"} className="xl:text-3.5 lg:text-3 md:text-2.5 min-[320px]:text-2.5 inline text-[#EF9E54]"/>
                        <span
                            style={{
                                fontFamily:"yekan-bakh"
                            }}
                            className={"text-[#EF9E54] xl:text-[14px] lg:text-[12px] md:text-[10px] sm:text-[12px] min-[320px]:text-[12px] font-bold lg:mr-[6px] md:mr-[4px] min-[320px]:mr-2"}>مشاهده فاکتور</span>
                    </div>
                    <div className="cursor-pointer" onClick={()=>setIsActive(!isActive)}>
                        <span
                            style={{
                                fontFamily:"yekan-bakh"
                            }}
                            className={"text-[#CCCEB4] xl:text-[14px] lg:text-[12px] md:text-[10px] sm:text-[12px] min-[320px]:text-[12px] lg:ml-[10px] md:ml-[8px] sm:ml-2 min-[320px]:ml-2 font-bold"}>مشاهده جزییات سفارش</span>
                            <FontAwesomeIcon icon={`fa-solid fa-chevron-${isActive?"up":"down"}`} className="inline xl:text-3.5 lg:text-3 md:text-2.5 min-[320px]:text-2.5 text-[#CCCEB4]"/>
                    </div>
                </div>
        </>
    )
}
export default Card