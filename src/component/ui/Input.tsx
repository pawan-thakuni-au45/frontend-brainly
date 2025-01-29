import { Button } from "./Button"

// interface inputProps{
//     placeholder:string,
//     refrence:any
// }

export function Input ({placeholder,refrence}:{placeholder:string,refrence?:any}){
    return <div className="rounded-md">
        <input ref={refrence} placeholder={placeholder} type={"text"} className="px-4 py-4 rounded-md border"  ></input>
    </div>
}