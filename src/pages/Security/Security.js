import axios from "axios";
import React, { useRef } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import {
  InnerWrap,
  WrapButton,
  WrapProfil,
  WrapProfilInfo,
  WrapProfiTitle,
  WrapProfiTitleButton,
  WrapProfiTitleInput,
  WrapProfiTitleLabel,
} from "./SecurityStyle";

export const Security = () => {
  const { theme } = useSelector((state) => state);

  const { token } = useSelector((state) => state);

  const { t } = useTranslation();

  const email = useRef();
  const currentPassword = useRef();
  const newPassword = useRef();

  const hendlFormSubmit = (evt) => {
    evt.preventDefault();

    const formData = new FormData();

    formData.append("email", email.current.value);
    formData.append("currentPassword", currentPassword.current.value);
    formData.append("newPassword", newPassword.current.value);

    axios
      .put("http://localhost:5000/user/security", formData, {
        headers: {
          Authorization: token.token,
        },
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <WrapProfil onSubmit={hendlFormSubmit}>
      <InnerWrap>
        <WrapProfilInfo>
          <WrapProfiTitle theme={theme.type}>
            {t("security.title")}
          </WrapProfiTitle>

          <WrapProfiTitleLabel theme={theme.type}>
            {t("security.mail")}
            <WrapProfiTitleInput
              ref={email}
              name="email"
              type="email"
              placeholder="admin@mail.ru"
              required
            />
          </WrapProfiTitleLabel>

          <WrapProfiTitleLabel theme={theme.type}>
            {t("security.password")}
            <WrapProfiTitleInput
              ref={currentPassword}
              name={t("security.passwordPl")}
              type="password"
              placeholder="password"
              required
            />
          </WrapProfiTitleLabel>

          <WrapProfiTitleLabel theme={theme.type}>
            {t("security.newPas")}
            <WrapProfiTitleInput
              ref={newPassword}
              name="newPassword"
              type="password"
              placeholder={t("security.newPasPl")}
              required
            />
          </WrapProfiTitleLabel>
        </WrapProfilInfo>

        <WrapButton>
          <WrapProfiTitleButton theme={theme.type}>
            {t("content.Save")}
          </WrapProfiTitleButton>
        </WrapButton>
      </InnerWrap>
    </WrapProfil>
  );
};
