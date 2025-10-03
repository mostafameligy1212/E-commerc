import * as zod from "zod"

export const schema = zod.object({
name :zod.string().nonempty("Name is requrid").max(20 , "max length 20 charters").min(2 , "min length 2 charcter"),
email :zod.email(),
password : zod.string().nonempty("password is requrid").regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/ , "Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character"),
rePassword : zod.string().nonempty("Comfirm password is requrid").regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/ , "Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character"),
phone : zod.string().nonempty("Phone is requrid").regex(/^01[0125][0-9]{8}$/ , "Phone Must Be Egyptian"), 
}).refine((obj)=>{
  return obj.password === obj.rePassword;
} , { path :["rePassword"] , error : "passwords are not in match"})
