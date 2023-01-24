import axios from "axios";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { ContainerStyle } from "../../assets/styles/AppStyled";
import { CardBook } from "../../components/CardBook/CardBook";
import { Carousel } from "../../components/Carousel/Carousel";
import { Header } from "../../components/Header/Header";
import { SearchBook } from "../../components/SearchBook/SearchBook";
import {
  CoverContent,
  WreapperDiv,
  Wreapperitem,
  WreapperList,
  WreapperStyle,
  WreapperTitle,
} from "./BooksStyle";

export const Books = () => {
  const [ganer, setGaner] = useState([]);

  const [getbook, setGetBook] = useState([]);

  const { t } = useTranslation();

  const { theme } = useSelector((state) => state);

  useEffect(() => {
    axios
      .get("http://localhost:5000/genre")
      .then((data) => setGaner(data.data))
      .catch((err) => console.log(err));
  }, []);

  const getAuthor = (id) => {
    axios
      .get("http://localhost:5000/book/genreId/" + id)
      .then((data) => {
        setGetBook(data.data);
        // console.log(data.data)
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getAuthor(1);
  }, []);

  return (
    <CoverContent>
      <ContainerStyle>
        <Header />
        <Carousel />
        <SearchBook setGetBook={setGetBook} />
        <WreapperStyle>
          <WreapperTitle>{t("navlink.title")}</WreapperTitle>
          <WreapperList>
            {ganer.map((item) => (
              <Wreapperitem key={item.id}>
                <NavLink
                  and
                  onClick={() => getAuthor(item.id)}
                  to={`books/${item.id}`}
                  className={
                    theme.type === "false"
                      ? ({ isActive }) =>
                          isActive ? "ganerDark" : "unganerDark"
                      : ({ isActive }) =>
                          isActive ? "activ_ganer" : "unactiv_ganer"
                  }
                >
                  {item.name}
                </NavLink>
              </Wreapperitem>
            ))}
          </WreapperList>

          <WreapperDiv>
            {getbook.map((item) => (
              <CardBook
                key={item.id}
                image={item.image}
                title={item.title}
                id={item.id}
                author={item.author_id}
              />
            ))}
          </WreapperDiv>
        </WreapperStyle>
      </ContainerStyle>
    </CoverContent>
  );
};
