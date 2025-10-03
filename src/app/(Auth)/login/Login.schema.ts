import * as zod from "zod"

export const schema = zod.object({
email :zod.email(),
password : zod.string().nonempty("password is requrid").regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/ , "Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character"),
});