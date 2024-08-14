import { object, string, ref } from "yup";

export const signupSchema = object().shape({
    email: string().required("Email requerido").email("No es un email valido"),
    password: string()
        .required("Contraseña requerida")
        .min(6, "La contraseña debe tener al menos 6 caracteres"),
    confirmPassword: string()
        .oneOf([ref("password"), null], "Las contraseñas deben coincidir")
        .required(),
});