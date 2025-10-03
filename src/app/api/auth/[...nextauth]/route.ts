import { nextAuthConfig } from "_/next-auth/Nextauth.config";
import NextAuth from "next-auth";



const nextHandler = NextAuth(nextAuthConfig);

export {nextHandler as GET , nextHandler as POST}
