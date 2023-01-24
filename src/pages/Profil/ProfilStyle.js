import styled from "styled-components";
import imgBk from "../../assets/images/img/imgBk.png";

export const WrapProfil = styled.form`
  width: 1000px;
  margin: 0 auto;
  margin-top: 70px;
  display: flex;
`;

export const WrapProfilImg = styled.div`
  /* width: 390px; */
`;

export const ProfilImg = styled.img`
  width: 175px;
  height: 175px;
  border-radius: 100%;
  margin: 0 auto;
  background-image: url(${imgBk});
  background-repeat: no-repeat;
  background-size: 100px 100px;
  background-position: center;
  background-color: #e0eff6;
`;

export const WrapImgLabel = styled.label`
  position: relative;
  svg {
    position: absolute;
    right: 60px;
    bottom: 30px;
    width: 50px;
    height: 50px;
    padding: 12px 8px;
    fill: ${({ theme }) => (theme === "false" ? "#464E5F" : "#464E5F")};
    background-color: ${({ theme }) =>
      theme === "false" ? "#161616" : "#F3F6F9"};
    border-radius: 8px;
  }
`;

export const WrapImgInput = styled.input``;

export const WrapProfilInfo = styled.div`
  width: 100%;
  padding-bottom: 65px;
  border-bottom: 1px solid #ecf0f3;
  margin-bottom: 44px;
`;

export const WrapProfiTitle = styled.h2`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  color: ${({ theme }) => (theme === "false" ? "#DEDEDE" : "#212121")};
  margin: 0;
  margin-bottom: 32px;
`;

export const WrapProfiTitleLabel = styled.label`
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;
  color: #464e5f;
  color: ${({ theme }) => (theme === "false" ? "#F3F6F9" : "#464E5F")};
`;

export const WrapProfiTitleInput = styled.input`
  width: 100%;
  padding: 12px 20px;
  background-color: #f3f6f9;
  border-radius: 4px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  color: #464e5f;
  color: ${({ theme }) => (theme === "false" ? "#000000" : "#464E5F")};
  margin-bottom: 22px;
  border: none;
  margin-top: 7px;
  ::placeholder {
    color: #a3a8b0;
  }
`;

export const InnerWrap = styled.div``;

export const WrapButton = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const WrapProfiTitleButton = styled.button`
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 20px;
  padding: 12px 20px;
  color: ${({ theme }) => (theme === "false" ? "#0D0D0D" : "#FFFFFF")};
  background-color: ${({ theme }) =>
    theme === "false" ? "#F1F6FF" : " #152540"};
  border-radius: 4px;
`;
