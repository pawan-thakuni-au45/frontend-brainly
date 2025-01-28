import { useRef, useState } from "react";
import { Crossicon } from "../../icons/Crossicon";
import { Button } from "./Button";
import { Twitter } from "../../icons/Twitter";


enum ContentType {
  Youtube="youtube",
  Twitter="twitter"
}



export function Createmodal({open,onClose}){
  const titleRef=useRef<any>()
  const linkRef=useRef<any>()
  const [type,setType]=useState(ContentType.Youtube)

  function addContent(){

    const title=titleRef.current.value
const link=linkRef.current.value
  }
    return <div>
        {open && <div className="w-full h-full bg-slate-400 fixed opacity-50 flex justify-center">
 <div className="flex flex-col justify-center hover:cursor-pointer">
            <span className="bg-white p-4">
  <div>
   <div onClick={onClose}>
   <Crossicon/>
   
   </div>
    
  </div>
  <div>

    <Input refrence={titleRef} placeholder={"Title"}></Input>
    <Input refrence={linkRef} placeholder={"Link"}></Input>

  </div>
  <div className=" py-4 flex gap-2">
    <div>
    <Button className="gap-x-3" text="Youtube" varient={type===ContentType.Youtube ? "primary":"secondary"} onClick={()=>{
      setType(ContentType.Youtube)
    }}> </Button>
   </div>
   <div>
    <Button text="Twitter" varient={type===ContentType.Twitter ? "primary":"secondary"} onClick={()=>{
      setType(ContentType.Twitter)
    }}> </Button></div>

  </div>
  <div className="flex justify-center">
  <Button onClick={addContent} varient="primary" text="Submit"></Button>
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