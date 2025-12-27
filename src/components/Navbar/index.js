import React from 'react';
import { useEffect, useState, useRef } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { NAV_ROUTE_LINK } from '../../utils/data';
import style from './navbar.module.scss';
import Dropdown from './Dropdown';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ButtonComponent from '../Button';
import { useTranslation } from 'react-i18next';
import DialogModal from '../Modal';
import FormComponent from '../Form';

const Navbar = () => {

  const NAV_ROUTE_LINKS = NAV_ROUTE_LINK();
  const [nestedLinks, setNestedLinks] = useState([]);
  const [openFormModal, setOpenFormModal] = useState(false);
  const location = useLocation();
  const sidebarRef = useRef(null);

  const [activeDropdown, setActiveDropdown] = useState(null);

  // 👉 NEW: Track which sidebar index is open
  const [openSidebarIndex, setOpenSidebarIndex] = useState(null);

  const [anchorEl, setAnchorEl] = useState(null);
  const openLang = Boolean(anchorEl);
  const [lang, setLang] = useState(localStorage.getItem("lang") || "en");
  const { i18n, t } = useTranslation();

  const handleClick2 = (index, nested) => {
    setOpenSidebarIndex(openSidebarIndex === index ? null : index);
    setNestedLinks(nested);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLang(lng);
    localStorage.setItem("lang", lng);
  };

  const handleClick1 = () => {
    document.getElementById('sideBar').style.display = 'flex';
  };

  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      handleClose();
    }
  };

  const handleClose = () => {
    document.getElementById('sideBar').style.display = 'none';
  };

  const handleModalFormOpen = () => setOpenFormModal(true);
  const handleModalFormClose = () => setOpenFormModal(false);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1020) {
        document.getElementById('sideBar').style.display = 'none';
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  return (
    <div>
      {/* TOP NAVBAR */}
      <div className={style.container}>
        <div className={style.logo}>
          <Link to={'/'}>
          <img
            src="/assets/images/eazyhomz-logo.png"
            alt="eazyhomz"
          />
          <h1>Eazyhomz</h1></Link>
          {/* <Link to="/" className="flex items-center gap-3 cursor-pointer">
            <img
              src="/assets/images/eazyhomz-logo.png"         // replace with your logo path
              alt="Eazyhomz"
              className="h-10 w-10"
            />
            <span className="text-xl font-semibold text-gray-800">
              Eazyhomz
            </span>
          </Link> */}
        </div>

        <ul className={style.listItem}>
          {NAV_ROUTE_LINKS.slice(1).map((val, index) => (
            !val.havingNestedRoute ? (
              <li key={index}
                className={location.pathname === val.to ? style.activeNavItem : style.navItem}
              >
                {val.isDisable ? (
                  <div style={{ fontSize: "16px", color: "#999" }}>
                    {val.text}
                  </div>
                ) : (
                  <NavLink to={val.to}>
                    <div style={{ fontWeight: "normal", fontSize: "16px" }}>
                      {val.text}
                    </div>
                  </NavLink>
                )}
              </li>
            ) : (
              <li key={index}
                onMouseEnter={() => setActiveDropdown(index)}
                onMouseLeave={() => setActiveDropdown(null)}
                className={location.pathname === val.to ? style.activeNavItem : style.navItem}
              >
                {val.isDisable ? (
                  <div style={{ fontSize: "16px", color: "#999" }}>
                    {val.text}
                  </div>
                ) : (
                  <NavLink to={val.to}>
                    <div style={{ fontWeight: "normal", fontSize: "16px" }}>
                      {val.text} <span className={style.arrow} />
                    </div>
                  </NavLink>
                )}

                {activeDropdown === index && !val.isDisable && (
                  <Dropdown menuItemsData={val.nestedLinks} />
                )}
              </li>
            )
          ))}
        </ul>

        <div className={style.navBtn}>
          <ButtonComponent onClick={handleModalFormOpen} text={t("GET_FREE_ESTIMATE")} />
        </div>

        <div className={style.icon}>
          <MenuIcon onClick={handleClick1} fontSize="large" />
        </div>
      </div>

      {/* SIDEBAR */}
      <div ref={sidebarRef} id="sideBar" className={style.sideBar}>
        <div className={style.cross}>
          <CloseIcon onClick={handleClose} fontSize="medium" />
        </div>

        <List className={style.sideBarList} component="nav">
          {NAV_ROUTE_LINKS.map((val, index) => (
            !val.havingNestedRoute ? (
              <ListItemButton key={index}
                disabled={val.isDisable}
                style={{
                  opacity: val.isDisable ? 0.5 : 1,
                  cursor: val.isDisable ? "not-allowed" : "pointer"
                }}
              >
                <ListItemText>
                  {val.isDisable ? (
                    <div style={{ color: "#777" }}>{val.text}</div>
                  ) : (
                    <Link to={val.to}>
                      <div className={`${location.pathname === val.to && style.activeClass}`}>
                        {val.text}
                      </div>
                    </Link>
                  )}
                </ListItemText>
              </ListItemButton>
            ) : (
              <React.Fragment key={index}>
                <ListItemButton
                  onClick={() => !val.isDisable && handleClick2(index, val.nestedLinks)}
                  disabled={val.isDisable}
                  style={{
                    opacity: val.isDisable ? 0.5 : 1,
                    cursor: val.isDisable ? "not-allowed" : "pointer"
                  }}
                >
                  <ListItemText>
                    <div className={`${location.pathname === val.to && style.activeClass}`}>
                      {val.text}
                    </div>
                  </ListItemText>

                  {!val.isDisable && (
                    openSidebarIndex === index ? (
                      <ExpandLess sx={{ mr: 3 }} />
                    ) : (
                      <ExpandMore sx={{ mr: 3 }} />
                    )
                  )}
                </ListItemButton>

                <Collapse in={openSidebarIndex === index} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {nestedLinks.map((link, i) => (
                      <ListItemButton key={i} sx={{ pl: 4 }}>
                        <ListItemText>
                          <Link to={link.to}>
                            <div className={`${location.pathname === link.to && style.activeClass}`}>
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
          ))}
        </List>
      </div>

      {openFormModal && (
        <DialogModal open={openFormModal} onClose={handleModalFormClose} title="">
          <FormComponent />
        </DialogModal>
      )}
    </div>
  );
};

export default Navbar;
