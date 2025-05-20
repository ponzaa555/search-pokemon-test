import { skill } from "@/schema/pokemon"
import React from "react"

interface SkillComponentProps {
    skills : skill[] | null
}
const SkillComponent:React.FC<SkillComponentProps> = ({skills}) => {
    return (
        <div className=" grid grid-cols-2 space-x-2 mt-2">
            {skills?.map((skill ,index) => (
                <div key={index} className=" bg-gray-50 p-4 rounded-lg shadow-md mb-4
                     hover:scale-105 transition-transform duration-200">
                    <h3 className=" text-md font-bold">{skill.name}</h3>
                    <p className=" text-gray-600 text-xs">Type: {skill.type}</p>
                    <p className=" text-gray-600 text-xs">Damage: {skill.damage}</p>
                </div>
            ))}
        </div>
    )
}

export default SkillComponent