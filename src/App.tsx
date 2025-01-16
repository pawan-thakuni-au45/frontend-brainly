import { Button } from './component/ui/Button'
import './App.css'
import './index.css'
import { PlusIcon } from './icons/Plusicon'
import { ShareIcon } from './icons/Shareicon'

function App() {
  

  return (
    <>
    <Button 
    varient={"primary"}
    startIcon={<PlusIcon size={"lg"}/>}
     endIcon={<ShareIcon size={"lg"}/>}

       title={"share"} 
       size="lg"
      
      ></Button>

<Button 
    varient={"secondary"}
    startIcon={<PlusIcon size={"lg"}/>}
     endIcon={<ShareIcon size={"lg"}/>}

       title={"share"} 
       size="lg"
      
      ></Button>

<Button 
    varient={"primary"}
    startIcon={<PlusIcon size={"sm"}/>}
     endIcon={<ShareIcon size={"sm"}/>}

       title={"share"} 
       size="sm"
      
      ></Button>

<Button 
    varient={"primary"}
    startIcon={<PlusIcon size={"md"}/>}
     endIcon={<ShareIcon size={"md"}/>}

       title={"share"} 
       size="md"
      
      ></Button>
      

       
    </>
  )
}

export default App
