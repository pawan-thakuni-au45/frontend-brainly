import { Button } from "../component/ui/Button";
import { Input } from "../component/ui/Input";


export function Signup(){
     return <div className="h-full w-full bg-green-100 flex justify-center items-center py-60">
        <div className="border bg-white rounded-lg  pr-4 pl-4 py-4 min-w-48">

            <Input placeholder="username"></Input>
            <Input placeholder="password"></Input>
            <div className="bg-blue-400 py-2 my-4 mx-7 text-black  flex items-center justify-center">
            <Button varient={"primary"} text={"Signup"}></Button>
            </div>
            

        </div>


     </div>
}

