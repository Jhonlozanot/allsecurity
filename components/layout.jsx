import React, { useState } from "react";
import Head from "next/head";
import styled from "styled-components";
import Link from "next/link";

const Logo = "/images/svg/logo.svg";
const Layout = (props) => {
  const [toggle, toggleNav] = useState(false);

  const Item = styled.li``;

  const Overlay = styled.div`
    height: ${(props) => (props.open ? "90vh" : 0)};
    width: 100vw;
    background: #fff;
    text-align: center;

    @media (min-width: 768px) {
      display: none;
    }
  `;

  const OverlayMenu = styled.ul`
    list-style: none;
    position: absolute;
    text-align: center;
    width: 100%;
    padding: 0;

    @media (min-width: 768px) {
      display: none;
    }

    li {
      opacity: ${(props) => (props.open ? 1 : 0)};
      margin: 15%;
      @media (min-width: 768px) {
        display: none;
      }
    }

    li a {
      text-decoration: none;
      font-size: 20px;
      font-weight: normal;
      color: black;
      @media (min-width: 768px) {
        display: none;
      }
    }
  `;

  return (
    <>
      <Head>
        <title>{props.title} | Allssa </title>
        <meta charSet="utf-8" />
        <meta lang="es" />
        <link rel="shortcut icon" href="static/logo.ico"></link>
      </Head>
      {/* Navbar */}
      <menu className="menu-nav">
        <Link href="/">
          <a>
            <img src={Logo} alt="" />
          </a>
        </Link>

        <div className="links">
          <Link href="/">Inicio</Link>
          <Link href="/nosotros">Nosotros</Link>
          <Link href="/servicios">Servicios</Link>
          <Link href="/noticias">Noticias</Link>
          <Link href="/contacto">Contacto</Link>
        </div>

        <button onClick={() => toggleNav(!toggle)}>
          <span open={toggle} />
          <span open={toggle} />
          <span open={toggle} />
        </button>
      </menu>
      <Overlay open={toggle}>
        <OverlayMenu open={toggle}>
          <Item>
            <Link href="/">Inicio</Link>
          </Item>
          <Item>
            <Link href="/nosotros">Nosotros</Link>
          </Item>
          <Item>
            <Link href="/servicios">Servicios</Link>
          </Item>
          <Item>
            <Link href="/noticias">Noticias</Link>
          </Item>
          <Item>
            <Link href="/contacto">Contacto</Link>
          </Item>
        </OverlayMenu>
      </Overlay>
      {/* Main */}
      <main className=" animated fadeIn ">{props.children}</main>
      {/* Footer */}
      <footer className="footer">
        <div className="redes">
          <img src="/images/svg/facebook.svg" alt="" />
          <img src="/images/svg/linkedin.svg" alt="" />
        </div>
        <div className="sized"></div>
        <div className="text">
          <p>
            Nuestros resultados garantizan la satisfacción de nuestros clientes
            para la continuidad de su negocio.
          </p>
        </div>
        <div className="text">
          <img src="images/svg/locacion.svg" alt="" width="18px" />
          &nbsp; &nbsp;
          <p>José Gálvez Barrenechea 592 Oficina 603</p>
        </div>
      </footer>
    </>
  );
};

export default Layout;
