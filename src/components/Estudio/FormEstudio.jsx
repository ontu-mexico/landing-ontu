import {
  TextField,
  Checkbox,
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
import { ModalPrivacidad } from "../Legales/ModalPrivacidad";
//emailJS
import emailjs from "@emailjs/browser";
import recibo from "/src/assets/image/ontu_recibo_luz.jpg";
import { FormComplete } from "./FormComplete";

export const FormEstudio = () => {
  const [formSubmitted, setFormSubmitted] = useState(false); // Estado para controlar si el formulario ha sido enviado
  const [showMessage, setShowMessage] = useState(false); //Mensaje temporal
  //abrir modal Recibo
  const [isopenRecibo, setIsopenRecibo] = useState(false);
  //abrir modal Aviso
  const [isopen, setIsopen] = useState(false);

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
      numServicio: "",
      pago: "",
      tarifa: "",
      espacio: "",
      nombre: "",
      apellido: "",
      telefono: "",
      email: "",
      codigo: "",
      politicas: false,
      uso: "",
      solucion: "", // Nuevo campo para el dropdown
    },
    validationSchema: Yup.object().shape({
      numServicio: Yup.string()
        .matches(
          /^[0-9]+$/,
          "El número del servicio solo puede contener 13 números"
        )
        .matches(/^[0-9]\d{12}$/, "Utiliza solo 13 dígitos de tu servicio")
        .required("El número del servicio es obligatorio"),
      pago: Yup.string()
        .matches(/^[0-9]+$/, "El monto del pago solo puede contener números")
        .required("El pago es obligatorio"),
      tarifa: Yup.string().required("Selecciona el tipo de tarifa CFE"),
      espacio: Yup.string().required(
        "Selecciona si tienes espacio para los paneles solares"
      ),
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
    <div className="m-5 md:m-10 font-monts text-[14px] ">
      {formSubmitted ? (
        <FormComplete />
      ) : (
        <Form onSubmit={formik.handleSubmit}>
          <FormControl fullWidth error={!formik.isValid} component="fieldset">
            <div className="flex justify-between ">
              <h1 className="text-ontu font font-semibold text-[16px] mt-5 md:mt-0">
                Datos básicos para el estudio solar
              </h1>
              <button
                className="text-blueOntu text-[32px] h-8 w-8 text-center font-bold cursor-pointer motion-safe:animate-bounce hover:text-gray-500  active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all"
                onClick={() => setIsopenRecibo(true)}
              >
                <ion-icon name="help-circle-outline"></ion-icon>
              </button>
              {isopenRecibo && (
                /* Modal Imagen */
                <div className="fixed z-40 inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
                  <div className="bg-white p-1 rounded flex flex-col justify-end gap-5">
                    <div className="flex justify-end ">
                      <button
                        onClick={() => setIsopenRecibo(false)}
                        className="bg-white text-[32px] rounded-full text-red-600 h-8 w-8 text-center cursor-pointer m-2 hover:text-veryDarkBlue  active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all"
                      >
                        <ion-icon name="close-circle-outline"></ion-icon>
                      </button>
                    </div>
                    <img
                      className=" w-[450px] h-[220px] lg:w-[550px] lg:h-[320px] "
                      src={recibo}
                      alt="Recibo de Luz"
                    />
                  </div>
                </div>
              )}
            </div>
            <div className="flex flex-col md:flex-row md:space-x-4 ">
              <div className="mt-4 md:w-1/2">
                <TextField
                  label="Número de Servicio"
                  name="numServicio"
                  {...formik.getFieldProps("numServicio")}
                  error={
                    formik.touched.numServicio &&
                    Boolean(formik.errors.numServicio)
                  }
                  className="w-full "
                />
              </div>
              <div className=" mt-4 md:w-1/2">
                <TextField
                  label="¿Cuánto fue lo último que pagaste?"
                  name="pago"
                  {...formik.getFieldProps("pago")}
                  error={formik.touched.pago && Boolean(formik.errors.pago)}
                  className="w-full "
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:space-x-4 ">
              <div className="mt-4 md:w-1/2">
                <FormControl
                  error={formik.touched.tarifa && Boolean(formik.errors.tarifa)}
                  className="w-full"
                >
                  <InputLabel id="tarifa-label" className="bg-white p-2">
                    ¿Cuál es tu tarifa CFE?
                  </InputLabel>{" "}
                  {/* Aquí se utiliza InputLabel */}
                  <Select
                    labelId="tarifa-label" // Propiedad labelId para asociar el label con el Select
                    name="tarifa"
                    {...formik.getFieldProps("tarifa")}
                  >
                    <MenuItem value="1">1</MenuItem>
                    <MenuItem value="1A">1A</MenuItem>
                    <MenuItem value="1B">1B</MenuItem>
                    <MenuItem value="1C">1C</MenuItem>
                    <MenuItem value="1D">1D</MenuItem>
                    <MenuItem value="1E">1E</MenuItem>
                    <MenuItem value="1F">1F</MenuItem>
                    <MenuItem value="DAC">DAC</MenuItem>
                  </Select>
                  <FormHelperText>
                    {formik.touched.tarifa && formik.errors.tarifa}
                  </FormHelperText>
                </FormControl>
              </div>
              <div className=" mt-4 md:w-1/2">
                <FormControl
                  error={
                    formik.touched.espacio && Boolean(formik.errors.espacio)
                  }
                  className="w-full"
                >
                  <InputLabel id="espacio-label" className="bg-white p-2">
                    ¿Tienes espacio en un techo para paneles?
                  </InputLabel>{" "}
                  {/* Aquí se utiliza InputLabel */}
                  <Select
                    labelId="espacio-label" // Propiedad labelId para asociar el label con el Select
                    name="espacio"
                    {...formik.getFieldProps("espacio")}
                  >
                    <MenuItem value="Si">Si</MenuItem>
                    <MenuItem value="No">No</MenuItem>
                    <MenuItem value="NoSe">No lo sé</MenuItem>
                  </Select>
                  <FormHelperText>
                    {formik.touched.espacio && formik.errors.espacio}
                  </FormHelperText>
                </FormControl>
              </div>
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
            <h1 className="text-ontu font font-semibold text-[16px] mt-5">
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

            <div className="font-monts text-[12px] mt-4">
              <Checkbox
                {...formik.getFieldProps("politicas")}
                error={formik.touched.politicas && formik.errors.politicas}
              />
              <span className="mr-1">Sí, he leído y acepto el </span>
              <span
                className="hover:text-blueOntu font-semibold cursor-pointer"
                onClick={() => setIsopen(true)}
              >
                Aviso de Privacidad
              </span>
            </div>

            {/* modal */}
            {isopen && (
              /* Modal Imagen */
              <div className="fixed z-40 inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center px-5">
                <div className="bg-white p-1 rounded flex flex-col justify-end gap-5  max-h-[85vh]">
                  <div className="flex justify-end">
                    <button
                      onClick={() => setIsopen(false)}
                      className="bg-white text-[30px] rounded-full text-grayOntu  h-8 w-8 text-center cursor-pointer m-2 hover:text-red-600 active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all"
                    >
                      <ion-icon name="close-circle-outline"></ion-icon>
                    </button>
                  </div>
                  <ModalPrivacidad />
                </div>
              </div>
            )}

            {(formik.touched.nombre ||
              formik.touched.apellido ||
              formik.touched.telefono ||
              formik.touched.email ||
              formik.touched.codigo ||
              formik.touched.numServicio ||
              formik.touched.pago ||
              formik.touched.tarifa ||
              formik.touched.espacio ||
              formik.touched.politicas ||
              formik.touched.uso ||
              formik.touched.solucion) && (
              <FormHelperText error>
                {formik.errors.nombre ||
                  formik.errors.apellido ||
                  formik.errors.telefono ||
                  formik.errors.email ||
                  formik.errors.codigo ||
                  formik.errors.numServicio ||
                  formik.errors.pago ||
                  formik.errors.tarifa ||
                  formik.errors.espacio ||
                  formik.errors.politicas ||
                  formik.errors.uso ||
                  formik.errors.solucion}
              </FormHelperText>
            )}
          </FormControl>

          <div className="flex justify-left items-left mt-8 mb-8 md:mb-3 md:mt-3 ">
            <button
              type="submit"
              disabled={!formik.isValid}
              className="bg-blueOntu w-[160px] h-[40px] font-monts flex items-center justify-center font-semibold uppercase mx-auto  md:mx-0 text-white  hover:text-blueOntu hover:border-2 hover:border-blueOntu hover:bg-white hover:font-semibold active:scale-y-[1] active:duration-75 ease-in-out transition-all rounded-full "
            >
              Enviar
            </button>
          </div>
        </Form>
      )}
    </div>
  );
};
