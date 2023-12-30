import React from 'react'
import { styles } from '../styles'
import { kharis} from '../constants'
import { d0 } from '../assets/projects'
function Hero() {

  const profile = kharis

  return (
<>   


    <div  className={`rounded-2xl overflow-hidden mt-20 md:mt-24 shadow w-full md:max-w-7xl mx-auto  md:max-h-[80vh]`}>
      <div className={`${styles.paddingX} bg-black bg-opacity-50 w-full md:max-w-7xl mx-auto box  rounded-2xl shadow-2xl
       glass-effect flex flex-col md:flex-row justify-center md:justify-between items-center`}>
               
         <div className=' w-full rounded-2xl  md:max-w-1/2 h-full pb-6 text-left sm:text-left px-2'>
          <div className=''>
          <div className=''>
<div className=''>

<div className="w-full text-center sm:text-left">
<div className='flex justify-center sm:justify-start'>
<h3 className='text-xl  branded'>Hello <span className='font-mono'>I'm </span> Charis </h3>
	<svg className='svg hidden'>
		<text x="25%" y="50%" dy=".35em" textAnchor="middle">
			Charis
		</text>
	</svg>
  <span className='p-2 rounded-full glass-effect shadow-xl animate animate-bounce'>👀</span>
</div>
  <h1 className='text-5xl sm:text-5xl mt-2'>VISUAL DESIGNER</h1>
</div>

</div>
        <p className='w-full md:max-w-lg  mt-6 text-xs text-center sm:text-left md:text-lg text-neutral-500 tracking-tight leading-7'> And I know I can help your company create stunning visuals. As someone who has worked in marketing and graphic design for over a decade, I know what brands need to capture their audiences' attention. With my powerful design skills and knack for marketing, I have the right background for your brand's needs. </p>
       <div className='w-full mt-10 flex flex-col md:flex-row items-center justify-start gap-6'>
       <button className='w-full md:w-fit bg-amber-500  text-base text-neutral-800 font-bold px-6 sm:px-12 py-4 rounded-tr-2xl rounded-bl-2xl uppercase'>About Me..</button>

       <button className='w-full md:w-fit bg-darker flex items-center justify-center gap-2 text-base sm:text-lg text-neutral-500 font-normal px-6 sm:px-12 rounded-tr-2xl rounded-bl-2xl uppercase'>

       <span className='w-8 h-8 flex items-center justify-center mr-1   rounded-2xl bg-amber-500 shadow-2xl shadow-red-500'><i className='fa fa-phone text-2xl text-neutral-800'></i></span>
        09065017306
       </button>

       </div>
        </div>

          </div>
         </div>


        <div className='w-full md:max-w-1/2 mx-auto hero-banner-img rounded-xl shadow'>
          <div className='w-full h-[300px] bg-black  bg-opacity-80'>
          <img src={d0} className='w-full h-full object-contain' alt="profile" />
          </div>
        </div>
      
      </div>

    </div>
</>

  )
}

export default Hero