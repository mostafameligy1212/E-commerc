"use server";

import { resetCodeType } from "./resetPassword.type";


export async function handelResetPassword(data:resetCodeType) 
{
        const res = await fetch("https://ecommerce.routemisr.com/api/v1/auth/resetPassword" ,{
          method :"put",
          body : JSON.stringify(data),
          headers :{
            "Content-Type" : "application/json"
          }
        })
        const FinalRes = await res.json();
        console.log("reset password" , FinalRes);
        if(FinalRes.statusMsg === 'fail'){
            return false;
        }
        else
        {
          return true;
        }
}