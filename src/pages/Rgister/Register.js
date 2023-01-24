import React from "react";
import { useTranslation } from "react-i18next";
import {
  RegisterContentWrap,
  RegisterImgWrap,
  RegisterWrap,
} from "./RegisterStyle";
import { RgisterImg } from "../../assets/images/img/Img";
import {
  Box,
  Button,
  InputAdornment,
  Link,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

// import React, { useContext, useState } from 'react'
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";

export const Register = () => {
  const { t } = useTranslation();
  const { theme } = useSelector((state) => state);

  const navigate = useNavigate();
  const [inputType, setinputType] = useState(false);

  const schema = Yup.object({
    frist_name: Yup.string().required("Required"),
    last_name: Yup.string().required("Required"),
    phone: Yup.string().required("Required"),
    email: Yup.string().email("Invalid").required("Required"),
    password: Yup.string().min(3, "3 ta").max(8, "8 ta").required("Required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "all",
    defaultValus: {
      frist_name: "",
      last_name: "",
      phone: "",
      email: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    axios
      .post("http://localhost:5000/user/register", {
        first_name: data.frist_name,
        last_name: data.last_name,
        phone: data.phone,
        email: data.email,
        password: data.password,
      })
      .then((data) => {
        if (data.status === 201) {
          localStorage.setItem("token", data.data.token);
          navigate("/");
        }
        console.log(data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <RegisterWrap>
      <RegisterImgWrap>
        <RgisterImg />
      </RegisterImgWrap>
      <RegisterContentWrap>
        <Box sx={{ width: "500px", marginX: "auto", padding: "20px" }}>
          <Typography
            variant="h3"
            component="h2"
            textAlign="start"
            gutterBottom
            sx={{
              fontWeight: "900",
              color: theme.type === "false" ? "#FFFFFF" : "#000",
            }}
          >
            {t("register.title")}
          </Typography>
          <Typography
            marginBottom="20px"
            variant="body2"
            textAlign="strt"
            color={theme.type === "false" ? "#FFFFFF" : "#000"}
          >
            {t("register.text")}
            <Link
              to="/login"
              component={RouterLink}
              marginLeft="10px"
              sx={{ textDecorationLine: "none" }}
            >
              {t("register.sign")}
            </Link>
          </Typography>

          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={2} marginBottom="20px">
              <TextField
                label={t("register.frist_name")}
                helperText={errors.frist_name ? "Required" : ""}
                {...register("frist_name", { required: "Required" })}
                sx={{
                  backgroundColor:
                    theme.type === "false" ? "#FFFFFF" : "inhereit",
                }}
              />

              <TextField
                label={t("register.last_name")}
                helperText={errors.last_name ? "Required" : ""}
                {...register("last_name", { required: true })}
                sx={{
                  backgroundColor:
                    theme.type === "false" ? "#FFFFFF" : "inhereit",
                }}
              />

              <TextField
                type="tel"
                label={t("register.phone")}
                helperText={errors.phone ? "Required" : ""}
                {...register("phone", { required: true })}
                sx={{
                  backgroundColor:
                    theme.type === "false" ? "#FFFFFF" : "inhereit",
                }}
              />

              <TextField
                type="email"
                label={t("register.email")}
                helperText={errors.email ? "Required" : ""}
                {...register("email", { required: true })}
                sx={{
                  backgroundColor:
                    theme.type === "false" ? "#FFFFFF" : "inhereit",
                }}
              />

              <TextField
                type={inputType ? "text" : "password"}
                label={t("register.password")}
                helperText={errors.password ? "Required" : ""}
                {...register("password", { required: true })}
                InputProps={{
                  endAdornment: (
                    <InputAdornment
                      onClick={() => setinputType(!inputType)}
                      position="end"
                    >
                      <VisibilityIcon cursor={"pointer"} />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  backgroundColor:
                    theme.type === "false" ? "#FFFFFF" : "inhereit",
                }}
              />
            </Stack>
            <Button
              disabled={!isValid}
              type="submit"
              variant="contained"
              sx={{
                width: "100%",
                paddingX: "5px",
                paddingY: "10px",
                bgcolor: "#152540",
                color: theme.type === "false" ? "#000" : "inhereit",
                backgroundColor: theme.type === "false" ? "#FFFFFF" : "#152540",
              }}
            >
              {t("register.next")}
            </Button>
          </form>
        </Box>
      </RegisterContentWrap>
    </RegisterWrap>
  );
};
