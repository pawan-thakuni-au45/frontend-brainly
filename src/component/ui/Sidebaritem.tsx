import { ReactElement } from "react"

  export function Sidebaritem({icon,text}:{
    icon:ReactElement,
    text:string
  }){

    return <div className="flex text-gray-700 py-2 cursor-pointer  hover:bg-gray-200 max-w-48 pl-4" >

      <div className="pr-4">
      {icon}
      </div>
         
         
         {text}

    </div>
  }