
import * as zod from "zod"
import { schema } from "./Login.schema";


export type LoginFormType =  zod.infer<typeof schema>;
