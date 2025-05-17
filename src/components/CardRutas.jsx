import { GiBorderedShield } from "react-icons/gi";
export const CardRutas = () => {
    return (
        <div className="flex items-center p-1 h-27 w-95">
            <div className="bg-gray-800 rounded-l-lg size-26 flex justify-center items-center">
                <GiBorderedShield className="size-10" />

            </div>
            <div className="p-4 bg-gray-700 rounded-r-lg flex flex-col gap-2.5 w-69">
                <span className="text-sm font-medium">HTML y CSS a profundidad</span>
                <div className="flex items-center gap-3">
                    <span className="text-xs">18 cursos</span>
                    <span className="text-xs text-gray-500">|</span>
                    <span className="text-xs">Ruta de plaksi</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="flex-1">
                        <div className="bg-teal-600 w-[50%] p-0.5 rounded-full"></div>
                    </div>
                    <span className="text-xs text-gray-300">5.16 de 43 horas</span>
                </div>

            </div>
        </div>
    )
}
