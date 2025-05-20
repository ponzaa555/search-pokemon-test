import { skill } from '@/schema/pokemon';
import Image from 'next/image';
import React from 'react';
import SkillComponent from './skillComponent';

type SkillProps = {
    resist : string[]
    weak : string[]
    fast : skill[] | null
    special : skill[] | null
}
const typeColors: Record<string, string> = {
    Fire: 'bg-orange-400 text-white',
    Flying: 'bg-cyan-400 text-white',
    Grass: 'bg-green-400 text-white',
    Water: 'bg-blue-400 text-white',
    Electric : 'bg-yellow-400 text-white',

    // Add more types as needed
  };
const Skill = ({fast , special , resist ,weak}:SkillProps) => {
    return (
        <div className=' bg-[#f7fce1] w-[600px] h-[380px] rounded-lg border-2 border-yellow-400 overflow-y-scroll'>
            <div className=' p-5'>
                {/* Attack */}
                <div className=' flex space-x-1'>
                    <h1 className=' text-2xl font-bold '>Attack</h1>
                    <Image src="/AttackIcon.png" alt='attackIcon' width={20} height={10}/>
                </div>
                {/* Resit and Weak */}
                <div className=' px-10 py-3 space-y-2'>
                    <div>
                        <div className=' flex bg-orange-400 w-fit p-1.5 rounded-lg'>
                            <h3 className=' font-bold'>Resistant</h3>
                            <Image src="/Shied.webp" alt='ResistantIcon' width={20} height={10}/>
                        </div>
                        <div className=' flex space-x-2 py-2'>
                            {resist?.map((item , index) => (
                                <div 
                                key={index}
                                className={`text-md px-3 py-1 rounded-md font-semibold ${
                                    typeColors[item] || 'bg-gray-300 text-black'
                                  }`}>
                                    <p>{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <div className=' flex bg-gray-400 w-fit p-1.5 rounded-lg'>
                            <h3 className=' font-bold'>Weaknesses</h3>
                            <Image src="/weakIcon.png" alt='WeakIcon' width={20} height={10} className=' rounded-full'/>
                        </div>
                        <div className=' flex space-x-2 py-2'>
                            {weak?.map((item , index) => (
                                <div 
                                key={index}
                                className={`text-md px-3 py-1 rounded-full font-semibold ${
                                    typeColors[item] || 'bg-gray-300 text-black'
                                  }`}>
                                    <p>{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <div className=' flex bg-red-600 w-fit p-1.5 rounded-lg'>
                            <h3 className=' font-bold mr-1'>Fast</h3>
                            <Image src="/FastIcon.png"  alt='FastIcon' width={20} height={10} className=' rounded-full'/>
                        </div>
                            <SkillComponent skills={fast}/>
                    </div>
                    <div>
                        <div className=' flex bg-green-400 w-fit p-1.5 rounded-lg'>
                            <h3 className=' font-bold mr-1'>Special</h3>
                            <Image src="/weakIcon.png" alt='WeakIcon' width={20} height={10} className=' rounded-full'/>
                        </div>
                            <SkillComponent skills={special}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skill;
