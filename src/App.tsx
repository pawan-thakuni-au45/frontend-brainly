import { Button } from './component/ui/Button'
import './App.css'
import './index.css'
import { PlusIcon } from './icons/Plusicon'
import { ShareIcon } from './icons/Shareicon'
import { CardItem } from './component/CardItem'
import { Createmodal } from './component/Createmodal'
import { useState } from 'react'

function App() {

  const[modelOpen,setModelOpen]=useState(true)
  

  return (
    < >
    <Createmodal open={modelOpen} onClose={()=>{
      setModelOpen(false)
    }}/>
    <div className='flex justify-end'>
    <Button onClick={()=>{
      setModelOpen(true)
    }}
    varient={"primary"}
    startIcon={<PlusIcon size={"lg"}/>}
     

       title={"Add Content"} 
       size="lg"
      
      ></Button>

<Button 
    varient={"secondary"}
    startIcon={<PlusIcon size={"lg"}/>}
     endIcon={<ShareIcon size={"lg"}/>}

       title={"share"} 
       size="lg"
      
      ></Button>
      </div>
      <div className='flex gap-4'>
      <CardItem 
        type="twitter" link="https://x.com/elonmusk/status/1880040599761596689" title="first twitte"
      />

  <CardItem type="youtube" link="https://www.youtube.com/watch?v=eGtF-zkeo9s" title="first video"></CardItem>


  </div>
      

       
    </>
  )
}

export default App
