import { ReactElement } from "react";

interface Buttoninterface{
    title:String;
    size:"lg"|"md"|"sm";
    startIcon?:ReactElement,
    endIcon?:ReactElement,
    varient:"primary" | "secondary"
}
const SizeStyle={
    "lg":"px-8 py-4 text-xl bg-white-800 rounded-lg",
    "md":"px-4 py-2 text-md rounded-md",
    "sm":"px-2 py-1 text-sm rounded-sm"
}

const varientStyle={
    "primary":"bg-purple-600 text-white",
    "secondary":"bg-purple-400 text-purple-600"
}

export function Button(props:Buttoninterface){
    return <button className={SizeStyle[props.size]+ " "+ varientStyle[props.varient]}>
        <div className="flex items-center">

        {props.startIcon}
        {props.title}
   
    {props.endIcon}
        </div>
       
    </button>
    

}
