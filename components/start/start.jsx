import React, { useState } from "react";
import ServiciosSwiper from "../serviciosSwiper/serviciosSwiper";
import Image from "next/image";
import Link from "next/link";
import styles from "./start.module.css";
import DialogServicio from "../dialog-servicio/dialog-servicio";

const Start = (props) => {
  const [value, setValue] = useState(false);

  const [servicio, setServicio] = useState({});

  const [lista, setLista] = useState([]);

  const open = (valor) => {
    setServicio(valor);
    setLista(valor.lista);
    setValue(true);
  };

  const close = () => {
    setValue(false);
  };

  const servicios_detail = [
    {
      image: props.servicios[0].image,
      title: props.servicios[0].title,
      tag: props.servicios[0].tag,
      complete:
        "Es una herramienta confidencial que permite identificar amenazas y peligros a los que está expuesta una organización, corroborar la existencia de delitos, demostrar la culpabilidad de los autores, así como proceder con las acciones legales y penales necesarias para sancionar a los responsables. Las investigaciones permiten la recolección de pruebas y evidencias necesarias para denunciar ante los niveles más altos de la corporación los hechos delictivos, permitiéndoles tomar acciones correctivas oportunas y decisiones estratégicas sobre la seguridad de sus empresas .",
      subtitle: "Tipos de investigaciones comunes:",
      lista: [
        "Robo Sistemático",
        "Desbalance Patrimonial",
        "Competencia Desleal",
        "Fraudes y Estafas",
      ],
    },
    {
      image: "/images/png/crisis.png",
      title: props.servicios[1].title,
      tag: props.servicios[1].tag,
      complete:
        "Todas las organizaciones están expuestas a enfrentar situaciones externas que impactan en su organización, reputación y/o procesos, afectando así la continuidad de su negocio. Realizamos una preparación preventiva para las amenazas y peligros a los que podría estar expuesta su empresa a través de la organización de comités de crisis, elaboración de procedimientos de respuesta, realización de simulacros y el dictado de capacitaciones.Ofrecemos además un Sistema de Soporte Permanente de Prevención (SSPP) que les permitirá contar oportunamente con importante información analizada y procesada por nuestro Equipo Especializado de Prevención de Crisis, obtenida de fuentes propias, así como de fuentes abiertas, para permitirles un adecuado Análisis estratégico preventivo ante posibles situaciones de crisis e Implementación inmediata de acciones concretas ante inminentes situaciones de crisis que pudieran exponer a su organización a daños personales, materiales o de imagen institucional.",
      subtitle: "Tipos de crisis:",
      lista: [
        "Conflictos Sociales: manifestaciones, paros, huelgas y bloqueos.",
        "Actos Delincuenciales: robos, asaltos, extorsiones y secuestros.",
        "Desastres Naturales: deslizamientos, inundaciones, sismos y tsunamis.",
        "Incendios",
        "Fenómeno del Niño",
        "Otros",
      ],
    },
    {
      image: props.servicios[2].image,
      title: props.servicios[2].title,
      tag: props.servicios[2].tag,
      complete:
        "Este servicio permite conocer que tan vulnerable se encuentra el cliente en cuanto a la carga de sus contendores, evitando que estos sean contaminados (preñados) durante su estancia en el puerto antes de salir a embarque. Es importante deslindar responsabilidades ante algún acto irregular que pueda implicar al cliente en sucesos irregulares, por ello es importante tener un equipo especializado con ardua experiencia en inteligencia y contra inteligencia, que permita mediante herramientas tecnológicas detectar oportunamente vulnerabilidades que puedan comprometer la carga y a sus representantes, evitando ser comprendidos en investigaciones de ese tipo, las mismas que pudieran generar pérdidas económicas y de prestigio.",
      subtitle: "Procedimientos de inspección:",
      lista: [
        "Control y Supervisión a contenedores",
        "Inspección Física",
        "Revisión Exhaustiva",
        "Filmación ininterrumpida de carga",
        "Precintado",
        "Documentación requerida",
      ],
    },
    {
      image: props.servicios[3].image,
      title: props.servicios[3].title,
      tag: props.servicios[3].tag,
      complete:
        "Mediante técnicas de peritaje criminalístico, se puede determinar la autoría de participación y/o veracidad de distintos documentos analizados como evidencia ante procesos investigatorios o judiciales. Los peritos criminalistas son personas especializadas en el análisis y estudio de delitos o crímenes y para ello, es determinante realizar un análisis a la documentación y/o evidencia que se tenga, emitiendo así un dictamen final sobre los hallazgos encontrados según la pericia realiza.",
      subtitle: "Tipos de investigaciones comunes:",
      lista: [
        "	Pericia Dactiloscópica",
        "	Pericia Grafotécnica",
        "	Pericia Balística",
        "	Pericia Sonora – audios",
        "	Pericia de Identificación de personas (rostros y movimientos)",
        "	Pericia de Biología Forense",
        "	Pericia Contable",
        "	Pericia Físico Química",
        "	Pericia de Fotografía Forense",
        "	Pericia de Odontología Forense",
      ],
    },
    {
      image: props.servicios[4].image,
      title: props.servicios[4].title,
      tag: props.servicios[4].tag,
      complete:
        "Mediante la utilización de equipos electrónicos sofisticados es posible detectar aparatos clandestinos de escucha y video, los mismos que pudieran estar trasmitiendo al exterior información de reuniones de carácter confidencial.",
      subtitle: "Tipos de inspecciones:",
      lista: [
        "Inspección Técnica-Electrónica: Utilización de equipos sofisticados para la detección electrónica de micrófonos ocultos, intervenciones telefónicas, dispositivos de grabación de audio y/o video que pudieran atentar ilegalmente contra la confidencialidad de sus operaciones.",
        "Bloqueo Electrónico: Se cuenta con equipo especializado para el bloqueo electrónico de señales de audio y video que permitirán garantizar la seguridad de sus reuniones de negocios, bloqueando la grabación no autorizada de sus conversaciones.",
      ],
    },
  ];

  const services = [
    {
      id: 1,
      image: "/images/png/corporativa.png",
      title: props.servicios[0].title,
    },
    {
      id: 2,
      image: "/images/png/crisis.png",
      title: props.servicios[1].title,
    },
    {
      id: 3,
      image: "/images/png/contenedores.png",
      title: props.servicios[2].title,
    },
    {
      id: 4,
      image: "/images/png/peritaje.png",
      title: props.servicios[3].title,
    },
    {
      id: 5,
      image: "/images/png/nilo1.jpeg",
      title: props.servicios[4].title,
    },
  ];

  return (
    <>
      <ServiciosSwiper servicios={services} />
      <section className={styles.servicios_sec}>
        <div className={styles.servicios}>
          <div className={styles.figura}>
            <p className={styles.servis}>SERVICIOS</p>
            <div className={styles.triangulo}></div>
          </div>
          {servicios_detail.map((servicio) => (
            <div className={styles.servicios__item} key={servicio.id}>
              <img src={servicio.image} alt="" />
              <div className={styles.servicios__item_datos}>
                <h3>{servicio.title}</h3>
                <p>{servicio.tag}</p>
                <button
                  className={styles.button}
                  onClick={() => open(servicio)}
                >
                  Ver más
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className={styles.empresa_sec}>
        <div className={styles.empresa}>
          <div className={styles.empresa_info}>
            <h3>ALLSSA</h3>
            <p>
              Empresa especializada en servicios de seguridad corporativa con
              más de 28 años de reconocida trayectoria en el mercado peruano.
              Actualmente forma parte del HOLDING de empresas del GRUPO MEJIA,
              brindando servicios de investigaciones corporativas, prevención de
              riesgos sociales, inspección de seguridad de contenedores,
              pericias y peritajes, entre otros.
            </p>
            <img src="images/png/logo-blanco.png" alt="logo-blanco" />
          </div>
          <div className={styles.empresa_img}>
            <Image
              src="/images/png/nosotros.png"
              layout="fill"
              objectFit="cover"
            ></Image>
          </div>
        </div>
      </section>
      <section className={styles.pmv_sec}>
        <div className={styles.pmv}>
          <div className={styles.pmv_item1}>
            <img src="/images/svg/proposito.svg" alt="" />
            <h2>Proposito</h2>
            <p>
              Brindar soluciones altamente especializadas a los problemas de
              deshonestidad que afectan la seguridad corporativa. Así como
              también, mitigar los riesgos y peligros a los que las empresas se
              ven expuestas por conflictos sociales.
            </p>
          </div>
          <div className={styles.pmv_item2}>
            <img src="/images/svg/mision.svg" alt="" />
            <h2>Misión</h2>
            <p>
              Resolver de manera oportuna, eficiente y confidencial todas
              aquellas situaciones que atenten contra el correcto
              desenvolvimiento de las actividades de nuestros clientes y pongan
              en riesgo su seguridad.
            </p>
          </div>
          <div className={styles.pmv_item3}>
            <img src="/images/svg/vision.svg" alt="" />
            <h2>Visión</h2>
            <p>
              Consolidarse en el mercado nacional como la empresa líder en
              servicios de investigaciones empresariales reservadas. Generando
              alianzas con empresas extranjeras.
            </p>
          </div>
        </div>
        <DialogServicio
          onClose={close}
          open={value}
          data={servicio}
          lista={lista}
        />
        <div className={styles.pmv__imgs}>
          <img src="/images/png/proposito.png" alt="" />
          <img src="/images/png/mision.png" alt="" />
          <img src="/images/png/vision.png" alt="" />
        </div>
      </section>
    </>
  );
};

export default Start;
