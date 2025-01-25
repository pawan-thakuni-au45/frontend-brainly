import { Button } from "./Button"

export function Input ({onChange,placeholder}:{placeholder:String;onChange:()=>void}){
    return <div className="rounded-md">
        <input placeholder={placeholder} type={"text"} className="px-4 py-4 rounded-md border" onChange={onChange} ></input>
    </div>
}