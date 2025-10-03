import { getCategarysImages } from '_/app/_services/GetAllCategaris';
import React from 'react'
import MySwiper from '../MySwiper/MySwiper';

export default async function CategarysImages() {
 const object = await getCategarysImages();
 if(object == null)
 {
    return;
 }
    return (
    <div className='pt-5'>
      <MySwiper isCategary={true} slidesPerView={6}spaceBetween={0} imgList={object.map((imgsrc)=>{
        return {
            alt : imgsrc.name,
            src : imgsrc.image,
        }
      })}/>
    </div>
  )
}
