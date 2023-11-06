import { Children } from "react";
import PropTypes from "prop-types"; // Impor PropTypes
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { AiOutlineLogout } from "react-icons/ai";
import { IoWater } from "react-icons/io5";
import "./MenuSidebar.css";
import { Link } from "react-router-dom";

const MenuSidebar = ({ children }) => {
  return (
    <>
      <div style={{ display: "flex", height: "100%", minHeight: "400px" }}>
        <Sidebar
          transitionDuration={700}
          style={{
            height: "100vh",
            width: "15vw",
          }}
        >
          {/* <img src={require('../image/Logo.png')} style={{
     width: "200px",
     height: "170px",
     margin: "10px 25px",
     padding: "10px 10px"
     }}/> */}
          <Menu>
            <MenuItem component={<Link to="/Admin" />}>Home</MenuItem>
            <SubMenu label="Kualitas Air" icon={<IoWater />}>
              <MenuItem component={<Link to="/Admin/LihatKolam" />}>
                Lihat Data Kolam Air
              </MenuItem>
              <MenuItem component={<Link to="/Admin/LihatKualitasPagi" />}>
                Lihat Data Kualitas Pagi
              </MenuItem>
              <MenuItem component={<Link to="/Admin/LihatKualitasSore" />}>
                Lihat Data Kualitas Air Sore
              </MenuItem>
            </SubMenu>
            <MenuItem icon={<AiOutlineLogout />}>Logout </MenuItem>
          </Menu>
        </Sidebar>
        <main style={{ padding: 10 }}>
          <div>
            {Children.map(children, (child) => (
              <div>{child}</div>
            ))}
          </div>
        </main>
      </div>
    </>
  );
};

MenuSidebar.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MenuSidebar;
