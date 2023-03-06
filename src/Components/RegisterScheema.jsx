import * as Yup from "yup";
export const signUpSchema = Yup.object({
    firstname: Yup.string().min(4).max(15).required(" please enter  username"),
    lastname: Yup.string().min(3).max(15).required(" please enter your password"),
    description: Yup.string().min(5).max(15).required(" please enter something here"),

});