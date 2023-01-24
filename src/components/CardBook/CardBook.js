import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  CardBookImgStyle,
  CardBookStyle,
  CardBookTextStyle,
  CardBookTitleStyle,
} from "./CardBookStyle";

export const CardBook = ({ image, title, id, author }) => {
  const { token } = useSelector((state) => state);

  const [bottomName, setBottomName] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/author/authorId/" + author, {
        headers: {
          Authorization: token.token,
        },
      })
      .then((data) => {
        setBottomName([data.data]);
      })
      .catch((err) => console.log(err));
  }, [author]);

  const { theme } = useSelector((state) => state);
  return (
    <CardBookStyle>
      <NavLink to={"/singlebook/" + id} style={{ textDecorationLine: "none" }}>
        <CardBookImgStyle src={`http://localhost:5000/${image}`} alt={title} />
        <CardBookTitleStyle theme={theme.type}>{title}</CardBookTitleStyle>
        {bottomName.map((item) => (
          <CardBookTextStyle key={item.id} theme={theme.type}>
            {`${item.first_name} ${item.last_name}`}
          </CardBookTextStyle>
        ))}
      </NavLink>
    </CardBookStyle>
  );
};
