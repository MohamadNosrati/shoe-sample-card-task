import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
const Media=()=>{
    let medias=[
        {
            name:"fa-brands fa-instagram",
        },
        {
            name:"fa-brands fa-telegram"
        },
        {
            name:"fa-brands fa-twitter"
        },
        {
            name:"fa-brands fa-whatsapp"
        }
    ]
    return(
        <div className={"md:w-full sm:w-[20%] flex md:justify-center sm:justify-end"}>
            {medias.map((elem)=>{
                return (
                    <div className={"xl:ml-[14px] p-[6px] bg-[#393A30]"}>
                    <FontAwesomeIcon className="text-[#CCCEB4]" icon={elem.name} />
                    </div>
                )
            })}
        </div>
    )
}
export default Media;