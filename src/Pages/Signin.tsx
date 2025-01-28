import { useRef } from "react";
import { Button } from "../component/ui/Button";
import { Input } from "../component/ui/Input";
import axios from "axios";
import { BACKEND_URL } from "../config";


export function Signin(){

    const usernameRef=useRef<any>()
    const passwordRef=useRef<any>()


    async function signin(){
        const username=usernameRef.current?.value
      const password=passwordRef.current?.value
      const response=await axios.post(`${BACKEND_URL}/api/v1/signin`,{
        username,
        password
      })
      const jwt=response.data.token
      localStorage.setItem("token",jwt)


    }
     return <div className="h-full w-full bg-green-100 flex justify-center items-center py-60">
        <div className="border bg-white rounded-lg  pr-4 pl-4 py-4 min-w-48">

            <Input refrence={usernameRef} placeholder="username"></Input>
            <Input refrence={passwordRef} placeholder="password"></Input>
            <div className="bg-blue-400 py-2 my-4 mx-7 text-black  flex items-center justify-center">
            <Button onClick={signin} varient={"primary"} text={"Signin"}></Button>
            </div>
            

        </div>


     </div>
}
