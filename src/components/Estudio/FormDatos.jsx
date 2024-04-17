import {
  TextField,
  FormControl,
  FormHelperText,
  Select, // Importa el componente Select
  MenuItem, // Importa el componente MenuItem
  InputLabel,
} from "@mui/material";
import { useState } from "react";
import { Form, useFormik } from "formik";
// import { Link } from "react-router-dom";
import * as Yup from "yup";

//emailJS
import emailjs from "@emailjs/browser";

export const FormDatos = () => {
  const [formSubmitted, setFormSubmitted] = useState(false); // Estado para controlar si el formulario ha sido enviado
  const [showMessage, setShowMessage] = useState(false); //Mensaje temporal

  //enviar Correo
  const enviarCorreo = async (values) => {
    try {
      await emailjs.send(
        "service_6n6xhgf",
        "template_mdm2j1f",
        values,
        "jfakOoUEp_iz3hFc4"
      );
      console.log("Correo electrónico enviado con éxito");
    } catch (error) {
      console.error("Error al enviar el correo electrónico:", error);
    }
  };

  //enviar un correo de respuesta
  const monitorIncomingEmails = async () => {
    const { email } = formik.values.email;
    if (!email) {
      return;
    }
    console.log("Correo electrónico del usuario:", email);
    const replyMessage =
      "Gracias por tu correo electrónico. Nos pondremos en contacto contigo pronto."; // Mensaje de respuesta

    try {
      await emailjs.send(
        "service_6n6xhgf",
        "template_4rfcmsk",
        { to: email, message: replyMessage },
        "jfakOoUEp_iz3hFc4"
      );
      console.log("Respuesta enviada con éxito");
    } catch (error) {
      console.error("Error al enviar la respuesta:", error);
    }
  };
 
  ///Estado de Formik
  const formik = useFormik({
    initialValues: {
      nombre: "",
      apellido: "",
      telefono: "",
      email: "",
      codigo: "",
      uso: "",
      solucion: "", // Nuevo campo para el dropdown
    },
    validationSchema: Yup.object().shape({
      nombre: Yup.string().required("El nombre es obligatorio"),
      apellido: Yup.string().required("El apellido es obligatorio"),
      telefono: Yup.string()
        .matches(/^[0-9]+$/, "El teléfono solo puede contener números")
        .matches(/^[1-9]\d{9}$/, "Utiliza solo 10 dígitos de tu teléfono")
        .required("El teléfono es obligatorio"),
      email: Yup.string()
        .email("Formato de correo electrónico inválido")
        .required("El correo electrónico es requerido"),
      codigo: Yup.string()
        .matches(/^[0-9]+$/, "El codigo postal solo puede contener números")

        .required("El codigo postal es obligatorio"),
      politicas: Yup.bool()
        .oneOf([true], "Debe leer y aceptar las políticas de privacidad")
        .required("Debes aceptar las políticas de privacidad"),
      uso: Yup.string().required("Selecciona el uso de los panales"),
      solucion: Yup.string().required(
        "Selecciona el tipo de solución financiera que te interesa"
      ),
    }),
    onSubmit: async (formValue, { resetForm }) => {
      console.log("Formulario enviado");
      console.log(formValue);
      setFormSubmitted(true); // Marcar el formulario como enviado cuando se envía correctamente
      resetForm(); // Limpiamos los valores del formulario después de enviarlo
      setShowMessage(true); // Mostrar el mensaje temporal
      setTimeout(() => {
        setShowMessage(false); // Ocultar el mensaje temporal después de 3 segundos
      }, 6000);
      enviarCorreo(formValue);
      try {
        await monitorIncomingEmails(formValue);
      } catch (error) {
        console.error("Error al enviar la respuesta:", error);
      }
    },
  });

  // Función para permitir solo números en el campo de teléfono
  const handlePhoneKeyPress = (event) => {
    const keyCode = event.keyCode || event.which;
    const keyValue = String.fromCharCode(keyCode);
    const numericRegex = /^[0-9]*$/;
    if (!numericRegex.test(keyValue)) {
      event.preventDefault();
    }
  };
 
  
  return (
    <div className="m-2 font-monts text-[14px] ">
     <div className="w-full m-2 bg-gray-20 rounded-md font-monts text-[14px]">
        {showMessage && (
          <p className="text-blue-700">
            ¡Tu solicitud ha sido enviado exitosamente! Espera nuestro mensaje
            para seguir con el proceso.
          </p>
        )}</div>
        <Form onSubmit={formik.handleSubmit}>
          <FormControl fullWidth error={!formik.isValid} component="fieldset">
            <h1 className="text-ontu font font-semibold text-[16px]">
              Datos de contacto
            </h1>
            <div className="flex flex-col md:flex-row md:space-x-4 ">
              <div className="mt-4 md:w-1/2">
                <TextField
                  label="Nombre"
                  name="nombre"
                  {...formik.getFieldProps("nombre")}
                  error={formik.touched.nombre && Boolean(formik.errors.nombre)}
                  className="w-full "
                />
              </div>
              <div className=" mt-4 md:w-1/2">
                <TextField
                  label="Apellido"
                  name="apellido"
                  {...formik.getFieldProps("apellido")}
                  error={
                    formik.touched.apellido && Boolean(formik.errors.apellido)
                  }
                  className="w-full "
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:space-x-4 ">
              <div className="mt-4 md:w-1/2">
                <TextField
                  label="Teléfono"
                  name="telefono"
                  {...formik.getFieldProps("telefono")}
                  error={
                    formik.touched.telefono && Boolean(formik.errors.telefono)
                  }
                  onKeyPress={handlePhoneKeyPress} // Llama a la función handlePhoneKey
                  inputMode="numeric" // Para permitir solo entrada numérica en dispositivos móviles
                  className="w-full"
                />
              </div>
              <div className=" mt-4 md:w-1/2">
                <TextField
                  label="Email"
                  name="email"
                  {...formik.getFieldProps("email")}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  className="w-full"
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:space-x-4 ">
              <div className=" mt-4 md:w-1/2">
                <TextField
                  label="Código Postal"
                  name="codigo"
                  {...formik.getFieldProps("codigo")}
                  error={formik.touched.codigo && Boolean(formik.errors.codigo)}
                  onKeyPress={handlePhoneKeyPress} // Llama a la función handlePhoneKey
                  inputMode="numeric" // Para permitir solo entrada numérica en dispositivos móviles
                  className="w-full"
                />
              </div>
              <div className="mt-4 md:w-1/2"></div>
            </div>
            <div className="flex flex-col md:flex-row md:space-x-4 ">
              <div className=" mt-4 md:w-1/2">
                <FormControl
                  error={formik.touched.uso && Boolean(formik.errors.uso)}
                  className="w-full"
                >
                  <InputLabel id="uso-label" className="bg-white p-2">
                    Uso de los panales
                  </InputLabel>{" "}
                  {/* Aquí se utiliza InputLabel */}
                  <Select
                    labelId="uso-label" // Propiedad labelId para asociar el label con el Select
                    name="uso"
                    {...formik.getFieldProps("uso")}
                  >
                    <MenuItem value="Comercial">Comercial</MenuItem>
                    <MenuItem value="Industrial">Industrial</MenuItem>
                    <MenuItem value="Residencial">Residencial</MenuItem>
                    <MenuItem value="Rural">Rural</MenuItem>
                  </Select>
                  <FormHelperText>
                    {formik.touched.uso && formik.errors.uso}
                  </FormHelperText>
                </FormControl>
              </div>
              <div className="mt-4 md:w-1/2">
                <FormControl
                  error={
                    formik.touched.solucion && Boolean(formik.errors.solucion)
                  }
                  className="w-full"
                >
                  <InputLabel id="solucion-label" className="bg-white p-2">
                    ¿Qué solución financiera te interesa?
                  </InputLabel>{" "}
                  {/* Aquí se utiliza InputLabel */}
                  <Select
                    labelId="solucion-label" // Propiedad labelId para asociar el label con el Select
                    name="solucion"
                    {...formik.getFieldProps("solucion")}
                  >
                    <MenuItem value="AlContado">Al contado</MenuItem>
                    <MenuItem value="Arrendamiento">Arrendamiento</MenuItem>
                    <MenuItem value="Credito">Crédito</MenuItem>
                    <MenuItem value="Ontu0">Ontu 0</MenuItem>
                  </Select>
                  <FormHelperText>
                    {formik.touched.solucion && formik.errors.solucion}
                  </FormHelperText>
                </FormControl>
              </div>
            </div>

            {(formik.touched.nombre ||
              formik.touched.apellido ||
              formik.touched.telefono ||
              formik.touched.email ||
              formik.touched.codigo ||
              formik.touched.uso ||
              formik.touched.solucion) && (
              <FormHelperText error>
                {formik.errors.nombre ||
                  formik.errors.apellido ||
                  formik.errors.telefono ||
                  formik.errors.email ||
                  formik.errors.codigo ||
                  formik.errors.uso ||
                  formik.errors.solucion}
              </FormHelperText>
            )}
          </FormControl>
          <div className="mt-8 text-center text-xl font-monts text-black">
            <label>¿Tienes 5 minutos más?</label>
            <div className="flex justify-between items-center mt-10 mb-8 md:mb-5 md:mt-5 ">
            <button
            type="submit"
            disabled={!formik.isValid}
            className="bg-blueOntu w-[160px] h-[40px] font-monts flex items-center justify-center font-semibold uppercase mx-auto  md:mx-0 text-white  hover:text-blueOntu hover:border-2 hover:border-blueOntu hover:bg-white hover:font-semibold active:scale-y-[1] active:duration-75 ease-in-out transition-all rounded-full "
          >
            Siguiente
          </button>
          </div>
          </div>
       
        </Form>
      
    </div>
  );
};
