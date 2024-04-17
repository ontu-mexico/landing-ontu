import * as yup from "yup";

export const inputsInitialState = {
  nombre: "",
  telefono: "",
  email: "",
};

export const validationSchema2 = yup.object().shape({
  nombre: yup.string().required("Campo requerido"),
  telefono: yup.string().required("El teléfono es obligatorio"),
  email: yup
    .string()
    .email("Correo electrónico inválido")
    .required("Campo requerido"),
});
