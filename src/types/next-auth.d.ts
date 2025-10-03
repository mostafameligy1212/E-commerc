import NextAuth, { DefaultSession, DefaultUser } from "next-auth";


declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    role?: string;
    credentialsToken?: string; 
  }
}

declare module "next-auth" {
  interface User {
    id: string;
    role?: string;
    credentialsToken?: string; 
  }

  interface Session {
    user?: {
      id: string;
      role?: string;
      credentialsToken?: string; 
    } & DefaultSession["user"];
  }
}