import { GiBrokenShield } from "react-icons/gi";

export const Escuela = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-1">
            <div className="rounded-full p-2 bg-teal-600/50 flex justify-center items-center">
                <GiBrokenShield className="size-7" />

            </div>
            <p className="text-xs text-center">Desarrollo web</p>
        </div>
    )
}
