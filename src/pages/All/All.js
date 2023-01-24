import React from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { GlobalStyles } from "../../assets/styles/AppStyled";
import { AddAuthor } from "../AddAuthor/AddAuthor";
import { Addbook } from "../AddBook/Addbook";
import { Books } from "../Books/Books";
import { Home } from "../Home/Home";
import { Profile } from "../Profile/Profile";
import { SingleAuthor } from "../SingleAuthor/SingleAuthor";
import { SingleBook } from "../SingleBook/SingleBook";
import { AppWrap } from "./AllStyle";

export const All = () => {
  const { theme } = useSelector((state) => state);
  return (
    <AppWrap theme={theme.type}>
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="books/*" element={<Books />} />
        <Route path="/addbook" element={<Addbook />} />
        <Route path="/addauthor" element={<AddAuthor />} />
        <Route path="/singleauthor/:id" element={<SingleAuthor />} />
        <Route path="/singlebook/:bookId" element={<SingleBook />} />
        <Route path="/profile/*" element={<Profile />} />
      </Routes>
      <GlobalStyles theme={theme.type} />
    </AppWrap>
  );
};
