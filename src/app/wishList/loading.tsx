import React from 'react'
import { BeatLoader, ClockLoader, ScaleLoader } from 'react-spinners'

export default function loading() {
  return (
    <div className=' flex justify-center items-center h-screen  '>
      <ClockLoader size={70}  color='#67F58B'  />
    </div>
  )
}
