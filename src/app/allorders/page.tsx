import { redirect } from 'next/navigation'
import React from 'react'

export default function AllOrders() {
//   revalidatePath('/cart')
// window.location.href = "/cart"
redirect("/cart");
    return (
    <div>
      
    </div>
  )
}
