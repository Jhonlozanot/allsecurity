import React from "react";
import style from "./noticiasAllsa.module.css";

const noticiasAllsa = (props) => {
  const noticias = props.noticias;

  console.log(noticias);

  return (
    <>
      <div className={style.container}>
        <section className={style.noticia_main}>
          <img src={noticias["principal"].image} alt="principal" />
          <div className={style.box}>
            <div className={style.title}>
              <h2>{noticias["principal"].title}</h2>
              <p>{noticias["principal"].tag}</p>
            </div>
          </div>

          <div className={style.desc}></div>
        </section>

        <section className={style.noticias}>
          <div className={style.izquierdo}>
            <div className={style.figura}>
              <p className={style.servis}>SECCIÓN DE NOTICIAS</p>
              <div className={style.triangulo}></div>
            </div>
            {noticias["secondary"].map((noticia) => (
              <div className={style.child_izquierdo}>
                <img src={noticia.image} alt="" />
                <div className={style.text}>
                  <h2>{noticia.title}</h2>
                  <p>{noticia.tag}</p>
                  <div className={style.option}>
                    <p>30 agosto 2021</p>
                    {/* <a href={`/noticia/${noticia.id}`} className={style.boton}>
                      Leer más
                    </a> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <h3>TAMBIEN PUEDE INTERSARLE</h3>
          <div className={style.derecho}>
            {noticias["other_news"].map((noticia) => (
              <div className={style.child_derecho}>
                <p>{noticia.title}</p>
                <div className={style.linea}></div>
                <div className={style.child_derecho_content}>
                  <img src={noticia.image} alt="" />
                  <p>{noticia.tag}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};
export default noticiasAllsa;
