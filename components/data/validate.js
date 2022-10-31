import * as Yup from "yup";
export const validSchema = Yup.object().shape({
  user_name: Yup.string()
    .required("You must enter your name"),
   user_email: Yup.string().email().required("You must put your email"),
   message: Yup.string().min(5, "Must have at least 5 letters").required("You must post a message :)")
});

export const initialValue = {
  user_name:"",
  user_email:"",
  message:""
};