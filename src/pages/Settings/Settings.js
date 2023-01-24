import Switch from "@mui/material/Switch";
import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import {
  InnerWrap,
  SelectOption,
  WrapButton,
  WrappingSwitch,
  WrapProfil,
  WrapProfilInfo,
  WrapProfiTitle,
  WrapProfiTitleButton,
} from "./SettingsStyle";
import { Wrapping, WrapProfiTitleSelectone } from "./SettingsStyle";
import { targetTheme } from "../../redux/theme/themeActinon";
import { TargetLAng } from "../../redux/language/langAction";
import { useTranslation } from "react-i18next";

export const Settings = () => {
  const { theme } = useSelector((state) => state);

  const { t } = useTranslation();

  const [checked, setChecked] = useState(
    localStorage.getItem("theme") || false
  );
  console.log(checked);

  const language = useRef();

  const hendlFormSubmit = (evt) => {
    evt.preventDefault();

    localStorage.setItem("lang", language.current.value);
    TargetLAng(language.current.value);

    localStorage.setItem("theme", checked);
    targetTheme(checked);

    setChecked(localStorage.getItem("theme"));

    window.location.reload();
  };

  return (
    <WrapProfil onSubmit={hendlFormSubmit}>
      <InnerWrap>
        <WrapProfilInfo>
          <WrapProfiTitle theme={theme.type}>{t("setting.set")}</WrapProfiTitle>

          <Wrapping theme={theme.type}>
            {t("setting.lang")}
            <WrapProfiTitleSelectone
              ref={language}
              theme={theme.type}
              defaultValue={""}
            >
              <SelectOption value="" disabled>
                {t("setting.chus")}
              </SelectOption>
              <SelectOption value="en">{t("setting.en")}</SelectOption>
              <SelectOption value="ru">{t("setting.ru")}</SelectOption>
              <SelectOption value="uz">{t("setting.uz")}</SelectOption>
            </WrapProfiTitleSelectone>
          </Wrapping>

          <WrappingSwitch theme={theme.type}>
            {t("setting.theme")}
            <Switch
              onChange={(evt) => setChecked(evt.target.checked)}
              defaultChecked={checked}
              inputProps={{ "aria-label": "controlled" }}
            />
          </WrappingSwitch>
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
