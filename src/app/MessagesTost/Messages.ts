import React from 'react'
import { toast } from 'sonner'

export function successMessage(Message: string) {
   toast.success( Message, {position : "top-right" , duration:3000 , style:{textAlign:"center" , color :"green" , fontSize :"  font-size: 1.875rem"} } )
  
}
export function errorMessage(Message: string) {
  toast.error( Message, {position : "top-right" , duration:3000  ,style:{textAlign:"center" , color :"red" , fontSize :"  font-size: 1.875rem"}   } )
  
}
