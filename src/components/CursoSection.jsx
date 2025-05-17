import { SiSemanticuireact } from "react-icons/si";
import { CardCursoTwo } from "./CardCursoTwo";
export const CursoSection = ({ subtitle, imagenUrl, Icon }) => {
    return (
        <div className="flex flex-col gap-4">
            <h3 className="text-lg">{subtitle}</h3>
            <div className="flex items-center gap-4 overflow-x-auto" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                <CardCursoTwo imagenUrl={imagenUrl} Icon={Icon} />
                <CardCursoTwo imagenUrl={imagenUrl} Icon={Icon} />
                <CardCursoTwo imagenUrl={imagenUrl} Icon={Icon} />
                <CardCursoTwo imagenUrl={imagenUrl} Icon={Icon} />
                <CardCursoTwo imagenUrl={imagenUrl} Icon={Icon} />
                <CardCursoTwo imagenUrl={imagenUrl} Icon={Icon} />
                <CardCursoTwo imagenUrl={imagenUrl} Icon={Icon} />       
            </div>
        </div>
    )
}
