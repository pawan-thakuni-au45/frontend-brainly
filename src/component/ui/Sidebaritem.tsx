import { ReactElement } from "react"

  export function Sidebaritem({icon,text}:{
    icon:ReactElement,
    text:string
  }){

    return <div className="flex" >
         {icon}{text}

    </div>
  }