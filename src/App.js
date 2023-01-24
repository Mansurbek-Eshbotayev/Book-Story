import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { GlobalStyles } from "./assets/styles/AppStyled";
import { AppWrap } from "./AppStyle";
import { Register } from "./pages/Rgister/Register";
import { lang } from "./Lang/Lang";
import { Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login/Login";
import { useSelector } from "react-redux";
import { All } from "./pages/All/All";

function App() {
  const { theme } = useSelector((state) => state);

  const { token } = useSelector((state) => state);
  console.log(token.token);

  i18n.use(initReactI18next).init({
    fallbackLng: localStorage.getItem("lang") || "en",
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: { translation: lang.en },
      ru: { translation: lang.ru },
      uz: { translation: lang.uz },
    },
  });

  if (!token.token) {
    return (
      <AppWrap>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <GlobalStyles theme={theme.type} />
      </AppWrap>
    );
  }
  return (
    <AppWrap>
      <All />
      <GlobalStyles theme={theme.type} />
    </AppWrap>
  );
}

export default App;
