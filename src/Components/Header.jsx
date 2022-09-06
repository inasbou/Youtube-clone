import React from 'react'
import {AiOutlineMenu} from'react-icons/ai'
import {BsSearch} from 'react-icons/bs'
import  {FiMoreVertical} from 'react-icons/fi'
import {MdKeyboardVoice}  from 'react-icons/md'
import SideBar from './SideBar'

const Header = () => {
  return (
    <div className=' flex '>

          <SideBar/>
          <div className='flex'>
          <img src='../../Images/youtube.jpg'   className=' px-6 h-16 w-40' />
          <div className='mt-2'>
          <input  placeholder='Search' className=' h-9  w-96 border-2 ml-8 border-stone-300 '/>
          <button  className=' bg-stone-300  px-2 h-9 w-9 '> <BsSearch/></button>
          <button  className=' p-4 mx-8 rounded-full bg-stone-200'> <MdKeyboardVoice/> </button>
          <button  className=' p-4 mx-8 justify-end '><FiMoreVertical /></button>
         </div>
        </div>
       
    </div>
  )
}
export default Header
/**
          <img src='../../Images/youtube.jpg'   className=' px-6 h-16 w-40' />
          <div className='mt-2'>
         <input  placeholder='Search' className=' h-9 w-80 border-2 ml-8 border-stone-300 '/>
         <button  className=' bg-stone-300  px-2 h-9 w-9 '> <BsSearch/></button>
          <button  className=' p-4 rounded-full bg-stone-200'> <MdKeyboardVoice/> </button>
          <button  className=' p-4  '><FiMoreVertical /></button>
         
        </div>
         */