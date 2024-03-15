'use client'

import Link from "next/link";

import goNextSection from "@/hooks/goNextSection";

type TProps = {
  link: any,
  label: string,
  event?: (param: boolean) => void,
}


const ItemMenu = ({link, label, event}: TProps) => {

  const handleClick = (key: string) => { 
    goNextSection(key)
  }
  
      
  if(!event){
    return (
      <>
        <li
          className=""
        >
          <button
            onClick={() => handleClick(link)}
            className="hover:text-orange-mrbarber-400 transition-all duration-300 py-1 px-2 font-semibold"
          >{label}</button>
        </li>
      </>
    )
  } else {
    return (
      <>
        <li
          className=""
          onClick={() => event(false)}
        >
          <button
            onClick={() => handleClick(link)}
            className="hover:text-orange-mrbarber-400 transition-all duration-300 py-1 px-2 font-semibold"
          >{label}</button>
        </li>
      </>
    )
  }
}

export default ItemMenu
