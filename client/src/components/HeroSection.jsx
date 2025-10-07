import React, { use } from 'react'
import { assets } from '../assets/assets'
import { CalendarIcon, ClockIcon, ArrowRight} from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const HeroSection = () => {

    const navigateTo = useNavigate();

  return (
    <div className='flex flex-col items-start justify-center gap-4 px-6 md:px-16 lg:px-36 bg-[url("/backgroundImage.png")] bg-cover bg-center h-screen pt-16'>
      <img src={assets.marvelLogo} alt='Marvel Logo' className='max-h-11 lg:h-11'/>
      
      <h1 className='text-5xl md:text-[70px] md:leading-[80px] font-semibold max-w-md text-white'>
        Guardians <br/> of the Galaxy
      </h1>

      <div className='flex items-center gap-4 text-gray-300'>
        <span>Action | Adventure | Sci-Fi</span>
        <div className='flex items-center gap-1'>
          <CalendarIcon className='w-4 h-4'/>2018
        </div>
        <div className='flex items-center gap-1'>
          <ClockIcon className='w-4 h-4'/>2h 8m
        </div>
        <button onClick={()=> navigateTo('/movies')} className='flex items-center gap-1 px-6 py-3 text-sm bg-primary hover:bg-primary-dull transition rounded-full font-medium cursor-pointer'>
            Explore Movies
            <ArrowRight className='w-5 h-5'/>
        </button>
      </div>
    </div>
  )
}

export default HeroSection