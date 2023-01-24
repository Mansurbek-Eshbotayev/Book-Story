import React, { useEffect, useRef } from "react";
import {
  FormButton,
  FormInner,
  FormInput,
  FormStyle,
  FormTitle,
  FormWrap,
} from "./SearchBookStyle";
import { useTranslation } from "react-i18next";
import { SearchIcon, SearchIcondark } from "../../assets/images/icons/Icons";
import { useSelector } from "react-redux";
import axios from "axios";

export const SearchBook = ({ setGetBook }) => {
  const value = useRef();

  const hendlSubmit = (evt) => {
    evt.preventDefault();
    const id = value.current.value;

    if (id) {
      axios
        .get("http://localhost:5000/book/search?book=" + id)
        .then((data) => {
          setGetBook(data.data);
        })
        .catch((err) => console.log(err));
    }

    value.current.value = "";
  };

  const { theme } = useSelector((state) => state);
  const { t, i18n } = useTranslation();
  return (
    <FormWrap>
      <FormStyle onSubmit={hendlSubmit} theme={theme.type}>
        <FormTitle>{t("search.search")}</FormTitle>
        <FormInner>
          <FormInput
            ref={value}
            theme={theme.type}
            placeholder="Adiblar, kitoblar, audiolar, maqolalar..."
          />
          <FormButton theme={theme.type}>
            {theme.type === "false" ? <SearchIcondark /> : <SearchIcon />}
            {t("search.button")}
          </FormButton>
        </FormInner>
      </FormStyle>
    </FormWrap>
  );
};
