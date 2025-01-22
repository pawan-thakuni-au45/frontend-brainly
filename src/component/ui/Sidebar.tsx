import { Twitter } from "../../icons/Twitter";
import { Sidebaritem } from "./Sidebaritem";


export function Sidebar(){

    return <div className="height-full border bg-white w-72 fixed position-absolute left-0 top-0">
        <div className="py-9 transition-all">
        <Sidebaritem  icon={<Twitter/>} text={"twitter"}></Sidebaritem>
        </div>

    </div>
  
}