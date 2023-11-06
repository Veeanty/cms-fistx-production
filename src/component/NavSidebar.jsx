import { Children } from "react";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { useProSidebar } from "react-pro-sidebar";
import PropTypes from "prop-types";
import { IoAccessibility } from "react-icons/io5";
import { IoHome } from "react-icons/io5";
import { IoLogOut } from "react-icons/io5";
import { IoNotifications } from "react-icons/io5";
import LogoImage from "../image/Logo.png";
import "./css/NavSidebar.css";

export default function NavSidebar({ children }) {
  const { collapseSidebar } = useProSidebar();
  const [isChecked, setIsChecked] = useState(false);

  const handleLogout = () => {
    Cookies.remove("Login");
  };

  const handleCheckboxLabelClick = () => {
    setIsChecked(!isChecked);
    collapseSidebar();
  };

  useEffect(() => {
    const menuButton = document.getElementById("menu-button");

    menuButton.addEventListener("click", function () {
      const checkbox = document.getElementById("menu-checkbox");
      checkbox.checked = isChecked;
    });

    return () => {
      menuButton.removeEventListener("click", function () {
        const checkbox = document.getElementById("menu-checkbox");
        checkbox.checked = isChecked;
      });
    };
  }, [isChecked]);

  return (
    <>
      <div
        style={{
          display: "flex",
          backgroundColor: "",
          height: "100vh",
        }}
      >
        <Sidebar transitionDuration={700} className="Sidebar">
          <div
            style={{
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
            }}
          >
            {!isChecked && (
              <img src={LogoImage} className="logo-sidebar" alt="" />
            )}
          </div>

          <Menu className="Submenu">
            <SubMenu className="side-font" label="Profil" icon={<IoHome />}>
              <MenuItem href="CekKualitasAir">Profil Tambak</MenuItem>
              <MenuItem href="CekKualitasAir">Tambah Baru</MenuItem>
            </SubMenu>
            <SubMenu
              className="side-font"
              label="Aktivitas"
              icon={<IoAccessibility />}
            >
              <MenuItem href="CekKualitasAir">Perlakuan</MenuItem>
              <MenuItem href="CekKualitasAir">Pakan</MenuItem>
              <MenuItem href="admin">Kualitas Air</MenuItem>
              <MenuItem href="CekKualitasAir">Sampling</MenuItem>
              <MenuItem href="CekKualitasAir">Panen</MenuItem>
              <MenuItem href="CekKualitasAir">Penyakit</MenuItem>
            </SubMenu>
            <MenuItem label="Logout" icon={<IoLogOut />} onClick={handleLogout}
            >
              <Link to="/" className="side-font"
              >
                Log Out
              </Link>
            </MenuItem>
          </Menu>
        </Sidebar>
        <main style={{ width: "100vw" }}>
          <div style={{ display: "flex", flex: 1 }}>
            <nav style={{ backgroundColor: "white", padding: "10px" }}>
              <div id="menu-button">
                <input type="checkbox" id="menu-checkbox" checked={isChecked} />
                <label
                  htmlFor="menu-checkbox"
                  id="menu-label"
                  onClick={handleCheckboxLabelClick}
                >
                  <div id="hamburger"></div>
                </label>
              </div>
            </nav>
            <nav style={{ padding: "10px", backgroundColor: "white", flex: 1 }}>
              <a
                href="dashboard"
                style={{ textDecoration: "none", color: "black" }}
              >
                Tambah Tambak
              </a>
            </nav>

            <nav style={{ padding: "10px", backgroundColor: "white" }}>
              {" "}
              {<IoNotifications />}
            </nav>
            <nav style={{ padding: "10px", backgroundColor: "white" }}>
              <a
                href="dashboard"
                style={{ textDecoration: "none", color: "black" }}>
                Profil
              </a>
            </nav>
          </div>
          <div>
            {Children.map(children, (child) => (
              <div>
                <div>
                  {child}{" "}
                  {/* <h1 style={{ backgroundColor: "blue" }}>
                    Test 3 NavSidebar Js
                  </h1> */}
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </>
  );
}
NavSidebar.propTypes = {
  children: PropTypes.node.isRequired,
};
