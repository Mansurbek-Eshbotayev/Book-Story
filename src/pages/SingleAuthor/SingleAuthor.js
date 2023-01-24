import axios from "axios";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ContainerStyle } from "../../assets/styles/AppStyled";
import { CardBook } from "../../components/CardBook/CardBook";
import { Header } from "../../components/Header/Header";
import {
  CoverContent,
  SingleAuthorImg,
  SingleAuthorImgStyle,
  SingleAuthorInfo,
  SingleAuthorMiniSpan,
  SingleAuthorSpan,
  SingleAuthorStyle,
  SingleAuthorText,
  SingleAuthorTitile,
  SingleWrapCarousel,
  SingleWrapInfor,
  SingleWrapInforBook,
  SingleWrapInforSpan,
  SingleWrapInforTitle,
  SingleWrapSpan,
  SingleWrapSpanLine,
} from "./SingleAuthorStyle";

import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export const SingleAuthor = () => {
  const { theme } = useSelector((state) => state);

  const [author, setAuthor] = useState({});

  const [books, setBooks] = useState([]);

  const { t } = useTranslation();

  const { id } = useParams();

  const { token } = useSelector((state) => state);

  useEffect(() => {
    axios
      .get("http://localhost:5000/author/authorId/" + id, {
        headers: {
          Authorization: token.token,
        },
      })
      .then((data) => setAuthor(data.data))
      .catch((err) => console.log(err));
  }, [id]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/author/books/" + id, {
        headers: {
          Authorization: token.token,
        },
      })
      .then((data) => setBooks(data.data))
      .catch((err) => console.log(err));
  }, [id]);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
    cssEase: "linear",
  };

  return (
    <CoverContent>
      <ContainerStyle>
        <Header />
        <SingleAuthorStyle>
          <SingleAuthorImg>
            <SingleAuthorImgStyle
              src={`http://localhost:5000/${author.image}`}
              alt={`${author.first_name}`}
            />
          </SingleAuthorImg>

          <SingleAuthorInfo>
            <SingleAuthorTitile theme={theme.type}>
              {`${author.first_name} ${author.last_name}`}
            </SingleAuthorTitile>
            <SingleAuthorText theme={theme.type}>{author.bio}</SingleAuthorText>

            <SingleWrapSpan>
              <SingleAuthorSpan theme={theme.type}>
                <SingleAuthorMiniSpan theme={theme.type}>
                  {t("singleAuthor.brith")}
                </SingleAuthorMiniSpan>
                {author.date_of_birth}
                <SingleAuthorMiniSpan theme={theme.type}>
                  {author.country}
                </SingleAuthorMiniSpan>
              </SingleAuthorSpan>

              <SingleWrapSpanLine theme={theme.type}>-</SingleWrapSpanLine>

              <SingleAuthorSpan theme={theme.type}>
                <SingleAuthorMiniSpan theme={theme.type}>
                  {t("singleAuthor.death")}
                </SingleAuthorMiniSpan>
                {author.date_of_death}
                <SingleAuthorMiniSpan theme={theme.type}>
                  {author.country}
                </SingleAuthorMiniSpan>
              </SingleAuthorSpan>
            </SingleWrapSpan>
          </SingleAuthorInfo>
        </SingleAuthorStyle>

        <SingleWrapCarousel theme={theme.type}>
          <SingleWrapInfor>
            <SingleWrapInforTitle theme={theme.type}>
              {t("singleBook.work")}
            </SingleWrapInforTitle>
            <SingleWrapInforSpan theme={theme.type}>
              {t("singleBook.see")}
            </SingleWrapInforSpan>
          </SingleWrapInfor>

          <SingleWrapInforBook>
            <Slider {...settings}>
              {books.map((book) => (
                <CardBook
                  key={book.author_id}
                  image={book.image}
                  title={book.title}
                  id={book.id}
                  author={book.author_id}
                />
              ))}
            </Slider>
          </SingleWrapInforBook>
        </SingleWrapCarousel>
      </ContainerStyle>
    </CoverContent>
  );
};
