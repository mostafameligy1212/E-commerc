import React from 'react'
import MySwiper from '../MySwiper/MySwiper'
import Image from 'next/image'

import img1 from "_/images/slider-image-1.jpeg"
import img2 from "_/images/slider-image-2.jpeg"
import img3 from "_/images/slider-image-3.jpeg"
import blog1 from "_/images/blog-img-1.jpeg"
import blog2 from "_/images/blog-img-2.jpeg"



export default function HomeSlider() {
  return (
    <div className="md:flex md:w-[75%] mt-3 overflow-hidden mx-auto">
 
      
      <div className="md:w-2/3">
            <MySwiper spaceBetween={2} imgList={ [{ alt :"img1" , src : img1.src},{ alt :"img2" , src : img2.src},{ alt :"img3" , src : img3.src} ]}/>

      </div>
   <div className="md:w-1/3 hidden md:block">
     <Image src={blog1} className="block w-full md:h-[200px]" alt="blog1" />
     <Image src={blog2} className="block w-full md:h-[200px]" alt="blog2" />
    </div>
    </div>
  )
}
