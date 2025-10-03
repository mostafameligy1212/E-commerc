"use server";

import { cookies } from "next/headers";
import { RegisterFormType } from "./register.type";


export async function handelRegister(data:RegisterFormType) 
{
        const res = await fetch("https://ecommerce.routemisr.com/api/v1/auth/signup" ,{
          method :"post",
          body : JSON.stringify(data),
          headers :{
            "Content-Type" : "application/json"
          }
        })
        const FinalRes = await res.json();
        if(FinalRes.statusMsg === 'fail'){
            return FinalRes.message;
        }
        else
        {
         const cookie = await cookies();
         cookie.set("user token" ,FinalRes.token , {
          httpOnly: true,
          sameSite : "strict",
          
         })
            return true;
        }


}