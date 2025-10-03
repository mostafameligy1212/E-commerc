import { decode } from "next-auth/jwt";
import { cookies } from "next/headers";

export async function getUserToken() {
  const cookieStore = await cookies();
  const sessionToken =
    cookieStore.get("next-auth.session-token")?.value ||
    cookieStore.get("__Secure-next-auth.session-token")?.value;

  if (!sessionToken) return null;

  const decodedToken = await decode({
    token: sessionToken,
    secret: process.env.NEXTAUTH_SECRET || "",
  });

  console.log("decodedToken", decodedToken);

  return decodedToken?.credentialsToken || null;
}

/*

decodedToken {
  name: 'mostafa meligy',
  email: 'mostafameligy1234@gmail.com',
  sub: '68dea2771cbc0b0875b529ae',
  id: '68dea2771cbc0b0875b529ae',
  iat: 1759426164,
  exp: 1760030964,
  jti: '5f4479af-2f43-429c-b0fa-e4e4e9cacdc7'
}
  
*/ 