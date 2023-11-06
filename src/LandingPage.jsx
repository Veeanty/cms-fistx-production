import { useState } from "react";
import { Container, Navbar, Nav, NavDropdown, Carousel } from "react-bootstrap";
import { Helmet } from "react-helmet";
import Footer from "./component/Footer";
import "@fontsource/poppins";
import "bootstrap/dist/css/bootstrap.css";
import Mobile1 from "../src/image/Mobile-1.png";
import Mobile2 from "../src/image/Mobile-2.png";
import Carousel1 from "./image/carousel1.png";
import Carousel2 from "./image/carousel2.png";
import Carousel3 from "./image/carousel3.png";
import Logo from "./image/Logo.png";
import "./LandingPage.css";

const LandingPage = () => {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const title = "Halaman Utama";

  return (
    <>
      <div className="backgroundd">
        <Helmet>
          <title>{title}</title>
        </Helmet>
        {/* navigation bar */}
        <Navbar className="navbar" collapseOnSelect expand="lg" sticky="top">
          <Container className="container1" fluid>
            <Navbar.Brand className="brandlogo" href="/">
              <img src={Logo} alt="Logo Perusahaan" width="100" height="85" />
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls="responsive-navbar-nav"
              className="custom-toggler"
            />
            <Navbar.Collapse id="responsive-navbar-nav ">
              <Nav className="me-auto">
                <Nav.Link className="btn-link" href="#bag-1">
                  Beranda
                </Nav.Link>
                <NavDropdown title="Produk" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Solusi" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Solusi</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Bantuan" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">
                    Bantuan
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Perusahaan" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link className="btn-lik" href="#footer">
                  Hubungi Kami
                </Nav.Link>
              </Nav>
              <Nav>
                <button className="btn btn-login" type="button">
                  Daftar Aplikasi
                </button>
                <a className="mx-4 btn btn-login" href="/login">
                  Masuk
                </a>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <div className="flex-container">
          <div className="flex-content-kiri">
            <h1 className="text-title-lp flex-content-kiri">
              MENCIPTAKAN MASA DEPAN YANG LEBIH BAIK DALAM APLIKASI PERIKANAN.
            </h1>
            <p className="text-deskripsi-lp flex-content-kiri">
              FisTx adalah sebuah startup perikanan yang didedikasikan untuk
              menciptakan solusi inovatif dalam industri perikanan. Kami percaya
              bahwa dengan teknologi terkini dan pendekatan berkelanjutan, kita
              dapat meningkatkan produktivitas, kualitas, dan keberlanjutan
              perikanan di seluruh dunia.
            </p>
          </div>
          <div className="flex-content-kanan">
            <img
              src={Mobile1}
              alt="Mobile 1"
              width="300"
              height="600"
              className="image-with-shadow mobile-1"
            />
            <img
              src={Mobile2}
              alt="Mobile 2"
              className="image-with-shadow mobile-2"
            />
          </div>
        </div>

        <div className="white-box"></div>

        <div id="bag-1">
          <Carousel fade activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={Carousel3}
                alt="First Slide"
              />
              <Carousel.Caption>
                {/* <h3>First slide label</h3>
            <p>testing 1</p> */}
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={Carousel1}
                alt="Second slide"
              />
              <Carousel.Caption>
                {/* <h3>Second slide label</h3>
            <p>testing 2</p> */}
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={Carousel2}
                alt="Third Slide"
              />
              <Carousel.Caption>
                {/* <h3>Third Slide label</h3>
              <p>
                testing 3
              </p> */}
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>

        <div id="footer">
          {/* footer */}
          <Footer />
        </div>
      </div>
    </>
  );
};

export default LandingPage;
