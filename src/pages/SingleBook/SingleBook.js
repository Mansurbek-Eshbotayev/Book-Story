import axios from "axios";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { BookIcon } from "../../assets/images/icons/Icons";
import { ContainerStyle } from "../../assets/styles/AppStyled";
import { CardBook } from "../../components/CardBook/CardBook";
import { Header } from "../../components/Header/Header";
import {
  CoverContent,
  SingBookMiniInfo,
  SingBookMiniInfoSpan,
  SingBookMiniInfoText,
  SingleAuthorImg,
  SingleAuthorImgStyle,
  SingleAuthorInfo,
  SingleAuthorStyle,
  SingleAuthorText,
  SingleAuthorTitile,
  SingleBookLine,
  SingleWrapCarousel,
  SingleWrapInfor,
  SingleWrapInforBook,
  SingleWrapInforSpan,
  SingleWrapInforTitle,
} from "./SingleBookStyle";

import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export const SingleBook = () => {
  const { theme } = useSelector((state) => state);

  const [own, setOwn] = useState({});
  // console.log(own);

  const [card, setCard] = useState("");
  // console.log(card);

  const [books, setBooks] = useState([]);
  // console.log(books);

  const { t } = useTranslation();

  const { bookId } = useParams();
  // console.log(bookId);

  const { token } = useSelector((state) => state);

  useEffect(() => {
    axios
      .get("http://localhost:5000/book/bookId/" + bookId, {
        headers: {
          Authorization: token.token,
        },
      })
      .then((data) => {
        setOwn(data.data);
        setCard(data.data.author_id);
      })
      .catch((err) => console.log(err));
  }, [bookId]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/author/books/" + card, {
        headers: {
          Authorization: token.token,
        },
      })
      .then((data) => setBooks(data.data))
      .catch((err) => console.log(err));
  }, [card]);

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
              src={`http://localhost:5000/${own.image}`}
              alt={`${own.title}`}
            />
          </SingleAuthorImg>

          <SingleAuthorInfo>
            <SingleAuthorTitile theme={theme.type}>
              {`${own.title}`}
            </SingleAuthorTitile>

            <SingBookMiniInfo>
              <SingBookMiniInfoText theme={theme.type}>
                {t("singleBook.pages")}
              </SingBookMiniInfoText>
              <SingBookMiniInfoSpan theme={theme.type}>
                {own.page} {t("singleBook.page")}
              </SingBookMiniInfoSpan>
            </SingBookMiniInfo>

            <SingBookMiniInfo>
              <SingBookMiniInfoText theme={theme.type}>
                {t("singleBook.publish")}
              </SingBookMiniInfoText>
              <SingBookMiniInfoSpan theme={theme.type}>
                {own.year} {t("singleBook.years")}
              </SingBookMiniInfoSpan>
            </SingBookMiniInfo>

            <SingBookMiniInfo>
              <SingBookMiniInfoText variant={"noneMargin"} theme={theme.type}>
                {t("singleBook.book")}
              </SingBookMiniInfoText>
              <SingBookMiniInfoSpan theme={theme.type}>
                ${own.price}
              </SingBookMiniInfoSpan>
            </SingBookMiniInfo>

            <SingleBookLine theme={theme.type}>
              {t("singleBook.information")}
              <BookIcon theme={theme.type} />
            </SingleBookLine>

            <SingleAuthorText theme={theme.type}>
              {own.description}
            </SingleAuthorText>
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
