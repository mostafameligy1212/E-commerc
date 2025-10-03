"use server";

import { resetCodeType } from "./resetCode.type";


export async function handelresetCode(data:resetCodeType) 
{
        const res = await fetch("https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode" ,{
          method :"post",
          body : JSON.stringify(data.code),
          headers :{
            "Content-Type" : "application/json"
          }
        })
        const FinalRes = await res.json();
        console.log("FinalRes forget code" , FinalRes);
        if(FinalRes.statusMsg === 'fail'){
            return false;
        }
        else
        {
          return true;
        }
}