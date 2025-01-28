import { ReactElement } from "react";

interface Buttoninterface{
    title:String;
    size:"lg"|"md"|"sm";
    startIcon?:ReactElement,
    endIcon?:ReactElement,
    varient:"primary" | "secondary",
    text:string,
    onClick?:()=>void
   
}
const SizeStyle={
    "lg":"px-4 py-4 text-md bg-white-800 rounded-lg",
    "md":" text-md rounded-md",
    "sm":"px-2 py-1 text-sm rounded-sm"
}

const varientStyle={
    "primary":"bg-purple-400 text-white",
    "secondary":"bg-green-200 text-purple-600"
}

export function Button(props:Buttoninterface){
    return <button onClick={props.onClick} className={SizeStyle[props.size]+ " "+ varientStyle[props.varient]}>
        <div className="flex items-center">

        {props.startIcon}
        {props.text}
   
    {props.endIcon}
        </div>
       
    </button>
    

}
