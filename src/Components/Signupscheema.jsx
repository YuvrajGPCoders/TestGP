import * as Yup from "yup";
export const signUpSchema = Yup.object({
    username: Yup.string().min(4).max(15).required(" please enter  username"),
    password: Yup.string().min(4).max(15).required(" please enter your password"),


});