import { Logo } from "../../icons/Logo";
import { Twitter } from "../../icons/Twitter";
import { Sidebaritem } from "./Sidebaritem";


export function Sidebar(){

    return <div className="height-full border bg-white w-72 fixed position-absolute left-0 top-0">

       <div className="pl-5 font-bold flex py-3 ">
        <Logo/>
        <div className="pl-2 text-emerald-600"> Brainly</div>
       
       </div>
        <div className=" transition-all font-bold">

        <Sidebaritem  icon={<Twitter/>} text={"twitter"}></Sidebaritem>
        <Sidebaritem  icon={<Twitter/>} text={"twitter"}></Sidebaritem>

        </div>

    </div>
  
}