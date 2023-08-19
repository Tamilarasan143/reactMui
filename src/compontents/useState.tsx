import React, { useState } from 'react'

interface colorType{
  colors:string
}

export default function StateLearn() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const[color,setColor]=useState<Array<colorType>>([]);
  
 for(let f=0;f<10;f++){
  color.push({colors: `diff ${f}`})
 }

 console.log('color', color)
  return (
    <>
    <div>my frv color is{color.map((colors,index)=>(<div key={index}>{colors.colors}</div>))}</div>
    {/* <div><Button onClick={handleClick} >change</Button></div> */}
    </>
  )
}
