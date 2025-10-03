"use client"

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import { Autoplay } from 'swiper/modules';

export default  function MySwiper ({ imgList, slidesPerView = 1 , spaceBetween = 10 , isCategary = false} : {
    imgList :{
        src : string,
        alt : string,
    }[],
    spaceBetween?:number,
    slidesPerView?:number,
    isCategary?:boolean,
}) {
  return (
    <Swiper

      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView}
      className={` transition-all duration-300 `}
      loop
        modules={[Autoplay]}
      autoplay={{
        delay: 500,        
        disableOnInteraction: false
      }}
      speed={1500}
    //   onSlideChange={() => console.log('slide change')}
    //   onSwiper={(swiper) => console.log(swiper)}
    >
        {
            imgList.map(img=>{
                return <SwiperSlide key={img.src} className=''>
                    <div className="relative rounded-xl overflow-hidden">
                    {
                      isCategary ? 
                      <div className="my-photo text-center p-8">
                        <div className="inner  rounded-xl overflow-hidden border border-green-500">
                        <img className='mx-auto w-full  h-[200px] ' src={img.src} alt={img.alt}/>
                        <h2 className='text-xl font-bold'>{img.alt}</h2>

                        </div>
                      </div>                     
                      :
                    <img className='w-full h-[400px] ' src={img.src} alt={img.alt}/>

                    }
                    </div>
                </SwiperSlide>
            })

        }


      {/* <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide> */}
    </Swiper>
  );
};

// "use client"

// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay } from 'swiper/modules';

// import 'swiper/css';

// export default function MySwiper({ 
//   imgList, 
//   slidesPerView = 1, 
//   spaceBetween = 10, 
//   isCategary = false
// }: {
//   imgList: {
//     src: string,
//     alt: string,
//   }[],
//   spaceBetween?: number,
//   slidesPerView?: number,
//   isCategary?: boolean,
// }) {
//   return (
//     <Swiper
//       spaceBetween={spaceBetween}
//       slidesPerView={slidesPerView}
//       loop
//       modules={[Autoplay]}
//       autoplay={{
//         delay: 2000,        // كل قد ايه يغير (بالـ ms) = 2 ثانية
//         disableOnInteraction: false, // يفضل شغال حتى لو المستخدم لمس السلايدر
//       }}
//       className="h-[400px]"
//     >
//       {imgList.map((img) => (
//         <SwiperSlide key={img.src}>
//           <div className="relative">
//             {isCategary ? (
//               <div className="my-photo p-8">
//                 <div className="inner rounded-xl overflow-hidden">
//                   <img className="w-full h-[200px]" src={img.src} alt={img.alt} />
//                 </div>
//               </div>
//             ) : (
//               <img className="w-full h-[400px]" src={img.src} alt={img.alt} />
//             )}
//           </div>
//         </SwiperSlide>
//       ))}
//     </Swiper>
//   );
// }

