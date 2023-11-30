import React from 'react'
import { styles } from '../styles'
function Hero() {

  const profile = "./src/assets/projects/ceo.png"

  return (
    <div  className={`glass-effect mt-20 w-full md:max-w-7xl mx-auto h-[70vh]`}>

      <div className={`${styles.paddingX} w-full md:max-w-7xl mx-auto box bg-dark rounded-2xl shadow-2xl
       bg-opacity-90 flex flex-col md:flex-row justify-center md:justify-between items-center md:items-center`}>
               
               <div className='w-full md:max-w-1/2 h-full  flex flex-col px-2'>
<div className='mt-6'>
<h3 className='text-2xl text-neutral-500 font-mono'>Hello <span className='text-neutral-300'>I'm </span> <span className='text-white font-mono'> Kharis <span className='p-2 rounded-full glass-effect shadow-xl animate animate-ping'>👀</span></span></h3>
  <h1 className='text-6xl mt-2'>VISUAL DESIGNER</h1>
</div>
        <p className='w-full mt-6 text-sm md:text-xl text-neutral-500 tracking-tight leading-7'> And I know I can help your company create stunning visuals. As someone who has worked in marketing and graphic design for over a decade, I know what brands need to capture their audiences' attention. With my powerful design skills and knack for marketing, I have the right background for your brand's needs. </p>
       <div className='w-full mt-10 flex flex-col md:flex-row items-center justify-start gap-6'>
       <button className='w-full md:w-fit bg-priRed  text-lg text-red-100 font-black p-5 rounded-2xl uppercase'>About Me..</button>

       <button className='px-6 py-3 border-4 border-neutral-900 bg-darkest rounded-xl text-neutral-500/90 flex items-center justify-center'>
        <span className='p-2 rounded-2xl glass-effect shadow-xl'><i className='fa fa-phone text-xl text-priRed'></i></span>
        09065017306
       </button>
       </div>
        </div>
        <div className='w-full md:max-w-1/2'>
          <div className='w-full'>
          <img src={profile} className='w-full h-full object-cover object-center' alt="" />
          </div>
        </div>
      
      </div>
       
    </div>
  )
}

export default Hero