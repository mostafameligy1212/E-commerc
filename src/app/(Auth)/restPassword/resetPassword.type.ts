
import * as zod from "zod"
import { schema } from "./resetPassword.schema";


export type resetCodeType =  zod.infer<typeof schema>;
