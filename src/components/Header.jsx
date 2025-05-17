import { IoSearchSharp, IoRocket, IoLanguage, IoPersonCircleSharp } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";

export const Header = () => {
  return (
    <header className="bg-gray-950 p-4 text-white fixed left-62.5 h-20 right-0 flex items-center justify-end gap-5">
      <div className="relative w-xl mx-auto">
        <IoSearchSharp className="absolute top-0 m-2" />
        <input type="search" name="" id="" className="border-1 border-white/20 rounded-sm w-full bg-gray-900 px-3 py-1 pl-8 hover:border-teal-600 outline-none" placeholder="¿Que quieres aprender?" />
      </div>

      <div className="flex items-center gap-7">
        <div className="flex gap-2 items-center">
          <IoRocket className="size-7" />
          <p className="text-sm">2</p>
        </div>

        <div className="flex gap-3 items-center border-r-1 border-r-white">
          <p>Planes</p>
          <IoPersonCircleSharp className="size-6" />
          <p className="text-xs">4.897 <span className="text-gray-300">pts</span></p>
          <IoIosArrowDown className="size-6 mr-5"/>
        </div>

        <div>
          <IoLanguage className="size-6.5 text-gray-300" />
        </div>
      </div>
    </header>
  )
}
