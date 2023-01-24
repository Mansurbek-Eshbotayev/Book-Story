import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { LabelDark, LabelLight } from "../../assets/images/icons/Icons";
import {
  FormBook,
  MainButton,
  MainInput,
  MainSelect,
  MainSelectOption,
  MainTextArea,
  WrapImgBook,
  WrapImgInput,
  WrapImgLabel,
  WrapInfoBook,
  WrapInfoBookInner,
  WrapInfoTitle,
} from "./AdbookStyled";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Addbook = () => {
  const { theme } = useSelector((state) => state);
  const { token } = useSelector((state) => state);
  const { t } = useTranslation();
  const [genre, setGenre] = useState([]);
  const [autorId, setAutorId] = useState("");
  const [genreId, setGenreId] = useState([]);

  const title = useRef();
  const page = useRef();
  const year = useRef();
  const price = useRef();
  const genre_id = useRef();
  const author_id = useRef();
  const description = useRef();
  const image = useRef();

  const hendlBookSubmit = (evt) => {
    evt.preventDefault();
    const formData = new FormData();

    formData.append("title", title.current.value);
    formData.append("page", page.current.value);
    formData.append("year", year.current.value);
    formData.append("price", price.current.value);
    formData.append("genre_id", genre_id.current.value);
    formData.append("author_id", author_id.current.value);
    formData.append("description", description.current.value);
    formData.append("image", image.current.files[0]);

    axios
      .post("http://localhost:5000/book", formData, {
        headers: {
          Authorization: token.token,
        },
      })
      .then((data) => {
        if (data.status === 201) {
          console.log(data);
          toast.success("Uploaded successfully!");
        }
      })
      .catch((err) => console.log(err));

    title.current.value = "";
    page.current.value = "";
    year.current.value = "";
    price.current.value = "";
    genre_id.current.value = "";
    author_id.current.value = "";
    description.current.value = "";
    image.current.value = "";
  };

  const getAutorId = (evt) => {
    axios
      .get("http://localhost:5000/author/genreId/" + evt.target.value)
      .then((data) => {
        setGenreId(data.data);
        // console.log(data.data)
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/genre")
      .then((data) => setGenre(data.data));
    // .catch(err => console.log(err))
  }, []);

  useEffect(() => {}, [autorId]);

  return (
    <FormBook onSubmit={(evt) => hendlBookSubmit(evt)}>
      <WrapImgBook theme={theme.type}>
        <WrapImgLabel theme={theme.type}>
          {theme.type === "dark" ? <LabelDark /> : <LabelLight />}
          <WrapImgInput
            ref={image}
            type="file"
            style={{ visibility: "hidden" }}
          />
        </WrapImgLabel>
      </WrapImgBook>
      <WrapInfoBook>
        <WrapInfoBookInner>
          <WrapInfoTitle theme={theme.type}>{t("addbook.title")}</WrapInfoTitle>
          <MainInput
            type="text"
            ref={title}
            placeholder={t("addbook.input_title")}
            name="title"
            theme={theme.type}
            required
          />
          <MainInput
            type="text"
            ref={page}
            placeholder={t("addbook.pages")}
            name="page"
            theme={theme.type}
            required
          />
          <MainInput
            type="number"
            ref={year}
            placeholder={t("addbook.year")}
            name="year"
            theme={theme.type}
            required
          />
          <MainInput
            type="number"
            ref={price}
            placeholder={t("addbook.price")}
            name="price"
            theme={theme.type}
            required
          />

          <MainSelect
            ref={genre_id}
            theme={theme.type}
            defaultValue={""}
            onChange={getAutorId}
          >
            <MainSelectOption theme={theme.type} disabled value={""}>
              {t("addbook.genre")}
            </MainSelectOption>
            {genre.map((item) => (
              <MainSelectOption key={item.id} value={item.id}>
                {item.name}
              </MainSelectOption>
            ))}
          </MainSelect>

          <MainSelect ref={author_id} theme={theme.type} defaultValue={""}>
            <MainSelectOption theme={theme.type} disabled value={""}>
              {t("addbook.author")}
            </MainSelectOption>
            {genreId.map((item) => (
              <MainSelectOption key={item.id} value={item.id}>
                {`${item.first_name} ${item.last_name}`}
              </MainSelectOption>
            ))}
          </MainSelect>

          <MainTextArea
            ref={description}
            theme={theme.type}
            placeholder={t("addbook.bio")}
          />

          <MainButton theme={theme.type} type="submit">
            {t("addbook.create")}
          </MainButton>
        </WrapInfoBookInner>
      </WrapInfoBook>
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </FormBook>
  );
};
