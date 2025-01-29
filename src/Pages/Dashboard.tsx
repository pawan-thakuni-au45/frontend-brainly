import { Button } from '../component/ui/Button'
// import './App.css'
// import './index.css'
import { PlusIcon } from '../icons/Plusicon'
import { ShareIcon } from '../icons/Shareicon'
import { CardItem } from '../component/ui/CardItem'
import { Createmodal } from '../component/ui/Createmodal'
import { useState } from 'react'
import { Sidebar } from '../component/ui/Sidebar'
import { useContent } from '../hooks/useContent'

export function Dashboard() {

  const[modelOpen,setModelOpen]=useState(false)
  const content=useContent()
  console.log(content);
  

  return (
   <>
    <div >
<Sidebar/>

    </div>
    <div className='ml-72 min-h-screen bg-gray-100 border-2 min-w-80'>
    
    <Createmodal open={modelOpen} onClose={()=>{
      setModelOpen(false)
    }}/>
    <div className='flex justify-end'>
    <Button onClick={()=>{
      setModelOpen(true)
    }}
    varient={"primary"}
    startIcon={<PlusIcon size={"md"}/>}
     

       title={"Add Content"} 
       size="md"
      
      ></Button>

<Button 
    varient={"secondary"}
    startIcon={<PlusIcon size={"lg"}/>}
     endIcon={<ShareIcon size={"lg"}/>}

       title={"share"} 
       size="lg"
      
      ></Button>
      </div>
      <div className='flex gap-4 flex-wrap bg-white'>
        
        {content.map(({type,link,title})=>  <CardItem 
         
        
        type={type}
        link={link}
        title={title}  
      />)}
    

  


  </div>
      

       
    </div>
    </>
  )
}


