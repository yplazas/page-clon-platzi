import { IoHome, IoFolderOpen, IoBarChartSharp, IoDocument, IoChatbubbleEllipses, IoNotifications, IoSendSharp, IoSchool } from "react-icons/io5";


export const SideBar = () => {


  
  return (
    <nav className="bg-gray-950 text-white p-4 fixed top-0 left-0 h-screen w-62.5 flex flex-col">
      <div className="flex items-center gap-2 pb-8">
        <IoSchool className="size-12"/>
        <p className="text-xl font-bold">Plaksi</p>
      </div>

      <section className="flex flex-col justify-between flex-1">
        <ul className="flex flex-col gap-8 p-4">
          <div className="flex gap-2 items-center">
            <IoHome />
            <li>Home</li>
          </div>
          <div className="flex gap-2 items-center">
            <IoFolderOpen />
            <li>Mis rutas</li>
          </div>
          <div className="flex gap-2 items-center">
            <IoBarChartSharp />
            <li>Mi progreso</li>
          </div>
          <div className="flex gap-2 items-center">
            <IoDocument />
            <li>Mis certificados</li>
          </div>
          <div className="flex gap-2 items-center">
            <IoChatbubbleEllipses />
            <li>Chat Ada</li>
          </div>
          <div className="flex gap-2 items-center">
            <IoNotifications />
            <li>Notificaciones</li>
          </div>
        </ul>

        <div className="flex flex-col gap-5 p-4">
          <div className="flex flex-col gap-5 p-4 bg-linear-to-r from-gray-900 to-gray-800 rounded-lg">
            <p>Hay empresas que le pagan plaksi a sus empleados 👀</p>
            <a>Descubre más</a>
          </div>
          <div className="flex gap-2 items-center">
            <IoSendSharp />
            <a>Cuéntanos tu opinión</a>
          </div>
        </div>
      </section>
    </nav>
  )
}
