import React from "react";
import Image from "next/image";
import styles from "./nosotros1.module.css";

function Nosotros1() {
  return (
    <section>
      <div className={styles.nosotros_portada}>
        <img src="/images/png/nosotros.png" alt="" />
        <div className={styles.fondo}> </div>
        <div className={styles.nosotros_portada_texto}>
          <h2>Nosotros</h2>
          <p>DESCUBRE MÁS SOBRE NOSOTROS</p>
        </div>
        <div className={styles.sociales}>
          <img src="/images/svg/facebook.svg" alt="" />
          <img src="/images/svg/linkedin.svg" alt="" />
        </div>
      </div>
      <div className={styles.nosotros_about}>
        <div className={styles.figura}>
          <p className={styles.servis}>LA EMPRESA</p>
        </div>
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
              src="/images/png/nosotros2.png"
              objectFit="cover"
              layout="fill"
            />
          </div>
        </div>
        <div className={styles.figura}>
          <p className={styles.servis2}>HISTORIA</p>
          <div className={styles.triangulo2}></div>
        </div>
        <div className={styles.empresa}>
          <div className={styles.empresa_info2}>
            <h3>INICIOS</h3>
            <p>
              All Security S.A., fue fundada el 24 de mayo de 1993 para brindar
              servicios de consultoría, enfocándose principalmente en agregar
              mecanismos seguridad para los procesos internos de las diversas
              áreas de la empresa. Con el tiempo la empresa fue
              especializándose, llegando a ser referente en investigaciones
              corporativas a nivel nacional.
            </p>
          </div>
          <div className={styles.empresa_img}>
            <Image
              src="/images/png/espalda.png"
              objectFit="cover"
              layout="fill"
            />
          </div>
        </div>

        <div className={styles.pmv}>
          <div className={styles.pmv_item}>
            <img src="/images/svg/proposito.svg" alt="" />
            <h2>Proposito</h2>
            <p>
              Brindar soluciones altamente especializadas a los problemas de
              deshonestidad que afectan la seguridad corporativa. Así como
              también, mitigar los riesgos y peligros a los que las empresas se
              ven expuestas por conflictos sociales.
            </p>
          </div>
          <div className={styles.pmv_item}>
            <img src="/images/svg/mision.svg" alt="" />
            <h2>Misión</h2>
            <p>
              Resolver de manera oportuna, eficiente y confidencial todas
              aquellas situaciones que atenten contra el correcto
              desenvolvimiento de las actividades de nuestros clientes y pongan
              en riesgo su seguridad.
            </p>
          </div>
          <div className={styles.pmv_item}>
            <img src="/images/svg/vision.svg" alt="" />
            <h2>Visión</h2>
            <p>
              Consolidarse en el mercado nacional como la empresa líder en
              servicios de investigaciones empresariales reservadas. Generando
              alianzas con empresas extranjeras.
            </p>
          </div>
        </div>
        <div className={styles.pmv__imgs}>
          <img src="/images/png/proposito.png" alt="" />
          <img src="/images/png/mision.png" alt="" />
          <img src="/images/png/vision.png" alt="" />
        </div>
      </div>
    </section>
  );
}
export default Nosotros1;
