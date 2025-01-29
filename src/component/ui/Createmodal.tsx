import { useRef, useState } from "react";
import { Crossicon } from "../../icons/Crossicon";
import { Button } from "./Button";
import { Twitter } from "../../icons/Twitter";
import axios from "axios";
import { BACKEND_URL } from "../../config";
import { Input } from "./Input";


enum ContentType {
  Youtube="youtube",
  Twitter="twitter"
}



export function Createmodal({open,onClose}){
  const titleRef=useRef<HTMLInputElement>()
  const linkRef=useRef<HTMLInputElement>()
  const [type,setType]=useState(ContentType.Youtube)

  async function addContent(){

    const title=titleRef.current?.value
const link=linkRef.current?.value

await axios.post(`${BACKEND_URL}/api/v1/content`,{
  title,
  link,
  
  type
},{
  headers:{
    "Authorization":localStorage.getItem("token")
  }
}) }
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
  <h1>Type</h1>
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

