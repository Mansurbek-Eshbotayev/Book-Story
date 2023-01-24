import React from "react";
import { useSelector } from "react-redux";
import {
  CardAuthorImg,
  CardAuthorInfo,
  CardAuthorStyle,
  CardAuthorText,
  CardAuthorTitle,
} from "./CardAuthorStyle";

import LightIcon from "../../assets/images/img/lightBef.png";
import DarkIcon from "../../assets/images/img/lightBef.png";
import { NavLink } from "react-router-dom";

export const CardAuthor = ({ img, name, last_name, brith, death, id }) => {
  const { theme } = useSelector((state) => state);

  return (
    <CardAuthorStyle theme={theme.type}>
      <NavLink
        to={"/singleauthor/" + id}
        style={{ textDecorationLine: "none" }}
      >
        <CardAuthorImg
          src={`http://localhost:5000/${img}`}
          alt={{ name, last_name }}
        />
        <CardAuthorInfo theme={theme.type === "false" ? DarkIcon : LightIcon}>
          <CardAuthorTitle theme={theme.type}>
            {`${name} ${last_name}`}
          </CardAuthorTitle>
          <CardAuthorText theme={theme.type}>
            {`${brith}-${death}`}
          </CardAuthorText>
        </CardAuthorInfo>
      </NavLink>
    </CardAuthorStyle>
  );
};
