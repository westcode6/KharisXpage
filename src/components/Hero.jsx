import React from 'react'
import { styles } from '../styles'
import { kharis} from '../constants'
function Hero() {

  const profile = kharis

  return (
    <div  className={`glass-effect rounded-2xl overflow-hidden mt-20 md:mt-24 shadow-2xl w-full md:max-w-7xl mx-auto h-[122vh] md:max-h-[80vh]`}>

      <div className={`${styles.paddingX} w-full md:max-w-7xl mx-auto box  rounded-2xl shadow-2xl
       glass-effect flex flex-col md:flex-row justify-center md:justify-between items-center`}>
               
         <div className='glass-effect w-full rounded-2xl  md:max-w-1/2 h-full shadow-2xl pb-6 text-left sm:text-left px-2'>
          <div className='glass-effect shadow-2xl'>
          <div className='glass-effect shadow-2xl'>
<div className='mt-6'>


<div className="wrapper h-10 flex items-center">
<h3 className='text-2xl text-gray-gradient font-mono'>Hello <span className='font-mono'>I'm </span> </h3>
	<svg className='svg'>
		<text x="50%" y="50%" dy=".35em" textAnchor="middle">
			Charis
		</text>
	</svg>
  <span className='p-2 rounded-full glass-effect shadow-xl animate animate-ping'>👀</span>
</div>
  <h1 className='text-4xl sm:text-5xl mt-2'>VISUAL DESIGNER</h1>
</div>
        <p className='w-full mt-6 text-sm md:text-xl text-neutral-500 tracking-tight leading-7'> And I know I can help your company create stunning visuals. As someone who has worked in marketing and graphic design for over a decade, I know what brands need to capture their audiences' attention. With my powerful design skills and knack for marketing, I have the right background for your brand's needs. </p>
       <div className='w-full mt-10 flex flex-col md:flex-row items-center justify-start gap-6'>
       <button className='w-full md:w-fit bg-priRed  text-base text-red-200 font-bold p-4 rounded-tr-2xl rounded-bl-2xl uppercase'>About Me..</button>

       <button className='w-full md:w-fit bg-darker flex items-center justify-center gap-2 text-lg sm:text-xl text-neutral-500 font-semibold p-4 rounded-tr-2xl rounded-bl-2xl uppercase'>

       <span className='w-8 h-8 flex items-center justify-center mr-1   rounded-2xl bg-neutral-800 shadow-2xl shadow-red-500'><i className='fa fa-phone text-2xl text-priRed'></i></span>
        09065017306
       </button>

       </div>
        </div>

          </div>
         </div>


        <div className='w-full md:max-w-1/2'>
          <img src={profile} className='w-full h-full object-contain' alt="profile" />
        </div>
      
      </div>
       
    </div>
  )
}

export default Hero