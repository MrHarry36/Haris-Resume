import React from 'react'
import About1 from './About1'
import Blog1 from './Blog1'
import Port from '../Assets/assets/download6.jpg'
import Port1 from '../Assets/assets/monkey.jpg'
import Port2 from '../Assets/assets/fly.jpg'
import Port3 from '../Assets/assets/download8.jpeg'
import Port4 from '../Assets/assets/dog.jpg'
import Port5 from '../Assets/assets/book.jpg'


export default function Blog() {
  return (

    <div className="container_flud bg-white rounded-3xl">

    <div>
      <About1 data={{head:"Blog"}}/>
    </div>
    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 py-20">
      <Blog1 Portfolio={{pic:Port,color: "bg-[#FFF0F0]" , 
       para:"177 April . inspiration",
       h1:"How to Own Your Audience by Creating an Email List."}} 
       />
      <Blog1 Portfolio={{pic:Port1,color: "bg-[#FFF3FC]", 
       para:"000 April . inspiration",
       h1:"Everything You Need to Know About Web Accessibility."}} 
       />
      <Blog1 Portfolio={{pic:Port2,color: "bg-[#FFF0F0]",
       para:"21 April . Web Design",
       h1:"The window know to say beside you"}} />
      <Blog1 Portfolio={{pic:Port3,color: "bg-[#E9FAFF]",
       para:"27 April . Inspiration",
       h1:"Top 10 Toolkits for Deep Learning in 2021."}}
        />
      <Blog1 Portfolio={{pic:Port4,color: "bg-[#FFFAE9]",
       para:"27 April . Inspiration",
       h1:"How to Own Your Audience by Creating an Email List."}} 
       />
      <Blog1 Portfolio={{pic:Port5,color: "bg-[#FCF4FF]", 
       para:"27 April . Inspiration",
      h1:"Everything You Need to Know About Web Accessibility."}} />
      </div>
    </div>

  )
}
