import { SiSemanticuireact } from "react-icons/si";
export const CardCursoFirst = () => {
    return (
        <div className="w-72 group">
            <div className="overflow-hidden rounded-t-lg">
                <img
                    className="rounded-t-lg w-full overflow-hidden group-hover:scale-110 transition-transform duration-300"
                    alt="imagen"
                    src="https://i.ytimg.com/vi/NZIDCoO6ySE/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCdPjjpEP0gbLYu38H1Qc3S_Bnv6g"
                />
            </div>
            <div className="w-full bg-gray-700 flex items-center gap-4 p-4 rounded-b-lg group-hover:bg-gray-600 transition-colors duration-300">
                <SiSemanticuireact className="size-10" />
                <div className="overflow-hidden relative">
                    <p className="text-sm">Clase 16 de 16</p>
                    <h3 className="truncate font-medium" title="Issues a resolver para completar la prueba">Issues a resolver para completar la prueba</h3>
                </div>

            </div>
        </div>
    )
}
