import React from 'react'
import About1 from './About1'
import Work1 from './Work1' 
import Port from '../Assets/assets/Biscuit.jpeg'
import Port1 from '../Assets/assets/slide2.jpg'
import Port2 from '../Assets/assets/download3.jpeg'
import Port3 from '../Assets/assets/download4.jpg'
import Port4 from '../Assets/assets/download5.jpg'
import Port5 from '../Assets/assets/download6.jpg'
import Port6 from '../Assets/assets/download7.jpeg'
import Port7 from '../Assets/assets/download8.jpeg'
import Port8 from '../Assets/assets/download9.jpeg'
import Resume2 from './Resume2'
import video from './video'



export default function Works() {
  return (
    <div className="container_flud bg-white rounded-3xl">
    <div>
      <About1 data={{head:"Portfolio"}}/>
    </div>
    <div>
    <ul className="md:flex lg:justify-end md:justify-centter sm:justify-start mx-10 py-10 ">
      <li className="lg:mx-5 md:mx-3 font-bold text-[#FA5252]">All</li>
      <li className="lg:mx-5 md:mx-3 font-bold text-gray-600">Video</li>
      <li className="lg:mx-5 md:mx-3 font-bold text-gray-600">Web Desgin</li>
      <li className="lg:mx-5 md:mx-3 font-bold text-gray-600">Logo</li>
      <li className="lg:mx-5 md:mx-3 font-bold text-gray-600">Graphic Design</li>
    </ul>

    </div>
    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10">
      <Work1 Portfolio={{pic:Port,color: "bg-[#FFF0F0]" , para:"UI/UX",h1:"Chul urina"}} />
      <Work1 Portfolio={{pic:Port1,color: "bg-[#FFF3FC]", para:"Web Desgin",h1:"Aura Dione"}} />
      <Work1 Portfolio={{pic:Port2,color: "bg-[#FFF0F0]", para:"Logo",h1:"Chul urina"}} />
      <Work1 Portfolio={{pic:Port3,color: "bg-[#E9FAFF]", para:"Video",h1:"Chul urina"}} />
      <Work1 Portfolio={{pic:Port4,color: "bg-[#FFFAE9]", para:"UI/UX",h1:"Chul urina"}} />
      <Work1 Portfolio={{pic:Port5,color: "bg-[#FCF4FF]", para:"Video",h1:"Chul urina"}} />
      <Work1 Portfolio={{pic:Port6,color: "bg-[#FCF4FF]", para:"UI/UX",h1:"Chul urina"}} />
      <Work1 Portfolio={{pic:Port7,color: "bg-[##FCF4FF]",para:"Web Desgin",h1:"Chul urina"}} />
      <Work1 Portfolio={{pic:Port8,color: "bg-[#FCF4FF]", para:"Logo",h1:"Chul urina"}} />
    </div>
    <div>
        <Resume2 foot={{ para: "© 2022 All Rights Reserved by Portfolio." }} />
      </div>

    </div>
  )
}
