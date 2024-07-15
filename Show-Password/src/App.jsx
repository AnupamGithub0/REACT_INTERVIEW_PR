import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import './App.css'
import { useState } from 'react';

function App() {
  const [visibility,setvisibility] = useState(false)

  const handleVisible = ()=>{
    setvisibility((prev)=>!prev)
  }
 

  return (
    <div className='h-screen flex items-center justify-center'>
      <div className='relative'>
        <input type={visibility ? ("text"):("password")} className='p-2 outline-0 border-2 bg-gray-500 text-white w-[400px]' placeholder='Write your password' />
        <button onClick={handleVisible} className='absolute top-2 right-1 cursor-pointer'>
         {
          visibility ? (<VisibilityIcon/>) : (<VisibilityOffIcon/>)
         }

        </button>
      </div>
    </div>
  )
}

export default App
