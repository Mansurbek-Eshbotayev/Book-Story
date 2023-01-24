import React, { useEffect, useState } from "react";
import { HeaderNav, HeaderStyled } from "./HeaderStyle";
import { Logo } from "../../assets/images/img/Img";
import { NavLink, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { useSelector } from "react-redux";
import axios from "axios";
import { RemoveToken } from "../../redux/token/tokenAction";

export const Header = () => {
  const { theme } = useSelector((state) => state);

  const { token } = useSelector((state) => state);

  const [user, SetUser] = useState({});

  const navigate = useNavigate();

  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const { t } = useTranslation();

  useEffect(() => {
    axios
      .get("http://localhost:5000/user/me", {
        headers: {
          Authorization: token.token,
        },
      })
      .then((data) => {
        if (data) {
          SetUser(data.data);
        } else {
          SetUser("");
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const hendleLog = () => {
    localStorage.removeItem("token");
    RemoveToken();
    navigate("/login");
    window.location.reload();
  };

  return (
    <>
      <HeaderStyled>
        <Logo />
        <HeaderNav>
          <NavLink
            to="/home/1"
            className={
              theme.type === "false"
                ? ({ isActive }) =>
                    isActive ? "activ_header_dark" : "unActive_dark"
                : ({ isActive }) => (isActive ? "activ_header" : "unActive")
            }
          >
            {t("header.main_page")}
          </NavLink>

          <NavLink
            to="/books/1"
            className={
              theme.type === "false"
                ? ({ isActive }) =>
                    isActive ? "activ_header_dark" : "unActive_dark"
                : ({ isActive }) => (isActive ? "activ_header" : "unActive")
            }
          >
            {t("header.books_page")}
          </NavLink>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  alt={user.first_name}
                  src={`http://localhost:5000/${user.image}`}
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px", padding: "0px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {/* {settings.map((setting) => ( */}
              <MenuItem
                onClick={() => navigate("/profile/profile")}
                sx={{
                  color: theme.type === "false" ? "#C9AC8C" : "inhereit",
                  bgcolor: theme.type === "false" ? "#222222" : "inhereit",
                }}
              >
                <Typography textAlign="center">
                  {t("header.profile")}
                </Typography>
              </MenuItem>
              <MenuItem
                onClick={() => navigate("/addauthor")}
                sx={{
                  color: theme.type === "false" ? "#C9AC8C" : "inhereit",
                  bgcolor: theme.type === "false" ? "#222222" : "inhereit",
                }}
              >
                <Typography textAlign="center">{t("header.author")}</Typography>
              </MenuItem>
              <MenuItem
                onClick={() => navigate("/addbook")}
                sx={{
                  color: theme.type === "false" ? "#C9AC8C" : "inhereit",
                  bgcolor: theme.type === "false" ? "#222222" : "inhereit",
                }}
              >
                <Typography textAlign="center">
                  {t("header.ad_book")}
                </Typography>
              </MenuItem>
              <MenuItem
                onClick={hendleLog}
                sx={{
                  color: theme.type === "false" ? "#C9AC8C" : "inhereit",
                  bgcolor: theme.type === "false" ? "#222222" : "inhereit",
                }}
              >
                <Typography textAlign="center">
                  {t("header.log_out")}
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
        </HeaderNav>
      </HeaderStyled>
    </>
  );
};
