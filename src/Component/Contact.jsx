import React from 'react'
import About1 from './About1'
import About2 from './About2'
import Phone from "../Assets/assets/phone.png"
import Email from "../Assets/assets/msg.png"
import Loc from "../Assets/assets/map.png"



export default function Contact() {
  return (
    <div className="container_flud bg-white rounded-3xl">

    <div>
      <About1 data={{head:"Contact"}}/>
    </div>
    <div className="grid lg:grid-cols-3 grid-cols-2">
        <div><About2
          card={{
            log:Phone,
            Color: "bg-[#FCF4FF]",
            title: "Phone :",
            para: "+92 321 3486846",
          }}
        />
           <About2
          card={{
            log:Email,
            Color: "bg-[#F3FAFF]",
            title: "Email :",
            para: "harisnassem830@gmail.com",
          }}
        />
           <About2
          card={{
            log:Loc,
            Color: "bg-[#F2F4FF]",
            title: "Location :",
            para: "Pakistan",
          }}
        />
        </div>
        <div className='col-span-2 bg-[#F8FBFB] p-12 space-y-2'>
          <h1 className='text-3xl'>I'm always open to discussing Product </h1>
          <h1 className='text-3xl font-bold'>design work or patnership. </h1>
          <div className='pt-10'>
          <input type="text" placeholder='Name*' className='border-b border-black w-full p-5 my-3 bg-[#F8FBFB]'/>
          <input type="text" placeholder='Email*' className='border-b border-black w-full p-5 my-3 bg-[#F8FBFB]'/>
          <input type="text" placeholder='Message*' className='border-b border-black w-full p-5 my-3 bg-[#F8FBFB] '/>
          </div>
          <div>
            <button className='border-2 border-gray-500 font-bold rounded-xl py-2 px-6'>Submint</button>
          </div>

        </div>
        </div>
    </div>
  )
}
