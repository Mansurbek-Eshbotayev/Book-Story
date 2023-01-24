import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { PhotoIcon } from "../../assets/images/icons/Icons";
import {
  InnerWrap,
  ProfilImg,
  WrapButton,
  WrapImgInput,
  WrapImgLabel,
  WrapProfil,
  WrapProfilImg,
  WrapProfilInfo,
  WrapProfiTitle,
  WrapProfiTitleButton,
  WrapProfiTitleInput,
  WrapProfiTitleLabel,
} from "./ProfilStyle";

export const Profil = () => {
  const { theme } = useSelector((state) => state);

  const { token } = useSelector((state) => state);

  const [user, SetUser] = useState({});

  const { t } = useTranslation();

  const first_name = useRef();
  const last_name = useRef();
  const phone = useRef();
  const image = useRef();

  const hendlFormSubmit = (evt) => {
    evt.preventDefault();

    const formData = new FormData();

    formData.append("first_name", first_name.current.value);
    formData.append("last_name", last_name.current.value);
    formData.append("phone", phone.current.value);
    formData.append("image", image.current.files[0]);

    axios
      .put("http://localhost:5000/user/account", formData, {
        headers: {
          Authorization: token.token,
        },
      })
      .then((data) => {
        console.log(data);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/user/me", {
        headers: {
          Authorization: token.token,
        },
      })
      .then((data) => SetUser(data.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <WrapProfil onSubmit={hendlFormSubmit}>
      <WrapProfilImg>
        <WrapImgLabel theme={theme.type}>
          <ProfilImg
            src={`http://localhost:5000/${user.image}`}
            alt={user.first_name}
          />
          <PhotoIcon />
          <WrapImgInput
            ref={image}
            name="image"
            type="file"
            style={{ visibility: "hidden" }}
            required
          />
        </WrapImgLabel>
      </WrapProfilImg>

      <InnerWrap>
        <WrapProfilInfo>
          <WrapProfiTitle theme={theme.type}>
            {t("content.profile")}
          </WrapProfiTitle>

          <WrapProfiTitleLabel theme={theme.type}>
            {t("content.name")}
            <WrapProfiTitleInput
              theme={theme.type}
              ref={first_name}
              name="first_name"
              type="text"
              placeholder={t("content.namePl")}
              required
            />
          </WrapProfiTitleLabel>

          <WrapProfiTitleLabel theme={theme.type}>
            {t("content.last")}
            <WrapProfiTitleInput
              theme={theme.type}
              ref={last_name}
              name="last_name"
              type="text"
              placeholder={t("content.lastPl")}
              required
            />
          </WrapProfiTitleLabel>

          <WrapProfiTitleLabel theme={theme.type}>
            {t("content.phone")}
            <WrapProfiTitleInput
              theme={theme.type}
              ref={phone}
              name="phone"
              type="tel"
              placeholder={t("content.phonePl")}
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
