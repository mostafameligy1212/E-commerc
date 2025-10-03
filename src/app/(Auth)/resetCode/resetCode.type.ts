
import * as zod from "zod"
import { schema } from "./resetCode.schema";


export type resetCodeType =  zod.infer<typeof schema>;
