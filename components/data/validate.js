import * as Yup from "yup";
export const validSchema = Yup.object().shape({
  user_name: Yup.string()
    .required("Debe ingresar su nombre"),
   user_email: Yup.string().email().required("Debe colocar su email"),
   message: Yup.string().min(5, "debe tener al menos 5 letras").required("Debe colocar un mensaje :)")
});

export const initialValue = {
  user_name:"",
  user_email:"",
  message:""
};