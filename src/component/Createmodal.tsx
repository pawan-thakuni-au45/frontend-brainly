import { Crossicon } from "../icons/Crossicon";
import { Button } from "./ui/Button";



export function Createmodal({open,onClose}){
    return <div>
        {open && <div className="w-full h-full bg-slate-400 fixed opacity-50 flex justify-center">
 <div className="flex flex-col justify-center">
            <span className="bg-white p-4">
  <div>
   <div onClick={onClose}>
   <Crossicon/>
   </div>
    
  </div>
  <div>

    <Input placeholder={"Title"}></Input>
    <Input placeholder={"Link"}></Input>

  </div>
  <div className="flex justify-center">
  <Button varient="primary" text="Submit"></Button>
  </div>

            </span>

          </div>

        </div>}

        </div>
    

}

function Input ({onChange,placeholder}:{onChange:()=>void}){
    return <div className="rounded-md">
        <input placeholder={placeholder} type={"text"} className="px-4 py-4 rounded-md border" onChange={onChange} ></input>
    </div>
}