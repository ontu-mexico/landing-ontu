import React from "react";
import { NavBar } from "../NavBar/NavBar";
import { FooterCR } from "../FooterCR";
import { TbPointFilled } from "react-icons/tb";

export const Terminos = () => {
  return (
    <main>
      <NavBar />
      <div className="w-full pt-32 px-2 pb-10 ">
        <div className="max-w-[1240px]  mx-auto ">
          <div className=" flex flex-col justify-center items-center px-5 lg:px-32 text-center ">
            <h1 className="font-monts text-center text-[38px] md:text-[42px] lg:text-[46px]  leading-none mb-2 lg:mb-2 font-semibold text-ontu ">
              Términos y Condiciones
            </h1>
            <p className="text-[14px] md:text-[16px]  lg:text-[18px] leading-tight  font-monts text-center lg:mt-3 lg:px-10 mb-5  ">
              ​Términos de Uso / Acuerdo Usuario
            </p>
            <div>
              <p className="text-[11px] md:text-[12px]  lg:text-[13px] leading-tight mt-5 font-monts text-justify lg:mt-5 lg:px-10  ">
                TÉRMINOS Y CONDICIONES Y ACUERDO DE USO{" "}
                <span className="font-semibold mr-1">
                  ONTU S.A.P.I DE C.V. | ONTU
                </span>
              </p>
              <p className="text-[11px] md:text-[12px]  lg:text-[13px] leading-tight mt-5 font-monts text-justify lg:mt-5 lg:px-10  ">
                Estos Términos de Uso, junto con el Aviso de Privacidad
                disponible en{" "}
                <span className="text-ontu mr-1">
                  <a href="www.ontu.mx/aviso-de-privacidad">
                    www.ontu.mx/aviso-de-privacidad
                  </a>
                </span>{" "}
                ("Aviso de Privacidad") y las reglas, políticas, términos y
                condiciones establecidos, referidos y/o vinculados en el
                presente documento, todos los cuales se integran y se incorporan
                aquí por referencia, son, colectivamente, el "Acuerdo".
              </p>
              <p className="text-[11px] md:text-[12px]  lg:text-[13px] leading-tight mt-5 font-monts text-justify lg:mt-5 lg:px-10  ">
                Este Acuerdo constituye un acuerdo legal entre usted ("Usted" o
                "Usuario") y ONTU S.A.P.I DE C.V. | ONTU y sus filiales,
                matrices y subsidiarias (colectivamente "Ontu" o "nosotros").
                Este Acuerdo rige su uso de nuestros servicios y plataforma que
                facilita las comunicaciones entre los Usuarios ofrecidos a
                través de nuestro sitio web ubicado en www.ontu.mx,{" "}
                <span className="font-semibold mr-1">
                  {" "}
                  YA QUE PUEDE SER MODIFICADO, REUBICADO Y/O REDIRIGIDO DE VEZ
                  EN CUANDO ("EL SITIO"), LAS APLICACIONES MOVILES OFRECIDAS POR
                  NOSOTROS ("LAS APLICACIONES"), NUESTROS SERVICIOS, PLATAFORMA,
                  SITIO Y APLICACIONES SE CONOCEN COLECTIVAMENTE COMO ("LA
                  PLATAFORMA ONTU").
                </span>
              </p>
              <p className="text-[11px] md:text-[12px]  lg:text-[13px] leading-tight mt-5 font-monts text-justify lg:mt-5 lg:px-10  ">
                Al acceder, usar o registrarse en la Plataforma Ontu o en
                cualquier parte de la misma, usted reconoce y acepta
                expresamente estar obligado por los términos y condiciones de
                este Acuerdo, y cualquier enmienda y adición futura a este
                Acuerdo que podamos publicar de vez en cuando. Lea atentamente
                este Acuerdo. Si no acepta y está obligado por este Acuerdo,
                debe dejar de usar la Plataforma Ontu de inmediato. La
                aceptación de Ontu está expresamente condicionada a su
                consentimiento a este Acuerdo en su totalidad. Si este Acuerdo
                se considera una oferta por nuestra parte, la aceptación se
                limita expresamente a este Acuerdo.
              </p>
              <p className="text-[11px] md:text-[12px]  lg:text-[13px] leading-tight mt-5 font-monts text-justify lg:mt-5 lg:px-10  ">
                Al utilizar la Plataforma Ontu, usted declara y garantiza que:{" "}
                <span className="font-semibold mr-1">(i)</span> tiene al menos
                18 años, tiene al menos la edad legalmente requerida en la
                jurisdicción en la que reside y es capaz de celebrar contratos
                vinculantes; y <span className="font-semibold mr-1">(ii)</span>{" "}
                tiene el derecho, la autoridad y la capacidad de celebrar este
                Acuerdo y cumplir con los términos y condiciones de este
                Acuerdo, y que así lo cumplirá. Cuando celebra este Acuerdo en
                nombre de una empresa u otra organización, declara y garantiza
                que tiene autoridad para actuar en nombre de esa entidad y para
                vincular a esa entidad con este Acuerdo.
              </p>
              <p className="text-[11px] md:text-[12px]  lg:text-[13px] leading-tight mt-5 font-monts text-justify lg:mt-5 lg:px-10  ">
                En la medida permitida y excepto cuando lo prohíba la ley
                aplicable, estos Términos de Uso incluyen:
              </p>
              <ul className="text-[11px] md:text-[12px]  lg:text-[13px]  leading-tight ml-3 mt-1 text-justify lg:mt-1 lg:px-10 font-monts">
                <li className="mt-4 flex ">
                  <span>
                    <TbPointFilled size={10} />
                  </span>
                  Su acuerdo de que cualquiera de las partes puede obligar al
                  arbitraje vinculante para la mayoría de los tipos de disputas,
                  y su acuerdo de someterse a un proceso informal de resolución
                  de disputas durante al menos 30 días antes del inicio de
                  cualquier reclamación.
                </li>
                <li className="mt-1 flex ">
                  <span>
                    <TbPointFilled size={10} />
                  </span>
                  Su acuerdo de que no se pueden adjudicar reclamaciones
                  colectivamente.
                </li>
                <li className="mt-1 flex ">
                  <span>
                    <TbPointFilled size={10} />
                  </span>
                  Su reconocimiento y acuerdo con las políticas de cancelación y
                  tarifas de cancelación de Ontu.
                </li>
                {/* <li className="mt-1 flex flex-row">
                  <span>
                    <TbPointFilled size={10} />
                  </span>
                  <span> La única responsabilidad de Ontu con respecto a las disputas se establece en la Garantía de Felicidad Ontu. Las referencias de Servicios Profesionales, Paneles Solares, Sistemas Fotovoltaicos, Calentadores Solares y los planes para Pymes y administradores, </span> <span className="font-semibold mr-1">NO</span><span>
                  están cubiertas por la Garantía de Felicidad Ontu.
                    </span>
                </li> */}
                <li className="mt-1 flex ">
                  <span>
                    <TbPointFilled size={10} />
                  </span>
                  Su acuerdo para indemnizar a Ontu de reclamaciones debido a su
                  uso, mal uso o incapacidad para usar la Plataforma Ontu, la
                  Mercancía y/o los Servicios Profesionales, su violación de
                  este Acuerdo, las leyes aplicables o los derechos de terceros,
                  y/o el contenido o la información enviados desde su cuenta a
                  la Plataforma Ontu.
                </li>
                <li className="mt-1 flex ">
                  <span>
                    <TbPointFilled size={10} />
                  </span>
                  Su consentimiento para cualquier modificación o enmienda a
                  este Acuerdo. Su consentimiento para la recopilación, uso,
                  intercambio y transferencia de sus datos como se describe en
                  el Aviso de Privacidad actualizada de vez en cuando.
                </li>
              </ul>
              <p className="text-[11px] md:text-[12px]  lg:text-[13px] font-semibold leading-tight ml-8 mt-5 font-monts text-justify lg:mt-5 lg:px-10  ">
                1. Plataforma Ontu, Aplicación Ontu;{" "}
                <span className="text-ontu font-semibold mr-1">
                  <a href="www.ontu.mx/aviso-de-privacidad">www.ontu.mx</a>
                </span>
              </p>
              <p className="text-[11px] md:text-[12px]  lg:text-[13px] leading-tight mt-5 font-monts text-justify lg:mt-5 lg:px-10  ">
                <span className="font-semibold mr-1">a.</span>La Plataforma Ontu
                es una plataforma tecnológica que se pone a disposición de
                ciertas personas que buscan obtener servicios a domicilio
                ("Solicitantes") que Ontu cumple utilizando a personal propio y
                proveedores terceros que cumplen y habitualmente se dedican a la
                prestación de los servicios solicitados. ("Profesionales") Los
                servicios solicitados por los Solicitantes, serán completados
                por los Profesionales, se denominarán en lo sucesivo{" "}
                <span className="font-semibold mr-1">
                  "Servicios Profesionales"
                </span>
                . Los Servicios Profesionales también pueden incluir la entrega,
                instalación y/o montaje de muebles y/u otros artículos obtenidos
                a través de la Plataforma Ontu o de un tercero{" "}
                <span className="font-semibold mr-1">("Mercancía")</span>.
              </p>
              <p className="text-[11px] md:text-[12px]  lg:text-[13px] font-semibold leading-tight ml-8 mt-5 font-monts text-justify lg:mt-5 lg:px-10  ">
                2. Información personal; cuentas de usuario.
              </p>
              <p className="text-[11px] md:text-[12px]  lg:text-[13px] leading-tight mt-5 font-monts text-justify lg:mt-5 lg:px-10  ">
                <span className="font-semibold mr-1">
                  a. Recopilación de su información personal.
                </span>
                Algunos de los materiales disponibles en la Plataforma Ontu
                pueden requerir registro previo para acceder. Si decide acceder
                a dichos materiales, se le pedirá que se registre. Podemos
                negarnos a concederle, y no puede usar, un nombre de usuario,
                dirección de correo electrónico o nombre de usuario que ya esté
                siendo utilizado por otra persona; que pueda interpretarse como
                una suplantación de otra persona; que pertenezca a otra persona;
                que viole la propiedad intelectual u otros derechos de cualquier
                persona; que sea ofensivo; o que rechacemos. Cuando complete un
                registro con nosotros, se le pedirá que proporcione cierta
                información personal. Usted acepta que dicha información será
                verdadera, precisa y completa, y que actualizará esta
                información rápidamente cuando cambie. Si proporciona cualquier
                información que es falsa o inexacta, no actual o incompleta, o
                si sospechamos que su información es falsa o inexacta, no actual
                o incompleta, podemos, a nuestra entera discreción, suspender o
                terminar su derecho de acceso a cualquier material para el que
                se requiera registro. Cualquier información de identificación
                personal proporcionada a continuación estará sujeta a los
                términos del{" "}
                <span className="text-ontu font-semibold mr-1">
                  <a href="www.ontu.mx/aviso-de-privacidad">
                    Aviso de Privacidad.{" "}
                  </a>
                </span>
              </p>
              <p className="text-[11px] md:text-[12px]  lg:text-[13px] leading-tight mt-5 font-monts text-justify lg:mt-5 lg:px-10  ">
                <span className="font-semibold mr-1">
                  b. Cuenta, contraseña y seguridad.
                </span>{" "}
                Usted es el único usuario autorizado de su cuenta. Usted es
                responsable de mantener la confidencialidad de cualquier nombre
                de usuario, contraseña y cuenta proporcionada por usted o por
                nosotros para acceder a la Plataforma Ontu. Usted es el único y
                plenamente responsable de todas las actividades que ocurran bajo
                su contraseña o cuenta, excepto que Ontu puede, en ciertas
                circunstancias, acceder a su cuenta para realizar los cambios
                que solicite, como reprogramar una cita de Servicio. Ontu no
                tiene control sobre el uso de la cuenta de ningún Usuario por
                parte del Usuario o de terceros y renuncia expresamente a
                cualquier responsabilidad derivada de ella. Si sospecha que
                alguna parte no autorizada puede estar usando su contraseña o
                cuenta o sospecha cualquier otra violación de la seguridad, debe
                contactarnos inmediatamente. Nada en esta sección afectará los
                derechos de Ontu a limitar o terminar el uso de la Plataforma
                Ontu.
              </p>
              <p className="text-[11px] md:text-[12px]  lg:text-[13px] leading-tight mt-5 font-monts text-justify lg:mt-5 lg:px-10  ">
                <span className="font-semibold mr-1">
                  c. Prueba de identidad.
                </span>
                A Usted nos proporcionará la prueba de identidad que podamos
                solicitar razonablemente de vez en cuando.
              </p>
              <p className="text-[11px] md:text-[12px]  lg:text-[13px] leading-tight mt-5 font-monts text-justify lg:mt-5 lg:px-10  ">
                <span className="font-semibold mr-1">
                  d. Mensajes de texto y llamadas telefónicas.
                </span>
              </p>
              <p className="text-[11px] md:text-[12px]  lg:text-[13px] leading-tight mt-5 font-monts text-justify lg:mt-5 lg:px-10 ml-3 ">
                <span className="font-semibold mr-1">(i). General:</span>Al
                utilizar la Plataforma Ontu, usted consiente expresamente y
                acepta aceptar y recibir comunicaciones nuestras, incluso por
                fax, mensajes de texto (SMS), llamadas, notificaciones push y
                otros medios razonables en cualquiera de sus números de contacto
                o direcciones, incluso si aparece en cualquier lista federal,
                estatal, provincial u otra lista aplicable de "No Llamar", para
                que podamos proporcionar los servicios establecidos en la
                Plataforma Ontu, para dar servicio a su cuenta, para abordar
                razonablemente asuntos relacionados con su cuenta, incluyendo
                pero no limitado a notificarle o confirmar las citas que ha
                programado, o para otros fines razonablemente relacionados con
                su solicitud de servicio y nuestro negocio, incluidas las
                comunicaciones relacionadas con el marketing. Al consentir que
                Ontu se ponga en contacto con nosotros, usted entiende y acepta
                que puede recibir comunicaciones, incluidas comunicaciones de
                marketing generadas por sistemas de marcado telefónico
                automático y/o que entregarán mensajes pre-grabados, enviados
                por o en nombre de Ontu, sus filiales, subsidiarias, matrices
                y/o Colaboradores Profesionales, incluyendo pero no limitado a:
                comunicaciones operativas sobre su cuenta o uso de la Plataforma
                o Servicios Ontu, actualizaciones sobre características nuevas y
                existentes en la Plataforma Ontu, comunicaciones sobre
                promociones administradas por nosotros y noticias sobre
                desarrollos de Ontu y de la industria. Para ciertos Servicios
                Profesionales, también autoriza expresamente a Ontu a enviarle
                una llamada pre-grabada automatizada confirmando su solicitud de
                Servicios Profesionales, junto con llamadas de Colaboradores
                Profesionales que pueden ayudarlo con su solicitud al número de
                teléfono fijo o móvil que proporcionó, y usted entiende que Ontu
                o los Profesionales pueden utilizar tecnología telefónica
                automatizada (incluidos mensajes marcados automáticamente y
                pre-grabados) para llamarlo y que no se requiere su
                consentimiento para comprar productos o servicios. Usted acepta
                que al utilizar la Plataforma Ontu y solicitar Servicios
                Profesionales, está entrando en una relación comercial con Ontu
                y/o Colaboradores/Profesionales y, por lo tanto, acepta ser
                contactado por Ontu y/o Colaboradores/Profesionales. Usted
                reconoce que no está obligado a dar su consentimiento para
                recibir mensajes promocionales o llamadas telefónicas como
                condición para usar la Plataforma Ontu o los Servicios. Si un
                número de contacto que nos ha proporcionado ya no es su número,
                acepta notificarnos de inmediato que ya no se le puede contactar
                con ese número. Usted declara que ha recibido, y está autorizado
                a transmitirnos, el consentimiento de cualquier usuario
                autorizado en su cuenta para ser contactado por nosotros como se
                describe en esta Sección. Usted acepta que todos los
                consentimientos proporcionados en esta Sección sobrevivirán a la
                cancelación de su cuenta. Puede optar por no recibir mensajes de
                texto o llamadas promocionales o de marketing de Ontu en
                cualquier momento.
              </p>
              <p className="text-[11px] md:text-[12px]  lg:text-[13px] leading-tight mt-5 font-monts text-justify lg:mt-5 lg:px-10 ml-3 ">
                <span className="font-semibold mr-1">(ii). Grabación:</span>{" "}
                Usted reconoce que Ontu o sus proveedores de servicios externos
                pueden grabar llamadas de servicio al cliente después de
                notificarle y con su consentimiento, con el fin de ayudarlo
                cuando se ponga en contacto con nuestros servicios de atención
                al cliente. Durante este proceso, Ontu y su proveedor de
                servicios recibirán en tiempo real y almacenarán datos de
                llamadas, incluida la fecha y hora del mensaje de llamada o
                texto (SMS), los números de teléfono de las partes y el
                contenido de los mensajes de texto (SMS). Usted acepta el
                proceso, el uso y divulgación por parte de Ontu de estos datos
                de llamada para sus fines comerciales legítimos.
              </p>
              <p className="text-[11px] md:text-[12px]  lg:text-[13px] leading-tight mt-5 font-monts text-justify lg:mt-5 lg:px-10 ml-3 ">
                <span className="font-semibold mr-1">
                  (iii). Disposiciones específicas para la mensajería de texto:
                  i) En general:
                </span>
                Usted acepta recibir mensajes recurrentes de texto promocionales
                y de marketing personalizados (por ejemplo, SMS y MMS) (por
                ejemplo, recordatorios de carrito) de Ontu, incluidos mensajes
                de texto que se pueden enviar utilizando un sistema de marcado
                telefónico automático, al número de teléfono móvil que
                proporcionó al registrarse o a cualquier número que usted
                designe. El consentimiento para recibir mensajes de texto de
                mercadotecnia automatizados no es una condición de ninguna
                compra. Pueden aplicarse tarifas de mensajes y datos. La
                frecuencia de los mensajes variará. Ontu se reserva el derecho
                de alterar la frecuencia de los mensajes enviados en cualquier
                momento, para aumentar o disminuir el número total de mensajes
                enviados. Ontu también se reserva el derecho de cambiar el
                código corto o el número de teléfono desde el que se envían los
                mensajes y se lo notificaremos cuando lo hagamos. Es posible que
                no todos los dispositivos móviles o teléfonos sean compatibles y
                que nuestros mensajes no sean entregables en todas las áreas.
                Ontu, sus proveedores de servicios y los operadores móviles
                compatibles con el programa no son responsables de los mensajes
                retrasados o no entregados. Podemos entregar mensajes a los
                siguientes operadores de telefonía móvil: AT&T, Telcel, Movistar
                y Virgin Mobile. Envíe un mensaje de texto con la palabra clave
                STOP, PARAR, CANCELAR, o QUIT a nuestro código corto o en
                respuesta a un mensaje de texto para cancelar. Después de enviar
                un mensaje de texto STOP, PARAR, CANCELAR, o QUIT a nuestro
                código corto o en respuesta a un mensaje de texto, recibirá un
                mensaje adicional confirmando que su solicitud ha sido
                procesada. Usted reconoce que nuestra plataforma de mensajes de
                texto puede no reconocer y responder a las solicitudes de
                cancelación de suscripción que no incluyen los comandos de
                palabras clave STOP, PARAR, CANCELAR, o QUIT y acepta que Ontu y
                sus proveedores de servicios no tendrán ninguna responsabilidad
                por no cumplir con dichas solicitudes. Si se da de baja de uno
                de nuestros programas de mensajes de texto, puede continuar
                recibiendo mensajes de texto de Ontu a través de cualquier otro
                programa al que se haya unido hasta que se dé de baja por
                separado de esos programas. Usted reconoce que al optar por no
                recibir mensajes de texto (SMS) de Ontu y los Colaboradores
                Profesionales de servicios, su uso de los servicios prácticos
                puede verse afectado. Ontu y sus afiliados pueden ver,
                almacenar, acceder y divulgar mensajes intercambiados entre
                usted y los consumidores transmitidos a través de la plataforma
                de mensajería de Ontu.
              </p>
              <p className="text-[11px] md:text-[12px]  lg:text-[13px] leading-tight mt-5 font-monts text-justify lg:mt-5 lg:px-10 ml-3 ">
                <span className="font-semibold mr-1">
                  (iv). Información falsa:
                </span>{" "}
                INGRESAR INFORMACIÓN FALSA A SABIENDAS, INCLUYENDO PERO NO
                LIMITADO A NOMBRE, NÚMERO DE TELÉFONO, DIRECCIÓN O DIRECCIÓN DE
                CORREO ELECTRÓNICO ES UN ASUNTO MUY GRAVE Y FRAUDULENTO QUE
                PODRÍA RESULTAR EN COSTOS Y DAÑOS SIGNIFICATIVOS, INCLUIDA LA
                INVASIÓN DE LOS DERECHOS DE PRIVACIDAD, A ONTU Y A LOS
                COLABORADORES PROFESIONALES, Y A LOS CONSUMIDORES, ASÍ COMO LA
                PÉRDIDA DE TIEMPO, ESFUERZO Y GASTOS QUE RESPONDAN Y PERSIGUEN
                DICHA INFORMACIÓN Y SOLICITUD FALSAS, Y ADEMÁS, PODRÍA RESULTAR
                EN MULTAS Y SANCIONES REGULATORIAS. EN CONSECUENCIA, SI A
                SABIENDAS INGRESA INFORMACIÓN FALSA EN UNA SOLICITUD DE
                SERVICIO, INCLUIDO, ENTRE OTROS, EL NOMBRE, LA DIRECCIÓN DE
                CORREO ELECTRÓNICO, LA DIRECCIÓN FÍSICA O EL NÚMERO DE TELÉFONO
                O UN NOMBRE, DIRECCIÓN, CORREO ELECTRÓNICO O TELÉFONO ALEATORIO
                O INVENTADO, USTED ACEPTA INDEMNIZAR COMPLETAMENTE Y SER
                RESPONSABLE ANTE ONTU Y CADA COLABORADOR PROFESIONAL QUE BRINDE
                PROPIETARIO DE LA DIRECCIÓN DE CORREO ELECTRÓNICO O NÚMERO DE
                TELÉFONO, ETC.), POR PRESENTACIÓN INCORRECTA, MÁS CUALQUIER
                ABOGADO O GASTO LEGAL QUE SE REQUIERA, LOS COSTOS Y GASTOS
                RELACIONADOS, SI CORRESPONDE, O (2) LOS DAÑOS REALES, DIRECTOS,
                PUNITIVOS Y CONSECUENTES, Y CUALQUIER MULTA O SANCIÓN
                REGULATORIA O JUDICIAL QUE PUEDA DERIVARSE DE DICHA ACTIVIDAD
                INTENCIONAL, ENGAÑOSA, DAÑINA Y FRAUDULENTA, ADEMÁS DE
                HONORARIOS LEGALES RAZONABLES, COSTOS Y GASTOS RELACIONADOS, QUE
                SIEMPRE SEAN MAYORES.
              </p>
              <p className="text-[11px] md:text-[12px]  lg:text-[13px] leading-tight mt-5 font-monts text-justify lg:mt-5 lg:px-10 ml-3 ">
                <span className="font-semibold mr-1">
                  (v). Correos electrónicos
                </span>
                Ontu puede enviarle confirmación y otros correos electrónicos
                transaccionales relacionados con los Servicios Profesionales.
                Ontu y sus filiales, subsidiarias y matriz también pueden
                enviarle correos electrónicos sobre otros servicios que creemos
                que podrían interesarle ("Correos electrónicos promocionales").
                Puede darse de baja de los correos electrónicos promocionales en
                cualquier momento haciendo clic en darse de baja en nuestras
                comunicaciones por correo electrónico o poniéndose en contacto
                con nosotros.
              </p>

              <p className="text-[11px] md:text-[12px]  lg:text-[13px] font-semibold leading-tight ml-8 mt-5 font-monts text-justify lg:mt-5 lg:px-10  ">
                3. Pagos; Garantía de Felicidad Ontu; Reclamaciones.
              </p>
              <p className="text-[11px] md:text-[12px]  lg:text-[13px] leading-tight mt-5 font-monts text-justify lg:mt-5 lg:px-10  ">
                <span className="font-semibold mr-1">a. Pagos. </span>Los
                solicitantes están obligados a pagar por adelantado por aquellos
                Servicios Profesionales, Servicios de Reserva y/o Mercancías que
                OBTENGAN a través de la Plataforma Ontu ("Pagos"). Antes del
                Servicio Profesional programado, cargaremos la tarjeta de
                crédito o debito del Solicitante de acuerdo con la cantidad que
                el Solicitante haya acordado en la Plataforma Ontu con respecto
                a aquellos Servicios Profesionales y/o Mercancías que el
                Solicitante ha pedido, y por todas las compras y pagos por
                costos de reembolso, tarifas, gastos o impuestos aplicables
                asociados con un Servicio Profesional así como la Tarifa de
                Utilización de servicios de terceros para procesar la
                información de la tarjeta de crédito o debito. Al aceptar este
                Acuerdo, usted está dando permiso a Ontu (o a un procesador de
                pagos externo en nombre de Ontu) para cargar en su tarjeta de
                crédito registrada, tarjeta de débito u otros métodos de pago
                aprobados por las tarifas que debe Ontu. Dependiendo de la
                transacción que haya seleccionado o de los servicios
                solicitados, Ontu puede cobrarle de forma única o recurrente.
                Toda la información que proporcione en relación con una compra o
                transacción u otra interacción de transacción monetaria con los
                Servicios Profesionales debe ser precisa, completa y
                actualizada. Usted acepta pagar todos los cargos incurridos por
                los usuarios de su tarjeta de crédito, tarjeta de débito u otro
                método de pago utilizado en relación con una compra o
                transacción u otra interacción de transacción monetaria con Ontu
                a los precios vigentes cuando se incurra en dichos cargos. Nos
                reservamos el derecho, a nuestra entera discreción, de retener
                la tarjeta de crédito del Solicitante para una transacción de
                Servicio Profesional ordenada o completada. Setenta y dos (72)
                horas después de que se complete un Servicio Profesional, si no
                hay queja por parte del Solicitante, marcaremos el Servicio
                Profesional como cerrado. Excepto por los Servicios
                Profesionales que se solicitan a través de terceros o aliados a
                Ontu, todos los Pagos de los Solicitantes deben hacerse a través
                de la Plataforma Ontu. Cualquier Servicio Profesional que se
                solicite a través de terceros o aliados Ontu, cualquier saldo no
                pagado o cualquier Servicio Profesional programado u obtenido
                fuera de la Plataforma Ontu no está sujeto a nuestra Garantía de
                Felicidad. No se generarán reembolsos una vez realizado el cargo
                a la tarjeta de crédito o débito o en su caso se haya realizado
                un deposito en efectivo a nuestra cuenta, excepto que, a nuestra
                entera discreción, se pueden otorgar reembolsos o créditos en
                circunstancias de fuerza mayor, como resultado de promociones
                especificas, o para corregir algún error de nuestra parte. Si
                bien haremos esfuerzos comercialmente razonables para garantizar
                la seguridad de todas la tarjeta de crédito o débito y toda otra
                información personal, renunciamos expresamente a cualquier
                responsabilidad por cualquier daño que pueda resultar en caso de
                que se divulga cualquier información a terceros, y usted acepta
                eximirnos de cualquier daño que pueda resultar de ello. Los
                solicitantes serán responsables de todos los impuestos sobre las
                transacciones sobre los Servicios Profesionales proporcionados
                (excepto los impuestos basados en los ingresos de Ontu). Si
                determinamos que sus acciones o rendimiento pueden resultar en
                devoluciones, contra cargos, reclamos, disputas, violaciones de
                nuestros términos o políticas u otros riesgos para Ontu o
                terceros, entonces Ontu puede retener cualquier pago suyo
                mientras determinemos que persistan los riesgos relacionados con
                Ontu o terceros. Para cualquier cantidad que determinemos que
                nos debe, podemos (i) compensar cualquier cantidad que usted nos
                pague (en reembolso o de otra manera) con cualquier pago que
                podamos hacerle o monto que podamos deberle; (ii) facturarle las
                cantidades que se nos adeuden, en cuyo caso pagará las
                cantidades facturadas al recibirlas; (iii) revertir cualquier
                crédito a su cuenta Si determinamos que su cuenta se ha
                utilizado para participar en actividades engañosas, fraudulentas
                o ilegales, o para violar repetidamente este Acuerdo, entonces
                podemos, a nuestra entera discreción, retenerle permanentemente
                cualquier pago.
              </p>
              <p className="text-[11px] md:text-[12px]  lg:text-[13px] leading-tight mt-5 font-monts text-justify lg:mt-5 lg:px-10  ">
                <span className="font-semibold mr-1">
                  b. Declinación de pago.{" "}
                </span>
                Las Bases de Datos que contienen Datos Personales se encuentran
                resguardadas dentro de ONTU. Las Bases de Datos resguardadas en
                soporte electrónico y que permiten un acceso remoto, sólo pueden
                ser consultadas por el personal o los prestadores de servicios
                de ONTU, mediante el uso de claves de usuarios y contraseñas que
                deben ser modificados periódicamente.
              </p>
              <p className="text-[11px] md:text-[12px]  lg:text-[13px] leading-tight mt-5 font-monts text-justify lg:mt-5 lg:px-10  ">
                <span className="font-semibold mr-1">
                  c. Tarifa de servicio.
                </span>{" "}
                La tarifa de un servicio profesional ("tarifa de servicio")
                determinada por Ontu depende de factores, como la ubicación y la
                frecuencia con la que se solicita un servicio recurrente, y las
                condiciones de pago pueden aumentar. Por lo tanto, el mismo
                Servicio Profesional puede costar más en una ubicación diferente
                o si el Servicio Profesional se ordena con menos frecuencia. Sin
                embargo, se le notificará antes de dicho aumento en la tarifa de
                servicio con suficiente antelación para permitirle cancelar el
                Servicio si así lo desea.
              </p>

              <p className="text-[11px] md:text-[12px]  lg:text-[13px] leading-tight mt-5 font-monts text-justify lg:mt-5 lg:px-10  ">
                <span className="font-semibold mr-1">
                  d. Garantía de Felicidad Ontu
                </span>
              </p>
              <p className="text-[11px] md:text-[12px]  lg:text-[13px] leading-tight mt-5 font-monts text-justify lg:mt-5 lg:px-10 ml-3 ">
                <span className="font-semibold mr-1">(i). </span> La Garantía de
                Felicidad Ontu proporciona ciertas protecciones adicionales
                limitadas proporcionadas por ONTU S.A.P.I. DE C.V. Sujeto a las
                siguientes exclusiones y a los términos y condiciones y
                limitaciones del presente documento, si no está satisfecho con
                el desempeño de un Servicio Profesional, Ontu, a su entera
                discreción, (a) hará que se vuelva a realizar el Servicio
                Profesional específico o (b) compensará a los Solicitantes la
                cantidad más baja de: (1) sujeto a las exclusiones a
                continuación, hasta MN $20,000.00 (veinte mil pesos) por
                pérdidas derivadas de daños a pisos y artículos que contienen
                granito, mármol o cualquier otro trabajos en piedra como
                resultado directo de la negligencia de un profesional durante la
                prestación de un servicio profesional, la cantidad se limitará a
                hasta $20.000.00 veinte mil pesos mexicanos; El Solicitante del
                Servicio es elegible para la Garantía de Felicidad Ontu siempre
                que el Solicitante haya contratado un servicio de Ontuman Plus e
                informe del problema dentro de las cuarenta y ocho (48) horas
                posteriores a la cita de Servicio Profesional a nuestro centro
                de atención a cliente. Si el Solicitante del Servicio no informa
                del problema dentro de las cuarenta y ocho (48) horas
                posteriores a la finalización del Servicio Profesional, la
                reclamación no es elegible para la Garantía de Felicidad Ontu.
              </p>
              <p className="text-[11px] md:text-[12px]  lg:text-[13px] leading-tight mt-5 font-monts text-justify lg:mt-5 lg:px-10 ml-3 ">
                <span className="font-semibold mr-1">(ii). </span> Si cuenta con
                un seguro que lo cubriría en caso de una reclamación, como un
                seguro de inquilino, un seguro de propietario, un seguro de
                automóvil o una póliza general ("Seguro Personal"), acepta que
                su Seguro Personal es primario y que la Garantía de Felicidad
                Ontu es secundaria. La Garantía de Felicidad Ontu solo
                compensará las pérdidas en la medida en que no esté cubierta por
                su Seguro Personal y solo según lo permitido en el presente
                documento.
              </p>
              <p className="text-[11px] md:text-[12px]  lg:text-[13px] leading-tight mt-5 font-monts text-justify lg:mt-5 lg:px-10 ml-3 ">
                <span className="font-semibold mr-1">(iii). </span> Un
                Solicitante estará cubierto por la Garantía de Felicidad Ontu
                para un Servicio Profesional, sujeto a las exclusiones en la sub
                sección (v) a continuación, siempre que:
              </p>
              <ul className="text-[11px] md:text-[12px]  lg:text-[13px]  leading-tight ml-5 mt-1 text-justify lg:mt-1 lg:px-10 font-monts">
                <li className="mt-4 flex ">
                  <span>
                    <TbPointFilled size={10} />
                  </span>
                  El Servicio Profesional se haya pagado en su totalidad a
                  través de la Plataforma Ontu;
                </li>
                <li className="mt-1 flex ">
                  <span>
                    <TbPointFilled size={10} />
                  </span>
                  El Solicitante no ha violado este Acuerdo;
                </li>
                <li className="mt-1 flex ">
                  <span>
                    <TbPointFilled size={10} />
                  </span>
                  El Solicitante ha informado de la reclamación dentro de las 48
                  horas posteriores a la finalización del Servicio Profesional;
                </li>
                <li className="mt-1 flex ">
                  <span>
                    <TbPointFilled size={10} />
                  </span>
                  La cuenta de Ontu del solicitante está al día sin saldos
                  pendientes adeudados a Ontu;
                </li>
                <li className="mt-1 flex ">
                  <span>
                    <TbPointFilled size={10} />
                  </span>
                  El Solicitante ha identificado artículos frágiles y otros
                  artículos sensibles y ha comunicado la ubicación e informado
                  de esos artículos al Colaborador Profesional antes del inicio
                  del Servicio Profesional; y
                </li>
                <li className="mt-1 flex ">
                  <span>
                    <TbPointFilled size={10} />
                  </span>
                  El Solicitante ha contabilizado y asegurado todos los objetos
                  de valor antes del inicio de un Servicio Profesional.
                </li>
              </ul>
              <p className="text-[11px] md:text-[12px]  lg:text-[13px] leading-tight mt-5 font-monts text-justify lg:mt-5 lg:px-10 ml-3 ">
                <span className="font-semibold mr-1">(iv). </span> ¿Qué está
                excluido de la Garantía de Felicidad Ontu? La "Garantía de
                Felicidad Ontu" no cubre lo siguiente:
              </p>
              <ul className="text-[11px] md:text-[12px]  lg:text-[13px]  leading-tight ml-5 mt-1 text-justify lg:mt-1 lg:px-10 font-monts">
                <li className="mt-4 flex ">
                  <span>
                    <TbPointFilled size={10} />
                  </span>
                  Cualquier servicio profesional que no esté reservado y pagado
                  directamente en la Plataforma de Ontu;
                </li>
                <li className="mt-1 flex ">
                  <span>
                    <TbPointFilled size={10} />
                  </span>
                  Pérdidas derivadas de actos de la naturaleza, desastres
                  naturales, incluyendo, pero no limitado a, contaminación,
                  terremotos y eventos relacionados con el clima, como huracanes
                  y tornados, epidemias y pandemias.
                </li>
                <li className="mt-1 flex ">
                  <span>
                    <TbPointFilled size={10} />
                  </span>
                  Pérdidas derivadas de la interrupción del negocio, pérdida de
                  mercado, pérdida de ingresos y/o pérdida de uso;
                </li>
                <li className="mt-1 flex ">
                  <span>
                    <TbPointFilled size={10} />
                  </span>
                  Pérdidas por daños a la propiedad y robo que excedan el valor
                  original y/o el valor de reemplazo de dichos bienes, menos
                  cualquier depreciación estándar;
                </li>
                <li className="mt-1 flex ">
                  <span>
                    <TbPointFilled size={10} />
                  </span>
                  Pérdidas derivadas de los actos u omisiones de un Solicitante
                  o de un tercero;
                </li>
                <li className="mt-1 flex ">
                  <span>
                    <TbPointFilled size={10} />
                  </span>
                  Pérdidas derivadas de la negligencia o mala conducta de un
                  tercero;
                </li>
                <li className="mt-1 flex ">
                  <span>
                    <TbPointFilled size={10} />
                  </span>
                  Pérdidas derivadas de defectos de un fabricante o de un
                  producto;
                </li>
                <li className="mt-1 flex ">
                  <span>
                    <TbPointFilled size={10} />
                  </span>
                  Pérdidas por daños o condiciones preexistentes del artículo o
                  propiedad;
                </li>
                <li className="mt-1 flex ">
                  <span>
                    <TbPointFilled size={10} />
                  </span>
                  Pérdidas derivadas de artículos suministrados por el
                  Solicitante o debido a recomendaciones del Solicitante (por
                  ejemplo, si un fabricante recomienda colocar muebles en una
                  pared y un Solicitante se niega a colocar muebles, etc.);
                </li>
                <li className="mt-1 flex ">
                  <span>
                    <TbPointFilled size={10} />
                  </span>
                  Pérdidas derivadas de inundaciones y/o daños por agua,
                  incluido moho, hongos o bacterias;
                </li>
                <li className="mt-1 flex ">
                  <span>
                    <TbPointFilled size={10} />
                  </span>
                  Pérdidas derivadas de productos que contienen materiales
                  peligrosos o dañinos, actos de terrorismo, responsabilidad por
                  productos defectuosos o contaminación;
                </li>
                <li className="mt-1 flex ">
                  <span>
                    <TbPointFilled size={10} />
                  </span>
                  Pérdidas de efectivo, tarjetas de regalo de terceros y
                  valores;
                </li>
                <li className="mt-1 flex ">
                  <span>
                    <TbPointFilled size={10} />
                  </span>
                  Pérdidas como resultado de un hecho ilícito intencional por
                  parte de un colaborador profesional;
                </li>
                <li className="mt-1 flex ">
                  <span>
                    <TbPointFilled size={10} />
                  </span>
                  Pérdidas derivadas del desgaste normal;
                </li>
                <li className="mt-1 flex ">
                  <span>
                    <TbPointFilled size={10} />
                  </span>
                  Pérdidas por artículos que conservan su funcionalidad; (por
                  ejemplo, daños cosméticos menores, desgaste ordinario, un
                  televisor que tiene un rasguño en el bisel);
                </li>
                <li className="mt-1 flex ">
                  <span>
                    <TbPointFilled size={10} />
                  </span>
                  Pérdidas por bellas artes, que incluyen, entre otras cosas,
                  pinturas, grabados, fotos impresas, imágenes, tapices, vidrio
                  raro o artístico, ventanas de vidrio artístico, alfombras
                  valiosas, estatuas, esculturas, muebles antiguos, joyas
                  antiguas, bric-a-brac, porcelanas, automóviles antiguos,
                  monedas, sellos, otros coleccionables, colecciones, pieles,
                  joyas, piedras preciosas, metales preciosos y propiedades
                  similares de rareza, valor histórico;
                </li>
                <li className="mt-1 flex ">
                  <span>
                    <TbPointFilled size={10} />
                  </span>
                  Pérdidas por daños más allá del área dañada específica (por
                  ejemplo, si el piso sufre daños, cualquier pérdida se limita
                  al costo de reemplazo de los pies cuadrados que fueron dañados
                  después de deducir por obsolescencia y depreciación física);
                </li>
                <li className="mt-1 flex ">
                  <span>
                    <TbPointFilled size={10} />
                  </span>
                  Daños por pérdida de uso, incluida, entre otros, la pérdida de
                  uso como bienes, muebles y los costos de cualquier
                  almacenamiento, movimiento y seguro de muebles en relación con
                  la pérdida de uso;
                </li>
                <li className="mt-1 flex ">
                  <span>
                    <TbPointFilled size={10} />
                  </span>
                  Pérdidas excluidas de conformidad con la Sección 17 del
                  Acuerdo;
                </li>
                <li className="mt-1 flex ">
                  <span>
                    <TbPointFilled size={10} />
                  </span>
                  Pérdidas basadas en valor intangible sentimental y/o
                  indocumentado;
                </li>
                <li className="mt-1 flex ">
                  <span>
                    <TbPointFilled size={10} />
                  </span>
                  Pérdidas o daños asociados con la adquisición, acceso,
                  destrucción y/o pérdida no autorizados de datos electrónicos,
                  incluidos, entre otros, películas, registros, manuscritos,
                  dibujos o fotografías, datos, información, grabaciones de
                  audio o vídeo, archivos, hechos, programas u otros materiales
                  almacenados como o sobre, creados o utilizados en, o
                  transmitidos hacia o desde, software informático, incluidos
                  sistemas y aplicaciones, discos duros o disquetes, CD-ROM,
                  cintas, unidades, células, dispositivos de procesamiento de
                  datos, almacenamiento en la nube o cualquier otro medio que se
                  utilice con equipos controlados electrónicamente;
                </li>
                <li className="mt-1 flex ">
                  <span>
                    <TbPointFilled size={10} />
                  </span>
                  Pérdidas relacionadas con reparaciones fuera del área donde se
                  realizaron los Servicios Profesionales;
                </li>
                <li className="mt-1 flex ">
                  <span>
                    <TbPointFilled size={10} />
                  </span>
                  Pérdidas de mascotas, responsabilidad personal o daños a áreas
                  compartidas o comunes;
                </li>
                <li className="mt-1 flex ">
                  <span>
                    <TbPointFilled size={10} />
                  </span>
                  Pérdidas derivadas de los gastos de envío y/o el envío de
                  artículos de reemplazo y/o impuestos incurridos en la compra
                  de los artículos originales y/o de reemplazo;
                </li>
                <li className="mt-1 flex ">
                  <span>
                    <TbPointFilled size={10} />
                  </span>
                  Pérdidas que requieran un informe policial válido, si Ontu lo
                  solicita y no se entrega en 48 horas; y pérdidas con
                  documentación insuficiente; y
                </li>
                <li className="mt-1 flex ">
                  <span>
                    <TbPointFilled size={10} />
                  </span>
                  Pérdidas que ocurran después o no estén relacionadas con el
                  desempeño de un Servicio Profesional;
                </li>
                <li className="mt-1 flex ">
                  <span>
                    <TbPointFilled size={10} />
                  </span>
                  Pérdidas relacionadas con productos o servicios, o usos de
                  cualquiera de ellos, que están prohibidos por la ley;
                </li>
                <li className="mt-1 flex ">
                  <span>
                    <TbPointFilled size={10} />
                  </span>
                  Pérdidas debidas a defectos imprevisibles o latentes en los
                  locales;
                </li>
                <li className="mt-1 flex ">
                  <span>
                    <TbPointFilled size={10} />
                  </span>
                  Pérdidas relacionadas con servicios no reservados
                  explícitamente a través de la Plataforma Ontu; y
                </li>
                <li className="mt-1 flex ">
                  <span>
                    <TbPointFilled size={10} />
                  </span>
                  Pérdidas notificadas por terceros.
                </li>
              </ul>
              <p className="text-[11px] md:text-[12px]  lg:text-[13px] leading-tight mt-5 font-monts text-justify lg:mt-5 lg:px-10 ml-3 ">
                <span className="font-semibold mr-1">
                  (v). ¿Cómo presento una reclamación?{" "}
                </span>
                El primer informe de una reclamación debe hacerse dentro de las
                48 horas posteriores a la finalización del Servicio Profesional.
                Después del primer informe, se le pedirá que complete el
                formulario de reclamación completo dentro de los 7 días
                posteriores a su recepción. Si no completa el formulario de
                reclamación en su totalidad dentro de los 7 días posteriores a
                la recepción, su reclamación ya no será elegible para la
                Garantía de Felicidad Ontu. Le instamos a que lea estos términos
                y condiciones antes de presentar una reclamación. Todas las
                reclamaciones se revisarán caso por caso. Durante el proceso de
                evaluación de reclamaciones de Ontu, es posible que se le
                solicite que proporcione detalles por escrito: (1) prueba de
                propiedad del artículo dañado; (2) prueba de valor del artículo
                dañado; y (3) prueba de daño. Si se solicita dicha información,
                tendrá 30 días a partir de la fecha de la solicitud para enviar
                Ontu la información solicitada. Si no proporciona la información
                solicitada dentro del período de tiempo de 30 días y/o no se
                pone en contacto con Ontu para organizar una extensión de
                tiempo, su reclamación se considerará cerrada y ya no elegible
                para la Garantía de Felicidad Ontu. También acepta: (A) proteger
                y preservar cualquier propiedad dañada que sea la base de una
                reclamación de daños adicionales; (B) ayudar y permitir que Ontu
                o sus aseguradoras tengan acceso a inspeccionar y hacer copias,
                fotografías y grabaciones de cualquier cosa relacionada con la
                reclamación; (C) aceptar reparaciones y/o remediaciones por
                parte de un profesional; (D) aceptar un reemplazo solo si se
                demuestra que las reparaciones no son una opción; (E) presentar
                los materiales solicitados en las fechas descritas por el equipo
                de resoluciones de Ontu; y (F) aceptar un artículo de reemplazo
                sujeto a la depreciación estándar de ese artículo. Si se aprueba
                alguna parte de su reclamo, entonces como condición para
                cualquier pago a usted bajo la Garantía de Felicidad Ontu, se le
                pedirá que ejecute y entregue a Ontu el acuerdo de reparación
                dentro de los 14 días posteriores a la recepción del acuerdo de
                reparación de Ontu, y asigne a Ontu o a su aseguradora cualquier
                derecho y remedio que pueda tener para reparar los daños a usted
                con respecto a una reclamación aprobada de cualquier parte que
                sea financieramente responsable de las reclamaciones aprobadas y
                cualquier derecho sobre cualquier propiedad que se repare. El
                acuerdo de liberación se rescindirá y se considerará nulo y sin
                efecto si no se firma y se devuelve a Ontu dentro de los 14 días
                posteriores a su recepción y la reclamación ya no será elegible
                para la Garantía de Felicidad Ontu.
              </p>
              <p className="text-[11px] md:text-[12px]  lg:text-[13px] leading-tight mt-5 font-monts text-justify lg:mt-5 lg:px-10  ">
                <span className="font-semibold mr-1">
                  e. Política de reembolso de mercancías.
                </span>
              </p>
              <p className="text-[11px] md:text-[12px]  lg:text-[13px] leading-tight mt-5 font-monts text-justify lg:mt-5 lg:px-10 ml-3 ">
                <span className="font-semibold mr-1">(i). </span>Si decide que
                no desea la Mercancía antes de que se haya desempaquetado o
                abierto, la Mercancía está rota, defectuosa o dañada de alguna
                otra manera, o si la Mercancía que ordenó no cabe en su casa o
                su edificio, deniega la entrada, los primeros 30 días luego de
                la compra se procederá acorde a lo establecido en la{" "}
                <span className="text-ontu">Política de THE HOME SHOP</span>,
                posterior a los 30 días de compra, deberá ponerse en contacto
                con el fabricante o distribuidor externo, según corresponda,
                Ontu no será responsable de ningún pago para usted si no puede
                obtener un reembolso o reemplazo de la Mercancía del tercero
                fabricante o distribuidor, según corresponda, de la Mercancía.
              </p>
              <p className="text-[11px] md:text-[12px]  lg:text-[13px] leading-tight mt-5 font-monts text-justify lg:mt-5 lg:px-10 ml-3 ">
                <span className="font-semibold mr-1">(ii). </span> Si alguna
                Mercancía se rompe solo en el curso de la realización de los
                Servicios Profesionales, Ontu eliminará y reemplazará la
                Mercancía rota (o, en su caso, el componente roto de la
                Mercancía) y volverá a realizar los Servicios Profesionales
                aplicables sin costo adicional para usted, siempre que, sin
                embargo, Ontu no reembolse el costo de la Mercancía ni reembolse
                el costo de los Servicios Profesionales.
              </p>
              <p className="text-[11px] md:text-[12px]  lg:text-[13px] font-semibold leading-tight ml-8 mt-5 font-monts text-justify lg:mt-5 lg:px-10  ">
                4. Plazo y terminación; Eliminación de cuenta por inactividad.
              </p>
              <p className="text-[11px] md:text-[12px]  lg:text-[13px] leading-tight mt-5 font-monts text-justify lg:mt-5 lg:px-10  ">
                <span className="font-semibold mr-1">i. Plazo. </span>Este
                Acuerdo continuará en pleno vigor y efecto hasta el momento en
                que usted o nosotros lo rescindamos.
              </p>
              <p className="text-[11px] md:text-[12px]  lg:text-[13px] leading-tight mt-5 font-monts text-justify lg:mt-5 lg:px-10  ">
                <span className="font-semibold mr-1">
                  ii. Terminación por Ontu.{" "}
                </span>
                Podemos rescindir este Acuerdo o rescindir o suspender su
                derecho a utilizar la Plataforma Ontu en cualquier momento por
                cualquier motivo o ninguna razón (incluido, entre otros, en el
                caso de que creamos que ha incumplido este Acuerdo o cualquier
                política publicada en la Plataforma Ontu, o si de otra manera
                descubrimos que ha incurrido en un comportamiento inapropiado
                y/o Excepto en el caso de que terminemos o suspendamos su
                derecho a usar la Plataforma Ontu debido a cualquier Conducta
                Prohibida, reembolsaremos en su totalidad cualquier pago por
                Servicios Profesionales que no se haya realizado o completado.
                Si cancelamos o suspendimos su cuenta por cualquier motivo, se
                le prohíbe registrarse y crear una nueva cuenta a su nombre, un
                nombre falso o prestado, o el nombre de cualquier tercero,
                incluso si puede estar actuando en nombre del tercero. Además de
                cancelar o suspender su cuenta, nos reservamos el derecho de
                tomar las medidas legales apropiadas, incluida, entre otras, la
                búsqueda de reparaciones civiles, penales y cautelares. Al
                cancelar su cuenta, Ontu puede eliminar la cuenta y toda la
                información que contiene. No tiene derechos de propiedad sobre
                su cuenta.
              </p>
              <p className="text-[11px] md:text-[12px]  lg:text-[13px] leading-tight mt-5 font-monts text-justify lg:mt-5 lg:px-10  ">
                <span className="font-semibold mr-1">
                  iii. Terminación por su parte.{" "}
                </span>{" "}
                Puede rescindir este Acuerdo dejando de usar completa y
                permanentemente la Plataforma Ontu (siempre que no haya
                Servicios Profesionales pendientes pedidos con su contraseña o
                cuenta) y cerrando cualquier cuenta que haya abierto en la
                Plataforma Ontu. Si intenta rescindir este Acuerdo mientras
                todavía haya Servicios Profesionales pendientes ordenados bajo
                su contraseña o cuenta, este Acuerdo no terminará hasta que
                dichos Servicios Profesionales se hayan realizado o cancelado de
                otra manera según lo permitido por Ontu.
              </p>
              <p className="text-[11px] md:text-[12px]  lg:text-[13px] leading-tight mt-5 font-monts text-justify lg:mt-5 lg:px-10  ">
                <span className="font-semibold mr-1">
                  iv. Eliminación de cuenta por inactividad.{" "}
                </span>{" "}
                Toda vez que su cuenta permanezca durante 6 meses continuos sin
                actividad Ontu puede eliminar la cuenta y toda la información
                que contiene. No tiene derechos de propiedad sobre su cuenta. Si
                desea contratar Servicios Profesionales a través de la
                Plataforma Ontu nuevamente, tendrá que volver a registrarse y
                crear una cuenta nueva.
              </p>

              <p className="text-[11px] md:text-[12px]  lg:text-[13px] font-semibold leading-tight ml-8 mt-5 font-monts text-justify lg:mt-5 lg:px-10  ">
                5. Política de cancelación para la cancelación de un Servicio
                Profesional solicitado.
              </p>
              <p className="text-[11px] md:text-[12px]  lg:text-[13px] leading-tight mt-5 font-monts text-justify lg:mt-5 lg:px-10  ">
                <span className="font-semibold mr-1">i.</span>La política de
                cancelación de Ontu (que se encuentra aquí) para Servicios
                Profesionales específicos es la siguiente: Los Solicitantes
                pueden cancelar sus citas programadas de Servicio Profesional a
                través de la Plataforma Ontu en cualquier momento, sujeto a las
                siguientes condiciones: (i) si un Solicitante cancela con más de
                24 horas antes de una cita programada de Servicio Profesional,
                no se generará costo alguno. Esta política de cancelación se
                aplica a todas las reservas de servicios que se puedan generar
                en la Plataforma Ontu.
              </p>
              <p className="text-[11px] md:text-[12px]  lg:text-[13px] font-semibold leading-tight ml-8 mt-5 font-monts text-justify lg:mt-5 lg:px-10  ">
                6. Enlaces y complementos de otros sitios web o medios;
                seguridad del sitio.
              </p>
              <p className="text-[11px] md:text-[12px]  lg:text-[13px] leading-tight mt-5 font-monts text-justify lg:mt-5 lg:px-10  ">
                <span className="font-semibold mr-1">i. Los enlaces; </span>
                (Cómo hipervínculos) de la Plataforma Ontu y complementos de
                sitios o aplicaciones propiedad, operados o controlados por
                terceros (colectivamente, "Sitios de Terceros") no constituyen
                el respaldo por parte de Ontu de los Sitios de Terceros o su
                contenido. Dichos enlaces y complementos se proporcionan como un
                servicio de información, solo para referencia y conveniencia.
                Ontu no controla ningún Sitio de Terceros y no es responsable de
                su contenido. Es su responsabilidad evaluar el contenido y la
                utilidad de la información obtenida de Sitios de Terceros. El
                uso de cualquier Sitio de Terceros se rige por los términos y
                condiciones de uso y la política de privacidad de ese Sitio de
                Terceros. USTED ACCEDE A SITIOS DE TERCEROS BAJO SU PROPIO
                RIESGO. ONTU RENUNCIA EXPRESAMENTE A CUALQUIER RESPONSABILIDAD
                QUE SURJA EN RELACIÓN CON SU USO Y/O VISUALIZACIÓN DE CUALQUIER
                SITIO DE TERCEROS, Y POR LA PRESENTE ACEPTA TENER A MANO A MANO
                CUALQUIER RESPONSABILIDAD QUE PUEDA RESULTAR DE SITIOS DE
                TERCEROS.
              </p>
              <p className="text-[11px] md:text-[12px]  lg:text-[13px] leading-tight mt-5 font-monts text-justify lg:mt-5 lg:px-10  ">
                <span className="font-semibold mr-1">
                  ii. Seguridad del sitio:{" "}
                </span>
              </p>
              <p className="text-[11px] md:text-[12px]  lg:text-[13px] leading-tight mt-5 font-monts text-justify lg:mt-5 lg:px-10 ml-3 ">
                <span className="font-semibold mr-1">a. </span> Se prohíbe a los
                usuarios solicitantes el violar o intentar violar la seguridad
                del Sitio Web, de los Sitios Web y Aplicaciones afiliadas a
                Ontu; quedan prohibidas al usuario solicitante: (i) acceder a
                datos a los cuales el usuario solicitante no se encuentra
                autorizado para utilizar o iniciar sesión en un servidor o en
                una cuenta para la que el usuario solicitante no tiene acceso
                autorizado; (ii) intentar examinar, escanear o probar la
                vulnerabilidad de un sistema de informática o de una red o
                quebrantar las medidas de seguridad o autenticación sin la
                debida autorización; (iii) intentar interferir con el uso de
                cualquier otro usuario solicitante, servicio de hospedaje o red,
                incluyendo, sin limitación, el transmitir un virus al Sitio Web,
                a los Sitios Web y Aplicaciones afiliadas a Ontu; causar una
                saturación de dichos sitios mediante "inundación" (flooding),
                "envío de correo no deseado" (spamming), "bombardeo de correo"
                (mailbombing) o "generación de fallas" (crashing); (iv) el envío
                de correos electrónicos no solicitados, incluyendo promociones
                y/o publicidad de productos o servicios, o; (v) falsificar
                cualquier encabezado de paquete TCP/IP o cualquier parte de la
                información del encabezado en cualquier correo electrónico o
                publicación en grupo de noticias.
              </p>
              <p className="text-[11px] md:text-[12px]  lg:text-[13px] leading-tight mt-5 font-monts text-justify lg:mt-5 lg:px-10 ml-3 ">
                <span className="font-semibold mr-1">b. </span> El Usuario
                solicitante reconoce que las violaciones del sistema de
                informática o de la seguridad de la red pueden generar
                responsabilidades civiles o penales. Ontu investigará
                situaciones que puedan involucrar dichas violaciones y se
                reserva el derecho de denunciar tales acciones a las
                autoridades; Ontu cooperará con la autoridad competente en la
                investigación de dichas violaciones en los términos establecidos
                en la legislación aplicable. El usuario solicitante ACEPTA
                INDEMNIZAR COMPLETAMENTE Y SER RESPONSABLE ANTE ONTU Y CADA
                COLABORADOR PROFESIONAL QUE RESULTE PERJUDICADO POR REALIZAR
                DICHAS VIOLACIONES, MÁS CUALQUIER ABOGADO O GASTO LEGAL QUE SE
                REQUIERA, LOS COSTOS Y GASTOS RELACIONADOS, SI CORRESPONDE, O
                (2) LOS DAÑOS REALES, DIRECTOS, PUNITIVOS Y CONSECUENTES, Y
                CUALQUIER MULTA O SANCIÓN REGULATORIA O JUDICIAL QUE PUEDA
                DERIVARSE DE DICHA ACTIVIDAD INTENCIONAL, ENGAÑOSA, DAÑINA Y
                FRAUDULENTA, ADEMÁS DE HONORARIOS LEGALES, COSTOS Y GASTOS
                RELACIONADOS.
              </p>
              <p className="text-[11px] md:text-[12px]  lg:text-[13px] leading-tight mt-5 font-monts text-justify lg:mt-5 lg:px-10 ml-3 ">
                <span className="font-semibold mr-1">c. </span> Ontu no se
                responsabiliza por cualquier daño, perjuicio o pérdida al
                Usuario Solicitante causados por fallas en el sistema, en el
                servidor o en Internet. Ontu tampoco será responsable por
                cualquier virus que pudiera infectar el equipo del Usuario
                Solicitante como consecuencia del acceso, uso o examen del Sitio
                Web o a raíz de cualquier transferencia de datos, archivos,
                imágenes, textos, o audios contenidos en el mismo. Los Usuarios
                Solicitantes NO podrán imputar responsabilidad alguna ni exigir
                pago de daños o perjuicios, en virtud de dificultades técnicas o
                fallas en los sistemas o en Internet. Ontu no garantiza el
                acceso y uso continuado o ininterrumpido del Sitio Web, Sitios
                Web o Aplicaciones. El sistema puede eventualmente no estar
                disponible debido a dificultades técnicas o fallas de Internet,
                o por cualquier otra circunstancia ajena a Ontu; en tales casos
                se procurará restablecerlo con la mayor celeridad posible sin
                que por ello pueda imputarse algún tipo de responsabilidad. Ontu
                no será responsable por ningún error u omisión contenidos en el
                Sitio Web, Sitios Web o Aplicaciones.
              </p>
              <p className="text-[11px] md:text-[12px]  lg:text-[13px] font-semibold leading-tight ml-8 mt-5 font-monts text-justify lg:mt-5 lg:px-10  ">
                7. Reglas de uso de la Plataforma Ontu.
              </p>
              <p className="text-[11px] md:text-[12px]  lg:text-[13px] leading-tight mt-5 font-monts text-justify lg:mt-5 lg:px-10  ">
                Durante la vigencia de este Acuerdo, los Solicitantes pueden
                usar la Plataforma Ontu solo para su uso personal (o para el uso
                de una persona, incluida una empresa u otra organización que
                usted represente válidamente). Los Usuarios Solicitantes pueden
                utilizar la Plataforma Ontu para solicitar Servicios
                Profesionales únicamente con respecto a una ubicación donde el
                Solicitante esté legalmente autorizado a realizar Servicios
                Profesionales. Los solicitantes no pueden utilizar la Plataforma
                Ontu para ningún otro propósito o en relación con ningún
                esfuerzo comercial sin nuestro consentimiento expreso previo por
                escrito. Los solicitantes acuerdan tratar a los colaboradores
                profesionales de manera cortés y legal, proporcionarles un
                entorno de trabajo seguro y apropiado que cumpla con todas las
                leyes y regulaciones aplicables, y proporcionar una cooperación
                razonable a los profesionales para permitirles suministrar
                servicios profesionales. Los usuarios solicitantes aceptan
                cumplir con nuestra queja y otras políticas designadas en el
                Sitio. Los solicitantes reconocen que su colaborador profesional
                seleccionado puede no estar disponible de vez en cuando. NO debe
                utilizar la Plataforma Ontu (incluyendo pero no limitado a
                cualquier Área de Envío) para hacer cualquiera de lo siguiente:
              </p>
              <p className="text-[11px] md:text-[12px]  lg:text-[13px] leading-tight mt-5 font-monts text-justify lg:mt-5 lg:px-10  ">
                <span className="font-semibold mr-1">a. </span>Cargue archivos
                que contengan virus, caballos de Troya, archivos dañados o
                cualquier otro software similar que pueda dañar el
                funcionamiento del ordenador, computadora o aplicación de otra
                persona.
              </p>
              <p className="text-[11px] md:text-[12px]  lg:text-[13px] leading-tight mt-5 font-monts text-justify lg:mt-5 lg:px-10  ">
                <span className="font-semibold mr-1">b. </span>Cargue archivos
                que contengan software u otro material que viole los derechos de
                propiedad intelectual o los derechos de privacidad o publicidad
                de cualquier tercero.
              </p>
              <p className="text-[11px] md:text-[12px]  lg:text-[13px] leading-tight mt-5 font-monts text-justify lg:mt-5 lg:px-10  ">
                <span className="font-semibold mr-1">c. </span>Difamar, abusar,
                acosar, acechar, amenazar o violar de alguna otra manera los
                derechos legales (como, entre otros, los derechos de privacidad
                y publicidad) de otros, incluidos, entre otros, nuestro personal
                y otros Usuarios.
              </p>
              <p className="text-[11px] md:text-[12px]  lg:text-[13px] leading-tight mt-5 font-monts text-justify lg:mt-5 lg:px-10  ">
                <span className="font-semibold mr-1">d. </span>Publique una
                revisión o calificación a menos que dicha revisión o
                calificación contenga su opinión independiente, honesta y
                genuina.
              </p>
              <p className="text-[11px] md:text-[12px]  lg:text-[13px] leading-tight mt-5 font-monts text-justify lg:mt-5 lg:px-10  ">
                <span className="font-semibold mr-1">e. </span>Utilice la
                Plataforma Ontu o cualquier Servicio Profesional para cualquier
                propósito o de cualquier manera que viole el derecho local,
                estatal, nacional o internacional.
              </p>
              <p className="text-[11px] md:text-[12px]  lg:text-[13px] leading-tight mt-5 font-monts text-justify lg:mt-5 lg:px-10  ">
                <span className="font-semibold mr-1">f. </span>Publicar,
                publicar, cargar, distribuir o difundir cualquier tema, nombre,
                material o información profano, difamatorio, falso, engañoso,
                fraudulento, amenazante o ilegal, o cualquier material,
                información o contenido que implique la venta de artículos
                falsificados o robados.
              </p>
              <p className="text-[11px] md:text-[12px]  lg:text-[13px] leading-tight mt-5 font-monts text-justify lg:mt-5 lg:px-10  ">
                <span className="font-semibold mr-1">g. </span>Anunciar u
                ofrecer vender cualquier bien o servicio para cualquier
                propósito comercial o solicitar empleo o trabajo por contrato
                que no sea relevante para los servicios ofrecidos a través de la
                Plataforma Ontu. No puede solicitar, anunciar o contactar de
                ninguna forma a los Colaboradores Profesionales para empleo,
                contratación o cualquier otro propósito no relacionado con los
                Servicios Profesionales facilitados a través de la Plataforma
                Ontu sin nuestro permiso expreso por escrito.
              </p>
              <p className="text-[11px] md:text-[12px]  lg:text-[13px] leading-tight mt-5 font-monts text-justify lg:mt-5 lg:px-10  ">
                <span className="font-semibold mr-1">h. </span>Utilice la
                Plataforma Ontu para recopilar nombres de usuario y/o
                direcciones de correo electrónico de los miembros por medios
                electrónicos o de otro tipo sin nuestro consentimiento expreso
                previo por escrito.
              </p>
              <p className="text-[11px] md:text-[12px]  lg:text-[13px] leading-tight mt-5 font-monts text-justify lg:mt-5 lg:px-10  ">
                <span className="font-semibold mr-1">i. </span>Realice o reenvíe
                encuestas, concursos, esquemas piramidales o cartas en cadena.
              </p>
              <p className="text-[11px] md:text-[12px]  lg:text-[13px] leading-tight mt-5 font-monts text-justify lg:mt-5 lg:px-10  ">
                <span className="font-semibold mr-1">j. </span>Hacerse pasar por
                otra persona o permitir que cualquier otra persona o entidad use
                su identificación para publicar o ver comentarios o usar su
                cuenta de otra manera.
              </p>
              <p className="text-[11px] md:text-[12px]  lg:text-[13px] leading-tight mt-5 font-monts text-justify lg:mt-5 lg:px-10  ">
                <span className="font-semibold mr-1">k. </span>Publique la misma
                nota repetidamente (denominada "spamming"). El spam está
                estrictamente prohibido.
              </p>
              <p className="text-[11px] md:text-[12px]  lg:text-[13px] leading-tight mt-5 font-monts text-justify lg:mt-5 lg:px-10  ">
                <span className="font-semibold mr-1">l. </span>Descargar
                cualquier archivo publicado por otro Usuario que sepa, o
                razonablemente deba saber, que no se puede distribuir legalmente
                a través de la Plataforma Ontu, ni publicar o cargar ningún
                contenido al que no haya obtenido los derechos o permisos
                necesarios para usarlos en consecuencia.
              </p>
              <p className="text-[11px] md:text-[12px]  lg:text-[13px] leading-tight mt-5 font-monts text-justify lg:mt-5 lg:px-10  ">
                <span className="font-semibold mr-1">m. </span>Restringir o
                inhibir a cualquier otro Usuario de usar y disfrutar de la
                Plataforma Ontu.
              </p>
              <p className="text-[11px] md:text-[12px]  lg:text-[13px] leading-tight mt-5 font-monts text-justify lg:mt-5 lg:px-10  ">
                <span className="font-semibold mr-1">n. </span>Implíquese o
                declare que cualquier declaración que haga está respaldada por
                nosotros, sin nuestro consentimiento previo por escrito.
              </p>
              <p className="text-[11px] md:text-[12px]  lg:text-[13px] leading-tight mt-5 font-monts text-justify lg:mt-5 lg:px-10  ">
                <span className="font-semibold mr-1">o. </span>Invierta
                ingeniería, desensamblar, descompilar, traducir, modificar,
                adaptar, licenciar, sublicenciar, alterar, copiar, distribuir,
                hackear o interferir con la Plataforma Ontu, sus servidores o
                cualquier red conectada, utilizar un robot, araña, procesos o
                dispositivos manuales y/o automáticos para extraer datos,
                rastrear datos, raspar o indexar la Plataforma Ontu de cualquier
                manera, o intentar hacer cualquiera de lo anterior.
              </p>
              <p className="text-[11px] md:text-[12px]  lg:text-[13px] leading-tight mt-5 font-monts text-justify lg:mt-5 lg:px-10  ">
                <span className="font-semibold mr-1">p. </span>Eliminar o
                alterar, visualmente o de otra manera, cualquier derecho de
                autor, marca comercial o marca y derechos de propiedad nuestra
                propiedad. ​
              </p>
              <p className="text-[11px] md:text-[12px]  lg:text-[13px] leading-tight mt-5 font-monts text-justify lg:mt-5 lg:px-10  ">
                <span className="font-semibold mr-1">q. </span>Cargue contenido
                que sea ofensivo y/o dañino, incluido, entre otros, contenido
                que defienda, respalde, apruebe o promueva el racismo, la
                intolerancia, el odio o el daño físico de cualquier tipo contra
                cualquier individuo o grupo de individuos.
              </p>
              <p className="text-[11px] md:text-[12px]  lg:text-[13px] leading-tight mt-5 font-monts text-justify lg:mt-5 lg:px-10  ">
                <span className="font-semibold mr-1">r. </span>Cargue contenido
                que proporcione materiales o acceso a materiales que sean
                obscenos, adultos o sexuales o que exploten a cualquier persona,
                y en particular a personas menores de 18 años, de manera
                abusiva, violenta o sexual.
              </p>
              <p className="text-[11px] md:text-[12px]  lg:text-[13px] leading-tight mt-5 font-monts text-justify lg:mt-5 lg:px-10  ">
                <span className="font-semibold mr-1">s. </span>Regístrese para
                usar la Plataforma Ontu bajo diferentes nombres de usuario o
                identidades, después de que su cuenta haya sido suspendida o
                cancelada.
              </p>
              <p className="text-[11px] md:text-[12px]  lg:text-[13px] leading-tight mt-5 font-monts text-justify lg:mt-5 lg:px-10  ">
                <span className="font-semibold mr-1">t. </span> Reflejar o
                archivar cualquier parte de la Plataforma Ontu o cualquier
                contenido o material contenido en la Plataforma Ontu sin el
                permiso por escrito de Ontu.
              </p>
              <p className="text-[11px] md:text-[12px]  lg:text-[13px] font-semibold leading-tight ml-8 mt-5 font-monts text-justify lg:mt-5 lg:px-10  ">
                8. Promociones especiales; cupones promocionales, descuentos por
                referencia, códigos promocionales.
              </p>
              <p className="text-[11px] md:text-[12px]  lg:text-[13px] leading-tight mt-5 font-monts text-justify lg:mt-5 lg:px-10  ">
                <span className="font-semibold mr-1">
                  a. Cambios en las promociones{" "}
                </span>{" "}
                De vez en cuando podemos proporcionar ciertas oportunidades
                promocionales a los solicitantes. Todas las promociones se
                ejecutarán a nuestra entera discreción, y podemos activarlas,
                modificarlas o eliminarlas en cualquier momento sin previo
                aviso.
              </p>
              <p className="text-[11px] md:text-[12px]  lg:text-[13px] leading-tight mt-5 font-monts text-justify lg:mt-5 lg:px-10  ">
                <span className="font-semibold mr-1">
                  b. Cupones promocionales{" "}
                </span>
              </p>
              <p className="text-[11px] md:text-[12px]  lg:text-[13px] leading-tight mt-5 font-monts text-justify lg:mt-5 lg:px-10 ml-3 ">
                <span className="font-semibold mr-1">i. </span> Los cupones
                promocionales solo son elegibles para los servicios específicos
                designados por Ontu. Los cupones promocionales son válidos solo
                por tiempo limitado y caducan en la fecha indicada cuando recibe
                el cupón promocional aplicable. Si no se utilizan cupones
                promocionales antes de dicha fecha de vencimiento, se perderá el
                cupón promocional. Ontu se reserva el derecho de cancelar
                cupones promocionales en cualquier momento. No se concederán
                reembolsos por ningún cupón promocional caducado o cancelado.
              </p>
              <p className="text-[11px] md:text-[12px]  lg:text-[13px] leading-tight mt-5 font-monts text-justify lg:mt-5 lg:px-10 ml-3 ">
                <span className="font-semibold mr-1">ii. </span> Los cupones
                promocionales no tienen valor intrínseco, no se pueden canjear
                por dinero en efectivo, no tienen valor en efectivo y sirven
                simplemente como un medio para reconocer y proporcionar un
                incentivo para usar la Plataforma Ontu. Los cupones
                promocionales no se pueden comprar por dinero en efectivo y Ontu
                no vende cupones promocionales. Los cupones promocionales no son
                reembolsables.
              </p>
              <p className="text-[11px] md:text-[12px]  lg:text-[13px] leading-tight mt-5 font-monts text-justify lg:mt-5 lg:px-10 ml-3 ">
                <span className="font-semibold mr-1">iii. </span> Los cupones
                promocionales no se aplicarán contra ninguna venta, uso, recibo
                bruto o impuestos similares basados en transacciones que puedan
                ser aplicables a usted, y/o tarifas o cargos por el uso de
                cualquier servicio no elegible.
              </p>
              <p className="text-[11px] md:text-[12px]  lg:text-[13px] leading-tight mt-5 font-monts text-justify lg:mt-5 lg:px-10 ml-3 ">
                <span className="font-semibold mr-1">iv. </span> A su cuenta de
                Ontu se le facturarán todas las tarifas y cargos por el uso de
                cualquier servicio no elegible. Cada cupón promocional solo se
                puede usar una vez y se facturará a su cuenta Ontu todas las
                tarifas y cargos por el uso de cualquier servicio elegible que
                exceda la cantidad de cupón promocional disponible.
              </p>
              <p className="text-[11px] md:text-[12px]  lg:text-[13px] leading-tight mt-5 font-monts text-justify lg:mt-5 lg:px-10  ">
                <span className="font-semibold mr-1">
                  c. Descuentos por referencia{" "}
                </span>
              </p>
              <p className="text-[11px] md:text-[12px]  lg:text-[13px] leading-tight mt-5 font-monts text-justify lg:mt-5 lg:px-10  ">
                En el caso de que se le dé un código a través del cual pueda
                referir a un amigo a la Plataforma Ontu a cambio de un descuento
                por referencia, no utilizará ningún marketing o publicidad en
                línea para promocionar dicho código o para aumentar
                artificialmente la cantidad de créditos otorgados. A modo de
                ejemplo, no puede publicar, o hacer, solicitar o permitir que un
                tercero publique dicho código en un sitio web de cupones, ni
                utilizar ningún marketing de búsqueda pagado, publicidad en
                línea, publicación en foros, publicación de grupos de noticias o
                correo electrónico masivo para difundir dicho código. Solo puede
                compartir dicho código con sus amigos y conocidos personales con
                fines de referencia legítimos, según lo determinemos a nuestra
                entera discreción. Los prácticos descuentos por referidos solo
                se pueden canjear por Servicios Profesionales. Los prácticos
                descuentos por referencia no tienen valor en efectivo y no se
                pueden canjear por dinero en efectivo a menos que la ley exija
                lo contrario. Sin limitar nuestros otros derechos y recursos,
                podemos cancelar dicho código y/o su cuenta por cualquier
                incumplimiento de esta Sección.
              </p>
              <p className="text-[11px] md:text-[12px]  lg:text-[13px] leading-tight mt-5 font-monts text-justify lg:mt-5 lg:px-10  ">
                <span className="font-semibold mr-1">
                  d. Códigos Promocionales.{" "}
                </span>
              </p>
              <p className="text-[11px] md:text-[12px]  lg:text-[13px] leading-tight mt-5 font-monts text-justify lg:mt-5 lg:px-10 ml-3 ">
                <span className="font-semibold mr-1">i. </span> Los códigos
                promocionales para ofertas o descuentos especiales ("Cupones")
                pueden estar disponibles y se pueden utilizar para pagar en
                parte o en su totalidad por Servicios Profesionales.
              </p>
              <p className="text-[11px] md:text-[12px]  lg:text-[13px] leading-tight mt-5 font-monts text-justify lg:mt-5 lg:px-10 ml-3 ">
                <span className="font-semibold mr-1">ii. </span> Usted acepta
                que solo usará un código promocional por persona y usará los
                códigos promocionales de acuerdo con los términos y condiciones
                de Códigos Promocionales.
              </p>
              <p className="text-[11px] md:text-[12px]  lg:text-[13px] leading-tight mt-5 font-monts text-justify lg:mt-5 lg:px-10 ml-3 ">
                <span className="font-semibold mr-1">iii. </span> Usted acepta
                que cumplirá con todos los términos y condiciones del código
                promocional.
              </p>
              <p className="text-[11px] md:text-[12px]  lg:text-[13px] font-semibold leading-tight ml-8 mt-5 font-monts text-justify lg:mt-5 lg:px-10  ">
                10. Ontu Member; Beneficios, restricciones, modificaciones,
                cancelación, renovación.
              </p>
              <p className="text-[11px] md:text-[12px]  lg:text-[13px] leading-tight mt-5 font-monts text-justify lg:mt-5 lg:px-10  ">
                <span className="font-semibold mr-1">a. </span> Ontu Member es
                una membresía opcional dirigida a nuestros usuarios en México.
                Ontu Member es personal e intransferible y es válida por un año
                desde el momento de la compra por la cual se pagará el valor de
                $399 MXN con IVA incluido.
              </p>
              <p className="text-[11px] md:text-[12px]  lg:text-[13px] leading-tight mt-5 font-monts text-justify lg:mt-5 lg:px-10  ">
                <span className="font-semibold mr-1">b. Beneficios </span>
              </p>
              <p className="text-[11px] md:text-[12px]  lg:text-[13px] leading-tight mt-5 font-monts text-justify lg:mt-5 lg:px-10 ml-3 ">
                <span className="font-semibold mr-1">i. </span> El beneficiario
                de la membresía tendrá $50.00 de descuento en todas sus
                reservaciones de Ontuman Plus +.
              </p>
              <p className="text-[11px] md:text-[12px]  lg:text-[13px] leading-tight mt-5 font-monts text-justify lg:mt-5 lg:px-10 ml-3 ">
                <span className="font-semibold mr-1">ii. </span> El beneficiario
                de la membresía tendrá 1 asesoría online gratuita cada 2 meses
                que se agendará según la disponibilidad del técnico y podrá
                apoyar al beneficiario a resolver temas sencillos en su inmueble
                y que no incurran algún peligro o requieran de un profesional
                capacitado para resolver la tarea.
              </p>
              <p className="text-[11px] md:text-[12px]  lg:text-[13px] leading-tight mt-5 font-monts text-justify lg:mt-5 lg:px-10 ml-3 ">
                <span className="font-semibold mr-1">iii. </span> Regalo de
                bienvenida el cual podrá incluir, según disponibilidad de
                inventario, algunos de los artículos que se describe a
                continuación o alguno de valor o característica similares:
              </p>
              <ul className="text-[11px] md:text-[12px]  lg:text-[13px]  leading-tight ml-5 mt-1 text-justify lg:mt-1 lg:px-10 font-monts">
                <li className="mt-4 flex ">
                  <span>
                    <TbPointFilled size={10} />
                  </span>
                  Calendario de mantenimiento para el hogar.
                </li>
                <li className="mt-1 flex ">
                  <span>
                    <TbPointFilled size={10} />
                  </span>
                  Checklist básico de revisión para identificar el estado de un
                  inmueble.
                </li>
                <li className="mt-1 flex ">
                  <span>
                    <TbPointFilled size={10} />
                  </span>
                  Termo
                </li>
                <li className="mt-1 flex ">
                  <span>
                    <TbPointFilled size={10} />
                  </span>
                  Imán
                </li>
              </ul>
              <p className="text-[11px] md:text-[12px]  lg:text-[13px] leading-tight mt-5 font-monts text-justify lg:mt-5 lg:px-10 ml-3 ">
                <span className="font-semibold mr-1">iv. </span> v. El usuario
                tendrá beneficios todos los meses que podrán variar
                constantemente y podrán ser alguno de los siguientes:
              </p>
              <ul className="text-[11px] md:text-[12px]  lg:text-[13px]  leading-tight ml-5 mt-1 text-justify lg:mt-1 lg:px-10 font-monts">
                <li className="mt-4 flex ">
                  <span>
                    <TbPointFilled size={10} />
                  </span>
                  Descuentos especiales en la plataforma Ontu. Estos descuentos
                  especiales no son acumulables con los otros descuentos dados
                  dentro de los beneficios de la membresía. Sin embargo, siempre
                  se aplicará el descuento que más beneficie al miembro.
                </li>
                <li className="mt-1 flex ">
                  <span>
                    <TbPointFilled size={10} />
                  </span>
                  Beneficios especiales en comercios aliados que se determinarán
                  y cambiarán mes a mes. Estos beneficios y su forma de
                  reclamarlos serán comunicados por las redes sociales y
                  plataforma de Ontu.
                </li>
                <li className="mt-1 flex ">
                  <span>
                    <TbPointFilled size={10} />
                  </span>
                  Beneficios especiales en comercios aliados.
                </li>
              </ul>
              <p className="text-[11px] md:text-[12px]  lg:text-[13px] leading-tight mt-5 font-monts text-justify lg:mt-5 lg:px-10  ">
                <span className="font-semibold mr-1">c. Restricciones </span>
              </p>
              <p className="text-[11px] md:text-[12px]  lg:text-[13px] leading-tight mt-5 font-monts text-justify lg:mt-5 lg:px-10 ml-3 ">
                <span className="font-semibold mr-1">i. </span> El descuento de
                los $50.00 por reservaciones de Ontuman Plus + de Ontu Member no
                es acumulable con ningún otro descuento dispuesto en las tiendas
                en línea, tiendas físicas o promociones en colaboración con
                aliados comerciales. En todo caso al beneficiario de la
                membresía siempre se le aplicará el mayor porcentaje de
                descuento que haya en las tiendas en línea, tiendas físicas o
                promociones en colaboración con aliados comerciales.
              </p>
              <p className="text-[11px] md:text-[12px]  lg:text-[13px] leading-tight mt-5 font-monts text-justify lg:mt-5 lg:px-10 ml-3 ">
                <span className="font-semibold mr-1">ii. </span> Los cupones de
                valor (cupones que otorgan un saldo a favor a los clientes) son
                acumulables con el descuento de los $50.00 por reservaciones de
                Ontuman Plus + de Ontu Member.
              </p>
              <p className="text-[11px] md:text-[12px]  lg:text-[13px] leading-tight mt-5 font-monts text-justify lg:mt-5 lg:px-10  ">
                <span className="font-semibold mr-1">
                  ​ d. Modificaciones y cambios
                </span>
              </p>
              <p className="text-[11px] md:text-[12px]  lg:text-[13px] leading-tight mt-5 font-monts text-justify lg:mt-5 lg:px-10 ml-3 ">
                <span className="font-semibold mr-1">i. </span> Ontu se reserva
                la facultad de realizar modificaciones de los presentes términos
                en relación a el punto 10 y en general, los cuales no aplicaran
                los beneficiarios de la membresía hasta tanto no se renueve un
                nuevo periodo de vigencia de la membresía. Los términos y
                condiciones aplicables a los usuarios con una membresía Ontu
                Member vigente en el momento. El beneficiario tiene la
                posibilidad de si no está de acuerdo cancelar su membresía
                escribiendo a hola@ontu.mx en donde nuestro personal de atención
                a cliente se hará cargo de la cancelación. En esta cancelación
                no se hará devolución del dinero al cliente.
              </p>
              <p className="text-[11px] md:text-[12px]  lg:text-[13px] leading-tight mt-5 font-monts text-justify lg:mt-5 lg:px-10  ">
                <span className="font-semibold mr-1">​ e. Cancelación</span>
              </p>
              <p className="text-[11px] md:text-[12px]  lg:text-[13px] leading-tight mt-5 font-monts text-justify lg:mt-5 lg:px-10 ml-3 ">
                <span className="font-semibold mr-1">i. </span> El usuario podrá
                cancelar la membresía en el momento que así lo deseé. En esta
                cancelación no se hará devolución del dinero al cliente.
              </p>
              <p className="text-[11px] md:text-[12px]  lg:text-[13px] leading-tight mt-5 font-monts text-justify lg:mt-5 lg:px-10 ml-3 ">
                <span className="font-semibold mr-1">ii. </span> Será motivo de
                cancelación de la membresía y eliminación de la cuenta el mal
                uso de la membresía en complemento con lo descrito en el
                apartado 7 del presente documento. En esta cancelación no se
                hará devolución del dinero al cliente.
              </p>
              <p className="text-[11px] md:text-[12px]  lg:text-[13px] leading-tight mt-5 font-monts text-justify lg:mt-5 lg:px-10  ">
                <span className="font-semibold mr-1">f. Renovación</span>
              </p>
              <p className="text-[11px] md:text-[12px]  lg:text-[13px] leading-tight mt-5 font-monts text-justify lg:mt-5 lg:px-10 ml-3 ">
                <span className="font-semibold mr-1">i. </span> La membresía
                tiene un termino de vigencia de 1 año. El beneficiario será
                notificado con días de anterioridad al vencimiento de su
                membresía para poder renovarla. La renovación no es automática
                con ningún método de pago.
              </p>
              <p className="text-[11px] md:text-[12px]  lg:text-[13px] font-semibold leading-tight ml-8 mt-5 font-monts text-justify lg:mt-5 lg:px-10  ">
                11. Derechos de propiedad intelectual.
              </p>
              <p className="text-[11px] md:text-[12px]  lg:text-[13px] leading-tight mt-5 font-monts text-justify lg:mt-5 lg:px-10  ">
                La Plataforma Ontu, y la información, los datos, el contenido y
                los materiales que contiene, son propiedad de Ontu y/o sus
                filiales, subsidiarias y matrices, excluyendo el contenido
                generado por el Usuario, que Ontu tiene derecho a utilizar como
                se describe a continuación. Los Materiales Ontu están protegidos
                contra la copia y difusión no autorizadas por la ley de derechos
                de autor de los Estados Unidos Mexicanos, la ley de marcas
                registradas, las convenciones internacionales y otras leyes de
                propiedad intelectual. Ontu y/o sus filiales, subsidiarias y
                matrices son y seguirán siendo el único y exclusivo propietario
                de todos los derechos, títulos e intereses en y para todos los
                derechos de propiedad intelectual asociados con Ontu. Cualquier
                uso de Materiales de Ontu, que no sea cómo se permite
                expresamente en este documento, está prohibido sin el permiso
                previo de Ontu y/o el titular del derecho correspondiente. Las
                marcas de servicio y marcas comerciales de Ontu, incluyendo,
                entre otros el logotipo de Ontu, son marcas de servicio
                propiedad de Ontu. Cualquier otra marca comercial, marca de
                servicio, logotipo y/o nombre comercial que aparezca en la
                Plataforma Ontu es propiedad de sus respectivos propietarios. No
                puede copiar ni utilizar ninguna de las marcas, logotipos o
                nombres comerciales que aparecen en la Plataforma Ontu sin el
                consentimiento expreso previo por escrito del propietario.
              </p>
              <p className="text-[11px] md:text-[12px]  lg:text-[13px] font-semibold leading-tight ml-8 mt-5 font-monts text-justify lg:mt-5 lg:px-10  ">
                12. La aplicación / dispositivos móviles
              </p>
              <p className="text-[11px] md:text-[12px]  lg:text-[13px] leading-tight mt-5 font-monts text-justify lg:mt-5 lg:px-10  ">
                <span className="font-semibold ">a. </span>
                La Plataforma Ontu puede permitirle acceder a nuestros
                servicios, descargar nuestras Aplicaciones, cargar contenido en
                la Plataforma Ontu y recibir mensajes en su dispositivo móvil
                (colectivamente "Características Móviles"). Su operador de
                dispositivos móviles puede prohibir o restringir ciertas
                Características Móviles y ciertas Características Móviles pueden
                ser incompatibles con su operador de dispositivos móviles o
                dispositivo móvil. Además, su operador de dispositivos móviles
                puede cobrarle por mensajería estándar, datos y otras tarifas
                para participar en las funciones móviles. No tenemos ninguna
                responsabilidad por ninguna tarifa o cargo en el que incurra al
                usar las Características Móviles. Debe consultar con el operador
                de su dispositivo móvil para averiguar si se aplicarán tarifas o
                cargos, qué planes están disponibles y cuánto cuestan. También
                debe ponerse en contacto con el operador de su dispositivo móvil
                si tiene cualquier otra pregunta relacionada con estos
                problemas.
              </p>
              <p className="text-[11px] md:text-[12px]  lg:text-[13px] leading-tight mt-5 font-monts text-justify lg:mt-5 lg:px-10  ">
                <span className="font-semibold ">b. </span>
                Usted reconoce que su uso de las Aplicaciones está sujeto a
                cualquier término establecido en los términos de servicio del
                tercero que proporciona el dispositivo móvil en el que opera la
                Aplicación (por ejemplo, Apple iOS o Android).
              </p>
              <p className="text-[11px] md:text-[12px]  lg:text-[13px] leading-tight mt-5 font-monts text-justify lg:mt-5 lg:px-10  ">
                <span className="font-semibold ">c. </span>
                Ontu no es responsable si no tiene un dispositivo móvil
                compatible o si descarga la versión incorrecta de una aplicación
                para su dispositivo móvil. Ontu se reserva el derecho de
                terminar el uso de las Aplicaciones o cualquier otro aspecto de
                la Plataforma Ontu si está utilizando las Aplicaciones o la
                Plataforma Ontu con un dispositivo incompatible o no autorizado.
              </p>
              <p className="text-[11px] md:text-[12px]  lg:text-[13px] leading-tight mt-5 font-monts text-justify lg:mt-5 lg:px-10  ">
                <span className="font-semibold ">
                  d. Aplicación de origen del App Store.{" "}
                </span>
              </p>
              <p className="text-[11px] md:text-[12px]  lg:text-[13px] leading-tight mt-5 font-monts text-justify lg:mt-5 lg:px-10 ml-3 ">
                <span className="font-semibold mr-1">i. </span>Con respecto a
                las aplicaciones a las que se accede a través o descargadas de
                Apple App Store ("Aplicación de origen de la App Store"), solo
                utilizará la aplicación de origen del App Store:{" "}
                <span className="font-semibold">(i) </span> en un producto de la
                marca Apple que ejecute iOS (software propietario del sistema
                operativo de Apple); y{" "}
                <span className="font-semibold">(ii) </span>según lo permitido
                por las "Reglas de uso Ontu se reserva todos los derechos sobre
                y para las Aplicaciones que no se le otorgan expresamente en
                virtud de este Acuerdo.
              </p>
              <p className="text-[11px] md:text-[12px]  lg:text-[13px] leading-tight mt-5 font-monts text-justify lg:mt-5 lg:px-10 ml-3 ">
                <span className="font-semibold mr-1">ii. </span>Usted reconoce y
                acepta que (i) este Acuerdo es válido solo entre usted y Ontu, y
                que Apple no es parte de este Acuerdo excepto como tercero
                beneficiario como se contempla a continuación, y (ii) Ontu, no
                Apple, es el único responsable de la Aplicación Fuente del App
                Store y el Contenido de la Plataforma Ontu.
              </p>
              <p className="text-[11px] md:text-[12px]  lg:text-[13px] leading-tight mt-5 font-monts text-justify lg:mt-5 lg:px-10 ml-3 ">
                <span className="font-semibold mr-1">iii. </span>Usted reconoce
                que Apple no tiene obligación alguna de proporcionarle ningún
                servicio de mantenimiento o soporte con respecto a la Aplicación
                de Origen del App Store.
              </p>
              <p className="text-[11px] md:text-[12px]  lg:text-[13px] leading-tight mt-5 font-monts text-justify lg:mt-5 lg:px-10 ml-3 ">
                <span className="font-semibold mr-1">iv. </span>En la medida
                máxima permitida por la ley aplicable, Apple no tendrá ninguna
                obligación de garantía con respecto a la Aplicación de Origen
                del App Store.
              </p>
              <p className="text-[11px] md:text-[12px]  lg:text-[13px] leading-tight mt-5 font-monts text-justify lg:mt-5 lg:px-10 ml-3 ">
                <span className="font-semibold mr-1">v. </span>Sin perjuicio de
                cualquier cosa en contrario en el presente documento, y sujeto a
                los términos de este Acuerdo, usted reconoce que, únicamente
                entre Apple y Ontu, Ontu y no Apple es responsable de abordar
                cualquier reclamación que pueda tener relacionada con la
                Aplicación Fuente del App Store, o su posesión y/o uso de la
                misma, incluyendo, entre otros, (i) reclamaciones de
                responsabilidad.
              </p>
              <p className="text-[11px] md:text-[12px]  lg:text-[13px] leading-tight mt-5 font-monts text-justify lg:mt-5 lg:px-10 ml-3 ">
                <span className="font-semibold mr-1">vi. </span>Además, usted
                acepta que si la Aplicación de Origen App Store, o su posesión y
                uso de la Aplicación Fuente del App Store, infringe los derechos
                de propiedad intelectual de un tercero, no responsabilizará a
                Apple de la investigación, defensa, liquidación y descarga de
                dichas reclamaciones por infracción de propiedad intelectual.
              </p>
              <p className="text-[11px] md:text-[12px]  lg:text-[13px] leading-tight mt-5 font-monts text-justify lg:mt-5 lg:px-10 ml-3 ">
                <span className="font-semibold mr-1">vii. </span>Usted reconoce
                y acepta que Apple, y las subsidiarias de Apple, son terceros
                beneficiarios de este Acuerdo para Aplicaciones de Origen App
                Store, y que, al aceptar los términos y condiciones de este
                Acuerdo, Apple tendrá el derecho (y se considerará que ha
                aceptado el derecho) de hacer cumplir este Acuerdo para
                Aplicaciones de Origen App Store en su contra como tercero
                beneficiario del mismo.
              </p>
              <p className="text-[11px] md:text-[12px]  lg:text-[13px] leading-tight mt-5 font-monts text-justify lg:mt-5 lg:px-10 ml-3 ">
                <span className="font-semibold mr-1">viii. </span>Sin limitar
                ninguna disposición de este Acuerdo, debe cumplir con todos los
                términos de acuerdo de terceros aplicables al usar la Aplicación
                Fuente del App Store.
              </p>
              <p className="text-[11px] md:text-[12px]  lg:text-[13px] font-semibold leading-tight ml-8 mt-5 font-monts text-justify lg:mt-5 lg:px-10  ">
                13. Modificaciones a la Plataforma Ontu.
              </p>
              <p className="text-[11px] md:text-[12px]  lg:text-[13px] leading-tight mt-5 font-monts text-justify lg:mt-5 lg:px-10  ">
                <span className="font-semibold ">a. </span>
                Nos reservamos el derecho, a nuestra entera discreción, de
                revisar, mejorar, modificar o interrumpir, temporal o
                permanentemente, la Plataforma Ontu o cualquier contenido o
                información en la Plataforma Ontu con o sin previo aviso. No
                seremos responsables ante ninguna de las partes por ninguna
                modificación o interrupción de la Plataforma Ontu.
              </p>
              <p className="text-[11px] md:text-[12px]  lg:text-[13px] font-semibold leading-tight ml-8 mt-5 font-monts text-justify lg:mt-5 lg:px-10  ">
                14. Confidencialidad.
              </p>
              <p className="text-[11px] md:text-[12px]  lg:text-[13px] leading-tight mt-5 font-monts text-justify lg:mt-5 lg:px-10  ">
                El término "Información confidencial" significará todos y cada
                uno de los secretos comerciales de Ontu, información
                confidencial y patentada, información personal y toda otra
                información y datos de Ontu que no sea generalmente conocido por
                el público u otros terceros que puedan obtener valor, económico
                o de otro tipo, de su uso o divulgación. La plataforma Ontu
                contiene componentes seguros a los que solo se puede acceder a
                aquellos a quienes Ontu les ha concedido un nombre de usuario y
                una contraseña. La información contenida en los componentes
                seguros de la Plataforma Ontu es confidencial y propietaria.
                Usted reconoce que la Información Confidencial (según se define
                a continuación) es un activo valioso, especial y único de Ontu y
                acepta que no utilizará Información Confidencial que no sea
                necesario para hacer uso de la Plataforma Ontu según lo
                permitido expresamente por este Acuerdo y solo durante la
                vigencia de este Acuerdo. No divulgará ni transferirá (o
                intentará inducir a otros a divulgar o transferir) ninguna
                Información Confidencial para ningún propósito. Usted notificará
                rápidamente por escrito a Ontu cualquier circunstancia que pueda
                constituir la divulgación, transferencia o uso no autorizado de
                Información Confidencial. Deberá implementar salvaguardias
                técnicas, físicas y administrativas razonables para proteger la
                Información Confidencial de la pérdida o el robo, así como el
                acceso, la divulgación, la copia, la transferencia, la
                modificación o el uso no autorizados. Usted devolverá todos los
                originales y cualquier copia de todos y cada uno de los
                materiales que contengan Información Confidencial a Ontu al
                finalizar este Acuerdo por cualquier motivo. ​
              </p>
              <p className="text-[11px] md:text-[12px]  lg:text-[13px] font-semibold leading-tight ml-8 mt-5 font-monts text-justify lg:mt-5 lg:px-10  ">
                15. Limitación de responsabilidad.
              </p>
              <p className="text-[11px] md:text-[12px]  lg:text-[13px] leading-tight mt-5 font-monts text-justify lg:mt-5 lg:px-10  ">
                <span className="font-semibold ">
                  a. Uso de la Plataforma.{" "}
                </span>
              </p>
              <p className="text-[11px] md:text-[12px]  lg:text-[13px] leading-tight ml-3 mt-5 font-monts text-justify lg:mt-5 lg:px-10  ">
                <span className="font-semibold ">i. </span>El uso de la
                Plataforma Ontu es bajo su propio riesgo EN LA MAYOR MEDIDA
                PERMITIDA POR LA LEY APLICABLE, LA PLATAFORMA ONTU SE
                PROPORCIONA "TAL CUAL" SIN GARANTÍAS DE NINGÚN TIPO, EXPRESAS O
                IMPLÍCITAS, INCLUIDAS, ENTRE OTRAS, GARANTÍAS COMERCIALES,
                IDONEIDAD PARA UN PROPÓSITO PARTICULAR O GENERAL Y NO
                INFRACCIÓN. SIN LIMITAR LO ANTERIOR, NI ONTU NI SUS AFILIADOS,
                SUBSIDIARIAS, COLABORADORES, DIRECTIVOS, FUNDADORES GARANTIZAN
                QUE LA PLATAFORMA ONTU SERÁ ININTERRUMPIDA O LIBRE DE ERRORES;
                NI HACEN NINGUNA GARANTÍA EN CUANTO A NINGÚN CONTENIDO
                DISPONIBLE EN O A TRAVÉS DE LA PLATAFORMA ONTU; NI HACEN NINGUNA
                GARANTÍA EN CUANTO AL REGISTRO, ACREDITACIÓN PROFESIONAL O
                LICENCIA PROFESIONAL; NI DAN NINGUN MATERIAL PROPORCIONADO A
                TRAVÉS O EN RELACIÓN CON EL USO DE LA PLATAFORMA ONTU O ESTE
                ACUERDO. EL ACCESO A LA PLATAFORMA ONTU SE PROPORCIONA DE FORMA
                GRATUITA COMO CORTESÍA. NI ONTU NI SUS AFILIADOS, SUBSIDIARIAS,
                COLABORADORES, DIRECTIVOS O FUNDADORES SON RESPONSABLES DE LA
                CONDUCTA, YA SEA EN LÍNEA O FUERA DE LÍNEA, DE NINGÚN USUARIO DE
                LA PLATAFORMA ONTU. NI ONTU NI SUS AFILIADOS, SUBSIDIARIAS,
                COLABORADORES, DIRECTIVOS, FUNDADORES LA PLATAFORMA ONTU ESTÉ
                LIBRE DE VIRUS, GUSANOS, CABALLOS DE TROYA U OTROS COMPONENTES
                DAÑINOS. ONTU NI SUS AFILIADOS, SUBSIDIARIAS, COLABORADORES,
                DIRECTIVOS, FUNDADORES NO PUEDEN Y NO GARANTIZAN QUE NINGUNA
                INFORMACIÓN, PERSONAL O DE OTRO TIPO, PROPORCIONADA POR USTED NO
                SE APROPIE INCORRECTAMENTE, INTERCEPTE, ELIMINA, DESTRUYA O
                UTILICE POR OTROS.
              </p>
              <p className="text-[11px] md:text-[12px]  lg:text-[13px] leading-tight mt-5 font-monts text-justify lg:mt-5 lg:px-10  ">
                <span className="font-semibold ">b. Sin Responsabilidad. </span>
              </p>
              <p className="text-[11px] md:text-[12px]  lg:text-[13px] leading-tight ml-3 mt-5 font-monts text-justify lg:mt-5 lg:px-10  ">
                <span className="font-semibold ">i. </span>USTED ACEPTA LIBERAR
                A ONTU, SUS AFILIADOS, SUBSIDIARIAS, COLABORADORES, DIRECTIVOS,
                FUNDADORES, FUNCIONARIOS, DIRECTORES, SOCIOS CORPORATIVOS O
                PARTICIPANTES DE DICHAS PARTES (COLECTIVAMENTE "MIEMBROS")
                RESPONSABLES DE CUALQUIER DAÑO, GASTO, PÉRDIDA, DEMANDA,
                RECLAMACIÓN Y/ USUARIO, CUALQUIER INSTRUCCIÓN, CONSEJO, ACTO O
                SERVICIO PROPORCIONADO POR ONTU O MIEMBROS, Y CUALQUIER
                DESTRUCCIÓN DE SU INFORMACIÓN. BAJO NINGUNA CIRCUNSTANCIA ONTU O
                LOS MIEMBROS SERÁN RESPONSABLES DE NINGÚN DAÑO INDIRECTO,
                INCIDENTAL, CONSECUENTE, ESPECIAL O EJEMPLAR QUE SURJA EN
                RELACIÓN CON SU USO O INCAPACIDAD PARA USAR LA PLATAFORMA ONTU O
                CUALQUIER SERVICIO O MERCANCÍA PROFESIONAL, INCLUSO SI DICHAS
                PARTES FUERON O DEBERÍAN HABER SIDO ADVERTIDAS DE LA POSIBILIDAD
                DE LOS MISMOS. EXCEPTO SEGÚN LO PERMITIDO EXPRESAMENTE BAJO LOS
                TÉRMINOS DE LA GARANTÍA DE FELICIDAD DE ONTU. ONTU Y LOS
                MIEMBROS NO ACEPTAN NINGUNA RESPONSABILIDAD CON RESPECTO A LA
                CALIDAD O IDONEIDAD DE CUALQUIER TRABAJO REALIZADO EN RELACIÓN
                CON LA PLATAFORMA ONTU, LOS SERVICIOS PROFESIONALES, LA
                MERCANCÍA O ESTE ACUERDO. ALGUNAS JURISDICCIONES NO PERMITEN LA
                EXCLUSIÓN O LIMITACIÓN DE CIERTOS TIPOS DE DAÑOS, POR LO QUE LAS
                LIMITACIONES ANTERIORES PUEDEN NO APLICARSE A USTED. SI, A PESAR
                DE LAS EXCLUSIONES ANTERIORES, SE DETERMINA QUE ONTU O LOS
                MIEMBROS SON RESPONSABLES DE DAÑOS, EN NINGÚN CASO LA
                RESPONSABILIDAD AGREGADA, YA SEA QUE SURJA EN CONTRATO, AGRAVIO,
                RESPONSABILIDAD ESTRICTA O DE OTRA MANERA, EXCEDERÁ LA MENOR DE
                (1) TARIFAS TOTALES PAGADAS POR USTED A ONTU DURANTE LOS SEIS
                (6) MESES ANTERIORES O (2) LA CANTIDAD EXPRESAMENTE PERMITIDA
                BAJO LA GARANTÍA DE FELICIDAD ONTU ESTABLECIDA.
              </p>
              <p className="text-[11px] md:text-[12px]  lg:text-[13px] leading-tight mt-5 font-monts text-justify lg:mt-5 lg:px-10  ">
                <span className="font-semibold ">
                  ​ c. Liberación de Responsabilidad.
                </span>
                ONTU Y LOS MIEMBROS RENUNCIAN EXPRESAMENTE A CUALQUIER
                RESPONSABILIDAD QUE PUEDA SURGIR ENTRE LOS USUARIOS DE LA
                PLATAFORMA ONTU. EN LA MEDIDA EN QUE LA PLATAFORMA ONTU CONECTE
                A UN USUARIO CON UN PROVEEDOR EXTERNO CON EL FIN DE PROPORCIONAR
                U OBTENER MERCANCÍA A CONTINUACIÓN, ONTU NO SERÁ RESPONSABLE DE
                EVALUAR LA IDONEIDAD, LEGALIDAD O CAPACIDAD DE NINGÚN PROVEEDOR
                EXTERNO Y USTED RENUNCIA Y LIBERA EXPRESAMENTE A ONTU DE TODAS Y
                CADA UNA DE LAS RESPONSABILIDADES, RECLAMACIONES O DAÑOS QUE
                SURJAN DE O ESTÉN RELACIONADOS DE ALGUNA MANERA CON EL PROVEEDOR
                DE SERVICIOS EXTERNOS. EN EL CASO DE QUE TENGA UNA DISPUTA CON
                UNO O MÁS USUARIOS, LIBERA A ONTU Y A LOS MIEMBROS DE TODAS Y
                CADA UNA DE LAS RECLAMACIONES, DEMANDAS O DAÑOS (REALES,
                DIRECTOS O CONSECUENTES) DE TODO TIPO Y NATURALEZA, CONOCIDOS Y
                DESCONOCIDOS, SOSPECHOSOS E INSOSPECHADOS, DIVULGADOS Y NO
                DIVULGADOS, QUE SURJAN DE O ESTÉN CONECTADOS DE CUALQUIER MANERA
                CON DICHA DISPUTA. ​
              </p>
              <p className="text-[11px] md:text-[12px]  lg:text-[13px] leading-tight mt-5 font-monts text-justify lg:mt-5 lg:px-10  ">
                <span className="font-semibold ">
                  ​ d. Liberación de Responsabilidad Adicional.
                </span>
                POR LO TANTO, USTED ENTIENDE QUE AL USAR LA PLATAFORMA ONTU,
                PUEDE ESTAR EXPUESTO A SERVICIOS PROFESIONALES Y/O MERCANCÍAS
                QUE SON POTENCIALMENTE PELIGROSOS, OFENSIVOS, DAÑINOS PARA
                MENORES, INSEGUROS O OBJETABLES DE OTRA MANERA, Y QUE UTILIZA LA
                PLATAFORMA ONTU, BAJO SU PROPIO RIESGO.
              </p>
              <p className="text-[11px] md:text-[12px]  lg:text-[13px] leading-tight mt-5 font-monts text-justify lg:mt-5 lg:px-10  ">
                NADA EN ESTE ACUERDO O EN LA PLATAFORMA ONTU CONSTITUYE, O ESTÁ
                DESTINADO A CONSTITUIR, ASESORAMIENTO DE NINGÚN TIPO. SI
                NECESITA ASESORAMIENTO EN RELACIÓN CON CUALQUIER ASUNTO LEGAL,
                FINANCIERO O MÉDICO, DEBE CONSULTAR A UN PROFESIONAL APROPIADO.
              </p>
              <p className="text-[11px] md:text-[12px]  lg:text-[13px] leading-tight mt-5 font-monts text-justify lg:mt-5 lg:px-10  ">
                AL UTILIZAR LA PLATAFORMA ONTU, USTED ACEPTA QUE LAS EXCLUSIONES
                Y LIMITACIONES DE RESPONSABILIDAD ESTABLECIDAS EN ESTE ACUERDO
                SON RAZONABLES. SI NO CREES QUE SEAN RAZONABLES, NO DEBES USAR
                LA PLATAFORMA ONTU. USTED ACEPTA QUE, COMO CORPORACIÓN, ONTU
                TIENE INTERÉS EN LIMITAR LA RESPONSABILIDAD PERSONAL DE SUS, SUS
                AFILIADOS, SUBSIDIARIAS, COLABORADORES, DIRECTIVOS, FUNDADORES,
                FUNCIONARIOS, DIRECTORES, SOCIOS CORPORATIVOS. USTED ACEPTA QUE
                NO PRESENTARÁ NINGUNA RECLAMACIÓN PERSONALMENTE CONTRA LOS
                AFILIADOS, SUBSIDIARIAS, COLABORADORES, DIRECTIVOS, FUNDADORES,
                FUNCIONARIOS, DIRECTORES, SOCIOS CORPORATIVOS DE ONTU EN
                RELACIÓN CON NINGUNA DISPUTA, PÉRDIDA O DAÑO. SIN PERJUICIO DE
                LO ANTERIOR, USTED ACEPTA QUE LAS LIMITACIONES DE GARANTÍAS Y
                RESPONSABILIDAD ESTABLECIDAS EN ESTE ACUERDO PROTEGERÁN A ONTU,
                SUS AFILIADOS, SUBSIDIARIAS, COLABORADORES, DIRECTIVOS,
                FUNDADORES, FUNCIONARIOS, DIRECTORES, SOCIOS CORPORATIVOS,
                SUCESORES, CESIONARIOS Y SUBCONTRATISTAS, ASÍ COMO A ONTU EN
                GENERAL.
              </p>
              <p className="text-[11px] md:text-[12px]  lg:text-[13px] leading-tight mt-5 font-monts text-justify lg:mt-5 lg:px-10  ">
                CADA PARTE RECONOCE QUE LA OTRA PARTE HA CELEBRADO ESTE ACUERDO
                BASÁNDOSE EN LAS LIMITACIONES DE RESPONSABILIDAD ESTABLECIDAS EN
                EL MISMO Y QUE ESAS LIMITACIONES SON UNA BASE ESENCIAL DE LA
                NEGOCIACIÓN ENTRE LAS PARTES.
              </p>
              <p className="text-[11px] md:text-[12px]  lg:text-[13px] font-semibold leading-tight ml-8 mt-5 font-monts text-justify lg:mt-5 lg:px-10  ">
                16. Indemnización.
              </p>
              <p className="text-[11px] md:text-[12px]  lg:text-[13px] leading-tight mt-5 font-monts text-justify lg:mt-5 lg:px-10  ">
                <span className="font-semibold ">a. </span>
                Por la presente, usted acepta indemnizar, defender y eximir de
                responsabilidad a Ontu, a sus fundadores y a los socios
                directores, funcionarios, subsidiarias, afiliados, miembros,
                colaboradores, agentes, abogados, contratistas independientes y
                proveedores de y contra todas y cada una de las reclamaciones,
                pérdidas, gastos, responsabilidades, daños o demandas (incluidos
                los honorarios y costos de pero no limitado a Profesionales), y
                (v) Su información y contenido que envíe o transmita a través de
                la Plataforma Ontu. Ontu se reserva el derecho, a su propio
                costo, de asumir la defensa y el control exclusivos de cualquier
                asunto sujeto a su indemnización. En cualquier caso, usted no
                resolverá dicha reclamación o asunto sin el consentimiento
                previo por escrito de Ontu. ​
              </p>
              <p className="text-[11px] md:text-[12px]  lg:text-[13px] font-semibold leading-tight ml-8 mt-5 font-monts text-justify lg:mt-5 lg:px-10  ">
                17. Acuerdo de Arbitraje Mutuo.
              </p>
              <p className="text-[11px] md:text-[12px]  lg:text-[13px] leading-tight mt-5 font-monts text-justify lg:mt-5 lg:px-10  ">
                <span className="font-semibold ">
                  a. Negociación Informal.{" "}
                </span>
                Para acelerar la resolución y reducir el costo de cualquier
                disputa, controversia o reclamación, pasada, presente o futura,
                entre usted y Ontu, incluyendo, entre otras, cualquier disputa o
                reclamación relacionada o que surja de este Acuerdo
                ("Controversia"), usted y Ontu pueden intentar negociar
                cualquier Disputa de manera informal (la "Negociación Informal")
                antes de iniciar cualquier arbitraje o procedimiento judicial.
                Dichas negociaciones informales comenzarán previa notificación
                por escrito en su domicilio registrado o en las Oficinas
                centrales de Ontu.
              </p>
              <p className="text-[11px] md:text-[12px]  lg:text-[13px] leading-tight mt-5 font-monts text-justify lg:mt-5 lg:px-10  ">
                <span className="font-semibold ">b. Arbitraje.</span>
                Si una Disputa no se resuelve a través de una Negociación
                Informal, usted y Ontu acuerdan resolver todas y cada una de las
                Disputas (excepto las Disputas expresamente excluidas a
                continuación) a través de la Procuraduría Federal del Consumidor
                ("PROFECO") a través de los siguientes medios de contacto tel.
                (55) 5568 8722 o al 800 168 8722 página de internet.
                https://www.gob.mx/profeco. Si la diputa no se solucionara en
                PROFECO se someterá el caso a los tribunales correspondientes y
                cada parte pagará los honorarios de sus propios abogados, sujeto
                a cualquier recurso al que esa parte pueda tener derecho
                posteriormente en virtud de la ley aplicable. Sin embargo, la
                oración anterior no se aplicará a la "Renuncia a la Acción
                Colectiva" descrita en la Sección a continuación.
              </p>
              <p className="text-[11px] md:text-[12px]  lg:text-[13px] leading-tight mt-5 font-monts text-justify lg:mt-5 lg:px-10  ">
                <span className="font-semibold ">c. Disputas excluidas. </span>
                Usted y Ontu acuerdan que las siguientes Disputas están
                excluidas de este Acuerdo de Arbitraje: (1) cualquier Disputa
                que busque hacer cumplir o proteger, o con respecto a la validez
                de cualquiera de sus derechos de propiedad intelectual o los
                nuestros; (2) reclamos individuales ante el tribunal
                correspondiente; (3) cualquier reclamo que una ley federal
                aplicable establezca expresamente que no puede ser arbitrado; y
                (4) cualquier reclamo de medidas cautelares temporales o
                preliminares sobre la base de que sin tal alivio el arbitraje
                proporcionado en este Acuerdo de Arbitraje puede volverse
                ineficaz.
              </p>
              <p className="text-[11px] md:text-[12px]  lg:text-[13px] leading-tight mt-5 font-monts text-justify lg:mt-5 lg:px-10  ">
                <span className="font-semibold ">
                  d. RENUNCIA AL DERECHO A SER DEMANDANTE O MIEMBRO DE UNA
                  ACCIÓN COLECTIVA.{" "}
                </span>
              </p>
              <p className="text-[11px] md:text-[12px]  lg:text-[13px] leading-tight mt-5 font-monts text-justify lg:mt-5 lg:px-10  ">
                Usted y Ontu acuerdan someter cualquier disputa en arbitraje
                solo de forma individual, y no como una acción colectiva o
                demanda colectiva. No habrá derecho ni autoridad para que
                ninguna Disputa sea presentada, escuchada o arbitrada como una
                acción colectiva o colectiva ("Exención de Acción Colectiva").
                Independientemente de cualquier otra cosa en este Acuerdo de
                Arbitraje y/o lo que dicte las normas aplicables de PROFECO, la
                interpretación, aplicabilidad o formación de la Renuncia a
                Acción Colectiva solo puede ser determinada por un tribunal y no
                por un árbitro.
              </p>
              <p className="text-[11px] md:text-[12px]  lg:text-[13px] leading-tight mt-5 font-monts text-justify lg:mt-5 lg:px-10  ">
                <span className="font-semibold ">e. Divisibilidad. </span>
                Usted y Ontu acuerdan que si alguna parte de esta sección
                titulada "Acuerdo de Arbitraje Mutuo" se considera ilegal o
                inaplicable, esa parte se separará y el resto de esta sección 15
                tendrá plena vigencia y efecto.
              </p>
              <p className="text-[11px] md:text-[12px]  lg:text-[13px] font-semibold leading-tight ml-8 mt-5 font-monts text-justify lg:mt-5 lg:px-10  ">
                18. Ley Aplicable; jurisdicción.
              </p>
              <p className="text-[11px] md:text-[12px]  lg:text-[13px] leading-tight mt-5 font-monts text-justify lg:mt-5 lg:px-10  ">
                <span className="font-semibold ">a. </span>
                Excepto por el Acuerdo de Arbitraje en la Sección 15, y a menos
                que esté prohibido por la ley del Estado en el que usted reside
                principalmente, Estos Términos y Condiciones de Uso se
                interpretarán y regirán por la legislación vigente en la Ciudad
                de México, renunciando a la aplicación de la Convención sobre la
                Compraventa Internacional de Mercaderías.
              </p>
              <p className="text-[11px] md:text-[12px]  lg:text-[13px] font-semibold leading-tight ml-8 mt-5 font-monts text-justify lg:mt-5 lg:px-10  ">
                19. Asignación; Cesión de Derechos
              </p>
              <p className="text-[11px] md:text-[12px]  lg:text-[13px] leading-tight mt-5 font-monts text-justify lg:mt-5 lg:px-10  ">
                <span className="font-semibold ">a. Asignación. </span>
                Este Acuerdo no puede ser asignado o transferido por usted sin
                nuestra aprobación previa por escrito. Podemos ceder o
                transferir este Acuerdo sin su consentimiento, incluyendo pero
                no limitado a cesiones: (i) a una matriz o subsidiaria, (ii) a
                un adquirente de activos, o (iii) a cualquier otro sucesor o
                adquirente. Cualquier cesión que viole esta sección será nula y
                sin efecto. Este Acuerdo redundará en beneficio de los sucesores
                y cesionarios permitidos.
              </p>
              <p className="text-[11px] md:text-[12px]  lg:text-[13px] leading-tight mt-5 font-monts text-justify lg:mt-5 lg:px-10  ">
                <span className="font-semibold ">b. Cesión. </span>
                Los derechos concedidos al Usuario deben considerarse como
                derechos personales y el Usuario no podrá ceder o transmitirlos,
                ni autorizar a cualquier tercero para usarlos de cualquier
                manera. Ontu podrá ceder total o parcialmente sus derechos y/o
                obligaciones a su cargo a cualquier tercero, subsidiaria o
                matriz de Ontu sin autorización previa del Cliente. En virtud de
                dicha cesión, Ontu quedará liberada de cualquier obligación a
                favor del Usuario, establecida en el presente Acuerdo.
              </p>

              <p className="text-[11px] md:text-[12px]  lg:text-[13px] font-semibold leading-tight ml-8 mt-5 font-monts text-justify lg:mt-5 lg:px-10  ">
                20. Disposiciones Generales.
              </p>
              <p className="text-[11px] md:text-[12px]  lg:text-[13px] leading-tight mt-5 font-monts text-justify lg:mt-5 lg:px-10  ">
                <span className="font-semibold ">a. </span>
                Este Acuerdo no pretende ni crea ninguna relación de agencia,
                asociación, empresa conjunta, empleador-empleado o
                franquiciador-franquiciado. El incumplimiento por nuestra parte
                de cualquier disposición de este Acuerdo no se interpretará como
                una renuncia a ninguna disposición o derecho. Este Acuerdo
                constituye el acuerdo completo entre usted y Ontu con respecto a
                su objeto. Si alguna disposición de este Acuerdo se considera
                inválida o inaplicable, las disposiciones restantes se aplicarán
                en la mayor medida posible, y las disposiciones restantes
                permanecerán en pleno vigor y efecto. Usted acepta que, a menos
                que se disponga expresamente lo contrario en este Acuerdo, no
                habrá terceros beneficiarios de este Acuerdo. Usted acepta que,
                independientemente de cualquier estatuto o ley en contrario,
                cualquier Disputa, reclamación o causa de acción que surja de o
                esté relacionada con este Acuerdo debe presentarse dentro de un
                (1) año después de que dicha Disputa, reclamación o causa de
                acción surja o prescriba para siempre. Todos los avisos
                proporcionados por una parte en relación con este Acuerdo se
                considerarán dados a partir del día en que se reciban por correo
                electrónico, mensajero, servicio de entrega. Los subtítulos de
                este Acuerdo son únicamente por conveniencia y no afectarán la
                interpretación de este Acuerdo. Este Acuerdo no se modificará
                excepto por escrito firmado por ambas partes o mediante un nuevo
                desplazamiento por Ontu, como se describe a continuación. Este
                Acuerdo se interpretará como si fuera redactado conjuntamente
                por las partes. Ontu no tendrá ninguna responsabilidad ante
                usted por cualquier incumplimiento o retraso en el cumplimiento
                de sus obligaciones en este Acuerdo cuando dicho incumplimiento
                o retraso sea causado por un evento o circunstancia fuera del
                control razonable de Ontu, incluidos, entre otros, huelgas
                patronales y otros conflictos laborales, averías de sistemas o
                acceso a la red, incumplimiento de los profesionales,
                inundaciones, incendios, explosiones, actos de terrorismo o
                accidentes.
              </p>
              <p className="text-[11px] md:text-[12px]  lg:text-[13px] font-semibold leading-tight ml-8 mt-5 font-monts text-justify lg:mt-5 lg:px-10  ">
                21. Cambios en el Acuerdo.
              </p>
              <p className="text-[11px] md:text-[12px]  lg:text-[13px] leading-tight mt-5 font-monts text-justify lg:mt-5 lg:px-10  ">
                <span className="font-semibold ">a. </span>
                Nos reservamos el derecho, a nuestra entera y absoluta
                discreción, de cambiar, modificar, agregar, complementar o
                eliminar cualquiera de los términos y condiciones de este
                Acuerdo en cualquier momento, con o sin previo aviso. Si algún
                cambio futuro en este Acuerdo es inaceptable para usted o hace
                que ya no cumpla con este Acuerdo, debe rescindir e
                inmediatamente dejar de usar la Plataforma Ontu. Su uso
                continuado de la Plataforma Ontu después de cualquier revisión
                de este Acuerdo constituye su aceptación completa e irrevocable
                de todos y cada uno de esos cambios.
              </p>
              <p className="text-[11px] md:text-[12px]  lg:text-[13px] font-semibold leading-tight ml-8 mt-5 font-monts text-justify lg:mt-5 lg:px-10  ">
                22. Divisibilidad.
              </p>
              <p className="text-[11px] md:text-[12px]  lg:text-[13px] leading-tight mt-5 font-monts text-justify lg:mt-5 lg:px-10  ">
                <span className="font-semibold ">a. </span>
                Estos Términos se considerarán separables. En el caso de que se
                determine que alguna disposición es inaplicable o inválida,
                dicha disposición se aplicará en la mayor medida permitida por
                la ley, y dicha determinación no afectará la validez y
                aplicabilidad de ninguna otra disposición restante.
              </p>
              <p className="text-[11px] md:text-[12px]  lg:text-[13px] font-semibold leading-tight ml-8 mt-5 font-monts text-justify lg:mt-5 lg:px-10  ">
                23. Información de contacto.
              </p>
              <p className="text-[11px] md:text-[12px]  lg:text-[13px] leading-tight mt-5 font-monts text-justify lg:mt-5 lg:px-10  ">
                <span className="font-semibold ">a. </span>
                Si tiene alguna pregunta con respecto a este Acuerdo,
                contáctenos en{" "}
                <span className="font-semibold mr-1 text-ontu">
                  <a href="">hola@ontu.mx</a>
                </span>
              </p>
              <p className="text-[11px] md:text-[12px]  lg:text-[13px] leading-tight mt-5 font-monts text-justify lg:mt-5 lg:px-10  ">
                POR LA PRESENTE RECONOZCO QUE HE LEÍDO Y ENTENDIDO ESTOS
                TÉRMINOS DE USO Y AVISO DE PRIVACIDAD, Y ACEPTO QUE MI USO DE LA
                PLATAFORMA ONTU ES UN RECONOCIMIENTO DE MI ACUERDO DE ESTAR
                OBLIGADO POR TODOS LOS TÉRMINOS Y CONDICIONES DE ESTE ACUERDO.
              </p>
              <p className="text-[11px] md:text-[12px]  lg:text-[13px] leading-tight mt-5 font-monts text-justify lg:mt-5 lg:px-10  ">
                Última actualización:{" "}
                <span className="font-semibold mr-1 ">8 de abril de 2024.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <FooterCR />
    </main>
  );
};
