
export const CardCursoTwo = ({ imagenUrl, Icon }) => {
    return (
        <div className="w-72 group">
            <div className="overflow-hidden rounded-t-lg">
                <img
                    className="rounded-t-lg w-full overflow-hidden group-hover:scale-110 transition-transform duration-300"
                    alt="imagen"
                    src={imagenUrl}
                />
            </div>
            <div className="w-full bg-gray-700 flex items-center gap-4 p-4 rounded-b-lg group-hover:bg-gray-600 transition-colors duration-300">
                <Icon className="size-10" />
                <div className="overflow-hidden relative">
                    <h3 className="truncate font-medium" title="Curso de Python desde cero">Curso de Python desde cero</h3>
                    <p className="text-sm">Por MoureDev</p>
                </div>

            </div>
        </div>
    )
}
