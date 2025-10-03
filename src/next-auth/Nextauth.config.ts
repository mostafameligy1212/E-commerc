
import {NextAuthOptions} from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { email } from "zod";
import { jwtDecode } from "jwt-decode";

export const nextAuthConfig: NextAuthOptions  =  {
    providers : [
        Credentials({
            name:"fresh cart",
            authorize: async function(credentials, req) {
               const res = await fetch("https://ecommerce.routemisr.com/api/v1/auth/signin",{
                    method:"post",
                    body:JSON.stringify(credentials),
                    headers:{
                        "Content-Type":"application/json",
                    }
                });
                const finalReslut = await res.json();
                console.log("final Reslut authroiz " , finalReslut);
                
                if(finalReslut.message == "success"){
                    // const {role , ...rest} = finalReslut.user
                    // return rest;
                    const decodedObj  : {id : string} = jwtDecode(finalReslut.token)

return {
  id: decodedObj.id,
  name: finalReslut.user.name,
  email: finalReslut.user.email,
  credentialsToken: finalReslut.token,
}
                }

                return null;
            },
            credentials :{
                email:{},
                password:{}
            }
        })
    ],


    pages:{
        signIn : "/login",
        
    },


    callbacks:{
jwt({ token, user }) {
  if (user) {
    token.id = (user as any).id;
    token.role = (user as any).role;
    token.credentialsToken = (user as any).credentialsToken;
  }
  return token;
},
            
async session({ session, token }) {
  if (session.user) {
    session.user.id = token.id as string;
    session.user.role = token.role as string | undefined;
    (session.user as any).credentialsToken = token.credentialsToken; 
  }
  return session;
}


    }, 



    session :{
        maxAge : 60 * 60 * 24 * 7
    }
}