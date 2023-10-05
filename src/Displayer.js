import { useState } from 'react'
import { CustomButtons } from './CustomButtons'

export function Displayer(){
   
    const[counter,setCounter]= useState(0);

    function handleClick(){
        setCounter(count=>count+1)
    }
   
   return <div className='flex flex-col items-center space-y-5'>
            <span>Button has been clicked: {counter} times</span>
            <CustomButtons handleClick={handleClick} />
        </div>
}