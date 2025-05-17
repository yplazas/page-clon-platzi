import { CardCursoFirst } from "./CardCursoFirst.jsx"
import { CardRutas } from "./CardRutas.jsx"
import { Escuela } from "./Escuela.jsx"
import { IoIosSend } from "react-icons/io";
import { SectionHead } from "./SectionHead.jsx";
import { CursoSection } from "./CursoSection.jsx";
import { IoLogoPython, IoLogoWordpress } from "react-icons/io5";
export const Main = () => {
  return (
    <main
      className="bg-gray-900 py-6 px-8 text-white fixed top-20 left-62.5 bottom-0 right-0 flex flex-col gap-12 overflow-y-auto scroll-custom"
    >
      <section className="flex flex-col gap-4">
        <SectionHead title="Yeison, continúa aprendiendo" enlace="Ir a mis cursos" />
        <div className="flex items-center gap-4 overflow-x-auto" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          <CardCursoFirst />
          <CardCursoFirst />
          <CardCursoFirst />
          <CardCursoFirst />
          <CardCursoFirst />
          <CardCursoFirst />
        </div>
      </section>
      <section className="p-5 flex flex-col gap-4 rounded-lg bg-linear-to-r from-gray-700 to-gray-800">
        <h3>¿Qué cursos quieres que plaksi cree para ti?</h3>
        <div className="relative w-full">
          <IoIosSend className="size-5 absolute right-0 m-5 cursor-pointer" />
          <input type="text" placeholder="Escribe el curso que quieres" className="w-full p-4 bg-gray-900 border-1 border-white/50 rounded-sm hover:border-teal-600 outline-none" />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <SectionHead title="Mis rutas" enlace="Ver todas" />
        <div className="flex items-center gap-3 overflow-x-auto" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          <CardRutas />
          <CardRutas />
          <CardRutas />
          <CardRutas />
          <CardRutas />
          <CardRutas />
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <SectionHead title="Descubre las escuelas" />
        <div className="flex items-center gap-5 overflow-x-auto" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          <Escuela />
          <Escuela />
          <Escuela />
          <Escuela />
          <Escuela />
          <Escuela />
          <Escuela />
          <Escuela />
          <Escuela />
          <Escuela />
          <Escuela />
          <Escuela />
          <Escuela />
          <Escuela />
          <Escuela />
          <Escuela />
          <Escuela />
          <Escuela />
          <Escuela />
          <Escuela />
        </div>
      </section>

      <section className="flex flex-col gap-5">
        <SectionHead title="Descubre lo que puedes aprender" />
        <CursoSection
          subtitle="Cursos recomendados para ti"
          imagenUrl="https://i.ytimg.com/vi/Kp4Mvapo5kc/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCiO_G4lE7_iNJJI8q-UjSE2KwtKQ"
          Icon={IoLogoPython} />
        <CursoSection
          subtitle="Últimos cursos lanzados"
          imagenUrl="https://i.ytimg.com/vi/145_QaxIy5I/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAk9KfURtEWafgPCHdkxnZyKh4htw"
          Icon={IoLogoWordpress} />
      </section>
    </main>
  )
}
