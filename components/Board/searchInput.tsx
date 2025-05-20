"use client"
import React, { ChangeEvent, useEffect, useState } from 'react';
import qs from "query-string"
import {  useDebounceValue } from "usehooks-ts"
import { Search } from 'lucide-react';
import { Input } from '../ui/input';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
const SearchInput = () => {
    const route = useRouter()
    const [value , setValue ] = useState("")
    const [debounceValue] = useDebounceValue(value,500);

    const handleChange = (e : ChangeEvent<HTMLInputElement>) =>{
        setValue(e.target.value);
    }
    useEffect(() =>{
        // generate url
        const url = qs.stringifyUrl({
            url:"/",
            query:{
                Pokemonname :debounceValue
            }
        },{skipEmptyString:true , skipNull : true});
        route.push(url);
    },[debounceValue , route])
    return (
        <div className='w-full flex items-center justify-center mt-4'>
            <div className=' relative flex w-[400px]'>
            <Image src={value === "" ? "/pokeballSearch.png" : "/PokeballOpen.png"} alt='Search'
                width={40} height={40} className='mr-2'/>
            <Search className='absolute top-3/7 left-14 transform -translate-y-1/2 
                 text-muted-foreground h-4 w-4'/>
             <Input
                className=" w-full max-w-[510px] pl-9"
                placeholder="SearchBoard"
                onChange={handleChange}
                value={value}
                />
            </div>
        </div>
    );
}

export default SearchInput;
