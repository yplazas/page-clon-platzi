import { IoIosArrowForward } from "react-icons/io";

export const SectionHead = ({ title, enlace }) => {
    return (
        <div className="flex items-center gap-5">
            <h2 className="text-[22px] font-medium">{title}</h2>
            <a
                className="text-sm underline decoration-1 flex items-center gap-1 tracking-[-.008rem] leading-4 text-gray-300"
                href="#"
            >
                <span>{enlace}</span>{enlace ? <IoIosArrowForward /> : ""}
            </a>
        </div>
    )
}