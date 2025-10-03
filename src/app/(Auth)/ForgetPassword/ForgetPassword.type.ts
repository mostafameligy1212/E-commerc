
import * as zod from "zod"
import { schema } from "./ForgetPassword.schema";


export type ForgetPasswordType =  zod.infer<typeof schema>;
