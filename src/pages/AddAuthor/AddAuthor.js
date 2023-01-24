import axios from "axios";
import React, { useEffect, useRef } from "react";
import { useState } from "react";
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
} from "./AddAuthorStyle";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const AddAuthor = () => {
  const { theme } = useSelector((state) => state);
  const { token } = useSelector((state) => state);

  const { t } = useTranslation();
  const [genre, setGenre] = useState([]);

  const image = useRef();
  const first_name = useRef();
  const last_name = useRef();
  const date_of_birth = useRef();
  const date_of_death = useRef();
  const country = useRef();
  const ganer_id = useRef();
  const bio = useRef();

  const hendlSubmit = (evt) => {
    evt.preventDefault();

    const formData = new FormData();
    formData.append("first_name", first_name.current.value);
    formData.append("last_name", last_name.current.value);
    formData.append("date_of_birth", date_of_birth.current.value);
    formData.append("date_of_death", date_of_death.current.value);
    formData.append("country", country.current.value);
    formData.append("genre_id", ganer_id.current.value);
    formData.append("bio", bio.current.value);
    formData.append("image", image.current.files[0]);

    axios
      .post("http://localhost:5000/author", formData, {
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

    image.current.value = "";
    first_name.current.value = "";
    last_name.current.value = "";
    date_of_birth.current.value = "";
    date_of_death.current.value = "";
    country.current.value = "";
    ganer_id.current.value = "";
    bio.current.value = "";
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/genre")
      .then((data) => setGenre(data.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <FormBook onSubmit={(evt) => hendlSubmit(evt)}>
      <WrapImgBook theme={theme.type}>
        <WrapImgLabel theme={theme.type}>
          {theme.type === "false" ? <LabelDark /> : <LabelLight />}
          <WrapImgInput
            ref={image}
            name="image"
            type="file"
            style={{ visibility: "hidden" }}
          />
        </WrapImgLabel>
      </WrapImgBook>
      <WrapInfoBook>
        <WrapInfoBookInner>
          <WrapInfoTitle theme={theme.type}>
            {t("addauthor.title")}
          </WrapInfoTitle>
          <MainInput
            type="text"
            ref={first_name}
            placeholder={t("addauthor.first_name")}
            name="first_name"
            theme={theme.type}
            minLength="3"
            required
          />

          <MainInput
            type="text"
            ref={last_name}
            placeholder={t("addauthor.last_name")}
            name="last_name"
            theme={theme.type}
            minLength="3"
            required
          />

          <MainInput
            type="number"
            ref={date_of_birth}
            placeholder={t("addauthor.date_of_birth")}
            name="date_of_birth"
            theme={theme.type}
            required
          />

          <MainInput
            type="number"
            ref={date_of_death}
            placeholder={t("addauthor.death")}
            name="date_of_death"
            theme={theme.type}
          />

          <MainInput
            type="text"
            ref={country}
            placeholder={t("addauthor.country")}
            name="country"
            theme={theme.type}
            required
          />

          <MainSelect ref={ganer_id} theme={theme.type} defaultValue={""}>
            <MainSelectOption theme={theme.type} disabled value={""}>
              {t("addauthor.genre")}
            </MainSelectOption>
            {genre.map((item) => (
              <MainSelectOption key={item.id} value={item.id}>
                {item.name}
              </MainSelectOption>
            ))}
          </MainSelect>

          <MainTextArea
            ref={bio}
            theme={theme.type}
            placeholder={t("addbook.bio")}
            minLength="10"
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
