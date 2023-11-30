import React from 'react'
import { styles } from '../styles'
function Hero() {
  return (
    <div  className={`glass-effect w-full md:max-w-7xl mx-auto h-[70vh]`}>

      <div className={`${styles.paddingX} w-full md:max-w-7xl mx-auto box bg-black rounded-2xl shadow-2xl
       bg-opacity-90 flex flex-col md:flex-row justify-center md:justify-between items-center md:items-center`}>
               
               <div className='w-full md:max-w-1/2 h-full flex flex-col px-2'>
<div className='mt-6'>
<h3 className='text-2xl text-red-400 font-mono'>Hello I'm Kharis</h3>
  <h1 className='text-6xl mt-2'>VISUAL DESIGNER</h1>
</div>
        <p className='w-full mt-4 text-sm md:text-base text-neutral-400 leading-7'> And I know I can help your company create stunning visuals. As someone who has worked in marketing and graphic design for over a decade, I know what brands need to capture their audiences' attention. With my powerful design skills and knack for marketing, I have the right background for your brand's needs. </p>
       <div className='w-full mt-10'>
       <button className='w-full md:w-fit bg-red-500 text-white font-bold px-6 py-4 rounded-sm'>About Me..</button>
       </div>
        </div>
        <div className='w-full md:max-w-1/2'>
          <div className='w-full'>
          <img src="./src/assets/projects/ceo.png" className='w-full h-full object-cover object-center' alt="" />
          </div>
        </div>
      
      </div>
       
    </div>
  )
}

export default Hero