import axios from "axios";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { ContainerStyle } from "../../assets/styles/AppStyled";
import { CardAuthor } from "../../components/CardAuthor/CardAuthor";
import { Carousel } from "../../components/Carousel/Carousel";
import { Header } from "../../components/Header/Header";
import { SearchHome } from "../../components/SearchHome/SearchHome";
import {
  CoverContent,
  WreapperDiv,
  Wreapperitem,
  WreapperList,
  WreapperStyle,
  WreapperTitle,
} from "./HomeStyle";

export const Home = () => {
  const [ganer, setGaner] = useState([]);

  const [getauthor, setGetAuthor] = useState([]);

  const { theme } = useSelector((state) => state);

  useEffect(() => {
    axios
      .get("http://localhost:5000/genre")
      .then((data) => setGaner(data.data))
      .catch((err) => console.log(err));
  }, []);

  const getAuthor = (id) => {
    axios
      .get("http://localhost:5000/author/genreId/" + id)
      .then((data) => {
        setGetAuthor(data.data);
        // console.log(data.data)
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getAuthor(1);
  }, []);

  const { t } = useTranslation();
  return (
    <CoverContent theme={theme.type}>
      <ContainerStyle>
        <Header />
        <Carousel />
        <SearchHome setGetAuthor={setGetAuthor} />
        <WreapperStyle>
          <WreapperTitle>{t("navlink.title")}</WreapperTitle>
          <WreapperList>
            {ganer.map((item) => (
              <Wreapperitem key={item.id}>
                <NavLink
                  and
                  onClick={() => getAuthor(item.id)}
                  to={`home/${item.id}`}
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
            {getauthor.map((item) => (
              <CardAuthor
                img={item.image}
                name={item.first_name}
                last_name={item.last_name}
                brith={item.date_of_birth}
                death={item.date_of_death}
                id={item.id}
              />
            ))}
          </WreapperDiv>
        </WreapperStyle>
      </ContainerStyle>
    </CoverContent>
  );
};
