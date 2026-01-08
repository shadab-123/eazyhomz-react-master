import React, { useEffect, useRef, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link, NavLink, useLocation } from "react-router-dom";
import { NAV_ROUTE_LINK } from "../../utils/data";
import style from "./navbar.module.scss";
import Dropdown from "./Dropdown";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { useTranslation } from "react-i18next";
import DialogModal from "../Modal";
import FormComponent from "../Form";

const Navbar = () => {
  const NAV_ROUTE_LINKS = NAV_ROUTE_LINK();
  const location = useLocation();
  const sidebarRef = useRef(null);

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [openSidebarIndex, setOpenSidebarIndex] = useState(null);
  const [nestedLinks, setNestedLinks] = useState([]);
  const [openFormModal, setOpenFormModal] = useState(false);

  const { i18n } = useTranslation();
  const [lang, setLang] = useState(localStorage.getItem("lang") || "en");

  /* =========================
     LANGUAGE
  ========================== */
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLang(lng);
    localStorage.setItem("lang", lng);
  };

  /* =========================
     SIDEBAR HANDLERS
  ========================== */
  const openSidebar = () => setSidebarOpen(true);
  const closeSidebar = () => setSidebarOpen(false);

  const handleOutsideClick = (e) => {
    if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
      closeSidebar();
    }
  };

  const handleSidebarAccordion = (index, nested) => {
    setOpenSidebarIndex(openSidebarIndex === index ? null : index);
    setNestedLinks(nested);
  };

  /* =========================
     EFFECTS
  ========================== */
  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        closeSidebar();
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  /* =========================
     RENDER
  ========================== */
  return (
    <>
      {/* ================= TOP NAV ================= */}
      <div className={style.container}>
        {/* LOGO */}
        <div className={style.logo}>
          <Link to="/">
            <img src="/assets/images/eazyhomz-logo.png" alt="eazyhomz" />
            <h1>Eazyhomz</h1>
          </Link>
        </div>

        {/* DESKTOP NAV */}
        <ul className={style.listItem}>
          {NAV_ROUTE_LINKS.slice(1).map((val, index) =>
            !val.havingNestedRoute ? (
              <li
                key={index}
                className={
                  location.pathname === val.to
                    ? style.activeNavItem
                    : style.navItem
                }
              >
                {val.isDisable ? (
                  <div style={{ color: "#999" }}>{val.text}</div>
                ) : (
                  <NavLink to={val.to} style={{ textDecoration: "none" }}>
                    <div>
                    {val.text}
                  </div>
                  </NavLink>
                )}
              </li>
            ) : (
              <li
                key={index}
                onMouseEnter={() => setActiveDropdown(index)}
                onMouseLeave={() => setActiveDropdown(null)}
                className={
                  location.pathname === val.to
                    ? style.activeNavItem
                    : style.navItem
                }
              >
                <NavLink to={val.to} style={{ textDecoration: "none" }}>
                  <div>
                    {val.text} <span className={style.arrow} />
                  </div>
                </NavLink>

                {activeDropdown === index && !val.isDisable && (
                  <Dropdown menuItemsData={val.nestedLinks} />
                )}
              </li>
            )
          )}
        </ul>

        {/* LANGUAGE TOGGLE */}
        <div className={style.languageToggle}>
          <span className={style.langLabel}>
            عربي
          </span>
          <label className={style.toggleSwitch}>
            <input
              type="checkbox"
              checked={lang === "en"}
              onChange={() => changeLanguage(lang === "en" ? "ar" : "en")}
            />
            <span className={style.slider}></span>
          </label>
          <span className={style.langLabel}>
            EN
          </span>
        </div>

        {/* HAMBURGER */}
        <div className={style.icon}>
          <MenuIcon fontSize="large" onClick={openSidebar} />
        </div>
      </div>

      {/* ================= SIDEBAR ================= */}
      <div
        ref={sidebarRef}
        className={`${style.sideBar} ${sidebarOpen ? style.open : ""}`}
      >
        <div className={style.cross} style={{ zIndex: 9999 }}>
          <CloseIcon onClick={closeSidebar} />
        </div>

        <List className={style.sideBarList}>
          {NAV_ROUTE_LINKS.map((val, index) =>
            !val.havingNestedRoute ? (
              <ListItemButton key={index} disabled={val.isDisable}>
                <ListItemText>
                  {val.isDisable ? (
                    <span style={{ color: "#777" }}>{val.text}</span>
                  ) : (
                    <Link to={val.to} onClick={closeSidebar}>
                      <div
                        className={
                          location.pathname === val.to
                            ? style.activeClass
                            : ""
                        }
                      >
                        {val.text}
                      </div>
                    </Link>
                  )}
                </ListItemText>
              </ListItemButton>
            ) : (
              <React.Fragment key={index}>
                <ListItemButton
                  disabled={val.isDisable}
                  onClick={() =>
                    !val.isDisable &&
                    handleSidebarAccordion(index, val.nestedLinks)
                  }
                >
                  <ListItemText>
                    <div
                      className={
                        location.pathname === val.to
                          ? style.activeClass
                          : ""
                      }
                    >
                      {val.text}
                    </div>
                  </ListItemText>

                  {openSidebarIndex === index ? (
                    <ExpandLess />
                  ) : (
                    <ExpandMore />
                  )}
                </ListItemButton>

                <Collapse in={openSidebarIndex === index}>
                  <List component="div" disablePadding>
                    {nestedLinks.map((link, i) => (
                      <ListItemButton key={i} sx={{ pl: 4 }}>
                        <ListItemText>
                          <Link to={link.to} onClick={closeSidebar}>
                            <div
                              className={
                                location.pathname === link.to
                                  ? style.activeClass
                                  : ""
                              }
                            >
                              {link.text}
                            </div>
                          </Link>
                        </ListItemText>
                      </ListItemButton>
                    ))}
                  </List>
                </Collapse>
              </React.Fragment>
            )
          )}
        </List>
      </div>

      {/* ================= MODAL ================= */}
      {openFormModal && (
        <DialogModal open={openFormModal} onClose={() => setOpenFormModal(false)}>
          <FormComponent />
        </DialogModal>
      )}
    </>
  );
};

export default Navbar;
