import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { OneIcon, ThreIcon, TwoIcon } from "../../assets/images/icons/Icons";
import { ProfileHeaderStyle, ProfilenavStyle } from "./ProfileHeaderStyle";

export const ProfileHeader = () => {
  const { theme } = useSelector((state) => state);
  const { t } = useTranslation();

  return (
    <ProfileHeaderStyle>
      <ProfilenavStyle theme={theme.type}>
        <NavLink
          to="/profile/profile"
          className={({ isActive }) => (isActive ? "active" : "nav__link")}
        >
          <OneIcon /> {t("content.profile")}
        </NavLink>
        <NavLink
          to="security"
          className={({ isActive }) => (isActive ? "active" : "nav__link")}
        >
          <TwoIcon /> {t("content.security")}
        </NavLink>
        <NavLink
          to="settings"
          className={({ isActive }) => (isActive ? "active" : "nav__link")}
        >
          <ThreIcon /> {t("content.settings")}
        </NavLink>
      </ProfilenavStyle>
    </ProfileHeaderStyle>
  );
};
