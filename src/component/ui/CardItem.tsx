import { Deleteicon } from "../../icons/Deleteicon";
import { Noteicon } from "../../icons/Noteicon";
import { ShareIcon } from "../../icons/Shareicon";


interface cardProps {
  title:string,
  link:string,
  type:"youtube" | "twitter"
}

   export function CardItem({title,link,type}:cardProps){
    
    function deletepost(){
      
    }
return (
<div className="rounded-md bg-slate-10 border max-w-72 min-w-72 min-h-16">
  <div className="justify-between flex items-center">
    <div className="flex py-4 ">
        <div className="pr-3">
        <Noteicon></Noteicon>

        </div>
       
        {title}

    </div>
    <div className="flex">
        <div className="pr-3">
        <Deleteicon onClick={deletepost}></Deleteicon>

        </div>
        <a href={link} target="_blank"></a>
        
        <Deleteicon></Deleteicon>


   </div>


  </div>

      <div className="PY-3">
         
         {type==="youtube" &&  <iframe className="w-md h-md"  
        src={link.replace("watch","embed").replace("?v=","/")}   title="YouTube video player" 
      frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>} 

{/* src={link.replace("watch","embed").replace("?v=","/")}  */}
{/* src={link.replace("watch","embed").replace("?v=","/")}  */}
    
{type==="twitter" && <blockquote className="twitter-tweet">

    <a href={link.replace("x.com","twitter.com")}></a>   
</blockquote> }

      </div>


</div>
)
   } 